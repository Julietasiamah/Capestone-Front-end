import { useEffect, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

const Groceries = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  // Carica la lista salvata al primo render
  useEffect(() => {
    const savedList = localStorage.getItem("groceries");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  // Aggiorna il localStorage ogni volta che cambia la lista
  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(list));
  }, [list]);

  //funzione per aggiungere un ingrediente
  const addItem = () => {
    if (item.trim() !== "") {
      setList([...list, item.trim()]);
      setItem("");
    }
  };
  //funzione per rimuovere un ingrediente
  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Lista della Spesa</h2>
      <Row>
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Aggiungi un elemento..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
          />
        </Col>
        <Col md={4}>
          <Button onClick={addItem} variant="success">
            Aggiungi
          </Button>
        </Col>
      </Row>

      <ListGroup className="mt-4">
        {list.map((grocery, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {grocery}
            <Button variant="danger" size="sm" onClick={() => removeItem(index)}>
              Rimuovi
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Groceries;
