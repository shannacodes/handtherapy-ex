import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "reactstrap";
import "../styles/exerciseform.css";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string().required("Password is required."),
});

export default function LoginForm({ onSubmit, initialData = {} }) {
  return (
    <Container>
      <Row className="justify-content-left">
        <Col xs="12" md="9" lg="10">
          <div className="form-container">
            <Formik
              initialValues={{
                username: initialData.username || "",
                password: initialData.password || "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                onSubmit(values);
                setSubmitting(false);
                // resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Row>
                    <Col xs="12" md="3">
                      <div className="form-group">
                        <label className="form-label" htmlFor="username">
                          <strong>Username:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="form-group">
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          className="form-input"
                          placeholder="Username..."
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="3">
                      <div className="form-group">
                        <label className="form-label" htmlFor="password">
                          <strong>Password:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="form-group">
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="form-input"
                          placeholder="Password..."
                        />
                        <ErrorMessage
                          name="password"
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
