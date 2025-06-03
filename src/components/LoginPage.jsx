// import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { login } from "../redux/actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const loginError = useSelector((state) => state.auth.loginError); // Ottieni l'errore dal state di Redux

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(form)).unwrap();
      navigate("/home");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Gestisci l'errore di login qui
    }
  };

  return (
    <Container className="mt-5" id="container-register">
      <h2>Login</h2>
      {loginError && (
        <Alert variant="danger" className="mt-3">
          {loginError}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </Form.Group>

        <Button type="submit" className="mt-4" id="register-button">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
