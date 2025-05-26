import { Alert, Button, Container, Form } from "react-bootstrap";
import { registerUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(userData));
    navigate("/login"); // reindirizza al login dopo la registrazione
  };

  return (
    <Container className="mt-5" id="container-register">
      <h2 id="register">Registrazione</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nome">
          <Form.Label className="text-white">Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            value={userData.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3">
          <Form.Label className="text-white ">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            value={userData.email}
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
            value={userData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" className="mt-4 " id="register-button">
          Registrati
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
