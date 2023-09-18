import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "reactstrap";
import "../styles/exerciseform.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Exercise Name is required."),
  desc: Yup.string().required("Description is required."),
  instr: Yup.string().required("Instructions are required."),
  category: Yup.string().required("Category is required."),
  file: Yup.mixed(),
});

export default function ExerciseForm({ onSubmit, initialData = {} }) {
  return (
    <Container>
      <Row className="justify-content-left">
        <Col xs="12" md="6">
          <div className="form-container">
            <Formik
              initialValues={{
                name: initialData.name || "",
                desc: initialData.desc || "",
                instr: initialData.instr || "",
                category: initialData.category || "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                onSubmit(values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Row>
                    <Col xs="12" md="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          <strong>Exercise Name:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="8">
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
                    <Col xs="12" md="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="desc">
                          <strong>Description:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="8">
                      <div className="form-group">
                        <Field
                          as="textarea"
                          rows="2"
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
                    <Col xs="12" md="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="instr">
                          <strong>Instructions:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="8">
                      <div className="form-group">
                        <Field
                          as="textarea"
                          rows="5"
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
                    <Col xs="12" md="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="category">
                          <strong>Category:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="8">
                      <div className="form-group">
                        <Field
                          as="select"
                          name="category"
                          className="form-select"
                        >
                          <option value="">Choose one...</option>
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
