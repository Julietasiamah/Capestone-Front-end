import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(credentials));
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home"); // reindirizza dopo login
    }
  };

  return (
    <Container className="mt-5" id="container-register">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" className="mt-4" id="register-button">
          Accedi
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
