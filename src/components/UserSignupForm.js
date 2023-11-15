import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "reactstrap";
import "../styles/exerciseform.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[A-Za-z]*[0-9]{0,3}[A-Za-z]*$/,
      "Username only contain alphabetical letters at at most 3 numbers."
    )
    .min(8, "Username must have at least 8 characters.")
    .max(15, "Username be no more than 15 characters.")
    .required("Username is required."),
  firstname: Yup.string()
    .matches(/^[A-Za-z]+$/, "First Name only contain alphabetical letters.")
    .min(2, "First Name must have at least 2 characters.")
    .max(15, "First Name be no more than 15 characters.")
    .required("First Name is required."),
  lastname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name only contain alphabetical letters.")
    .min(2, "Last Name must have at least 2 characters.")
    .max(15, "Last Name be no more than 15 characters.")
    .required("Last Name is required."),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
      "Password must contain at least one letter and/or one number."
    )
    .min(8, "Password must contain at least 8 characters.")
    .max(15, "Password cannot be longer than 15 characters.")
    .matches(
      /^(?!.*(.)\1{2,}).*$/,
      "Password cannot contain more than three identical consecutive characters."
    )
    .required("Password is required."),
});

export default function UserSignupForm({ onSubmit, initialData = {} }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Row className="justify-content-left">
        <Col xs="12" md="9" lg="10">
          <div className="form-container">
            <Formik
              initialValues={{
                username: initialData.username || "",
                firstname: initialData.firstname || "",
                lastname: initialData.lastname || "",
                password: initialData.password || "",
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
                        <label className="form-label" htmlFor="firstname">
                          <strong>First Name:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="form-group">
                        <Field
                          type="text"
                          id="firstname"
                          name="firstname"
                          className="form-input"
                          placeholder="First Name..."
                        />
                        <ErrorMessage
                          name="firstname"
                          component="div"
                          className="error"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12" md="3">
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastname">
                          <strong>Last Name:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="form-group">
                        <Field
                          type="text"
                          id="lastname"
                          name="lastname"
                          className="form-input"
                          placeholder="Last Name..."
                        />
                        <ErrorMessage
                          name="lastname"
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
                          <strong>Choose Your Password:</strong>
                        </label>
                      </div>
                    </Col>
                    <Col xs="12" md="6">
                      <div className="form-group">
                        <Field
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          className="form-input"
                          placeholder="Password..."
                        />
                      </div>
                    </Col>
                    <Col xs="12" md="3">
                      <div className="form-group">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="form-group">
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                        <div className="password-note">
                          <p>Passwords requirements:</p>
                          <ul>
                            <li>Must be 8 to 15 characters in length</li>
                            <li>
                              Must only contain alphabetical and numerical
                              values
                            </li>
                            <li>
                              Must not have 3 consecutive numbers in a row
                            </li>
                          </ul>
                        </div>
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
