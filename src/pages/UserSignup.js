import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import UserSignupForm from "../components/UserSignupForm";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const resource = "http://localhost:8080/users/signup";
  const [signupSuccess, setSignupSuccess] = useState(false); // state for checking if User logged in successfully
  const navigate = useNavigate();

  function NavigateSuccess() {
    navigate("/users/welcome"); // page that users redirect to after successful account creation
  }

  const handleSignup = async (formData) => {
    try {
      const response = await fetch(resource, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Handle the token, e.g., store it in localStorage
        localStorage.setItem("token", token);

        setSignupSuccess(true); // changes the setSignupSuccess to true, which means User was signed up successfully - YAY!
        console.log("Account creation successful:", data);
        NavigateSuccess(); // redirects user to User Welcome Page after successful signup/login - YAY!
      } else {
        console.error("Account creation failed:", response.statusText);
      }
    } catch (error) {
      console.log("Error during login caught:", error);
    }
  };

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="py-3">
            <h1>Create a New Account</h1>
          </Col>
        </Row>
        <Row>
          <Col className="m-3 p-3">
            <div>
              <p>
                Please fill out the form below to sign-up for a new user
                account.
              </p>
            </div>
            <div>
              <UserSignupForm onSubmit={handleSignup} />
            </div>
          </Col>
        </Row>

        {/* This shows if signup or account creation was successful. */}
        {signupSuccess && (
          <Row>
            <Col className="m-3 p-3">
              <div className="success-message">
                Account creation successful!
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default UserSignup;
