import { Alert, Button, Container, Form } from "react-bootstrap";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Registrazione riuscita!");
      navigate("/login");
    } else {
      alert("Errore nella registrazione");
    }
  };

  return (
    <Container className="mt-5" id="container-register">
      <h2 id="register">Registrazione</h2>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mt-3">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci il tuo nome"
            onChange={(e) => setForm(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="surname" className="mt-3">
          <Form.Label className="text-white">Surname</Form.Label>
          <Form.Control
            type="text"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci il tuo cognome"
            onChange={(e) => setForm(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            type="email"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci la tua email"
            onChange={(e) => setForm(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="username" className="mt-3">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            type="text"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci il tuo username"
            onChange={(e) => setForm(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci la tua password"
            onChange={(e) => setForm(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-4" id="register-button">
          Registrati
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
