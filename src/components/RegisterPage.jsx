import { Button, Container, Form } from "react-bootstrap";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../redux/actions/authRegAction";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
  });

  console.log(form);
  //const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(form));
      alert("Registrazione riuscita!");
      navigate("/login");
    } catch (error) {
      alert("Errore: " + error.message);
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
            name="name"
            value={form.name}
            placeholder="Inserisci il tuo nome"
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="surname" className="mt-3">
          <Form.Label className="text-white">Surname</Form.Label>
          <Form.Control
            type="text"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci il tuo cognome"
            name="surname"
            value={form.surname}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            type="email"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci la tua email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="username" className="mt-3">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            type="text"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci il tuo username"
            name="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            style={{ backgroundColor: "#D0DACF", color: "#02271c" }}
            placeholder="Inserisci la tua password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
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
