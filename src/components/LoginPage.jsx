// import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(loginSuccess({ user: data.username, token: data.token }));
      localStorage.setItem("token", data.token);
      navigate("/home");
    } else {
      alert("Login fallito");
    }
  };

  return (
    <Container className="mt-5" id="container-register">
      <h2>Login</h2>
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
