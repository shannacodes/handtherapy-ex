import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "reactstrap";
import "../styles/exerciseform.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Exercise Name is required."),
  desc: Yup.string().required("Description is required."),
  instr: Yup.string().required("Instructions are required."),
  category: Yup.string().required("Category is required."),
  // file: Yup.mixed(),
});

export default function ExerciseForm({ onSubmit, initialData = {} }) {
  const [setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Container>
      <Row className="justify-content-left">
        <Col xs="12" md="9" lg="10">
          <div className="form-container">
            <Formik
              initialValues={{
                name: initialData.name || "",
                desc: initialData.desc || "",
                instr: initialData.instr || "",
                category: initialData.category || "",
                file: null,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // need to include file when connecting to back-end
                onSubmit(values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Row>
                    <Col xs="12" md="5">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          <strong>Exercise Name:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="7">
                      <div className="form-group">
                        <Field
                          type="text"
                          name="name"
                          className="form-input"
                          placeholder="Exercise Name..."
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="5">
                      <div className="form-group">
                        <label className="form-label" htmlFor="desc">
                          <strong>Description:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="7">
                      <div className="form-group">
                        <Field
                          as="textarea"
                          rows="3"
                          name="desc"
                          className="form-input"
                          placeholder="Brief Description..."
                        />
                        <ErrorMessage
                          name="desc"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="5">
                      <div className="form-group">
                        <label className="form-label" htmlFor="instr">
                          <strong>Instructions:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="7">
                      <div className="form-group">
                        <Field
                          as="textarea"
                          rows="6"
                          name="instr"
                          className="form-input"
                          placeholder="Type instructions here..."
                        />
                        <ErrorMessage
                          name="instr"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="5">
                      <div className="form-group">
                        <label className="form-label" htmlFor="category">
                          <strong>Category:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="7">
                      <div className="form-group">
                        <Field
                          as="select"
                          name="category"
                          className="form-select"
                        >
                          <option value="" disabled hidden>
                            Choose one...
                          </option>
                          <option value="Finger">Finger</option>
                          <option value="Thumb">Thumb</option>
                          <option value="Wrist">Wrist</option>
                          <option value="Forearm">Forearm</option>
                          <option value="Elbow">Elbow</option>
                          <option value="Shoulder">Shoulder</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="5">
                      <div className="form-group">
                        <label className="form-label" htmlFor="file">
                          <strong>Image:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="8">
                      <div className="form-group">
                        <input
                          type="file"
                          name="file"
                          accept="image/*" // Limit file type to images
                          onChange={handleFileChange}
                        />
                        <ErrorMessage
                          name="file"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <button
                    className="buttonStyle"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
