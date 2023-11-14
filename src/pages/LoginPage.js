import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const resource = "http://localhost:8080/users/login";
  const [loginSuccess, setLoginSuccess] = useState(false); // state for checking if User logged in successfully
  const navigate = useNavigate();

  function NavigateSuccess() {
    navigate("/users/welcome");
  }

  const handleLogin = async (formData) => {
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

        setLoginSuccess(true); // changes the setLoginSuccess to true, which means User was logged in successfully - YAY!
        console.log("Login successful:", data);
        NavigateSuccess(); // redirects user to User Welcome Page after successful login - YAY!
      } else {
        console.error("Login failed:", response.statusText);
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
            <h1>Login</h1>
          </Col>
        </Row>
        <Row>
          <Col className="m-3 p-3">
            <div>
              <p>Please enter your login credentials to log in.</p>
            </div>
            <div>
              <LoginForm onSubmit={handleLogin} />
              <p>Don't have an account? Create one.</p>
            </div>
          </Col>
        </Row>

        {/* This shows if login was successful. */}
        {loginSuccess && (
          <Row>
            <Col className="m-3 p-3">
              <div className="success-message">Login successful!</div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default UserLogin;
