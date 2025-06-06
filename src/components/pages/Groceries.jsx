import { useEffect, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Groceries = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const { recipe } = useSelector((state) => state.recipeDetails);
  const navigate = useNavigate();

  useEffect(() => {
    const savedList = localStorage.getItem("groceries");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    if (recipe && recipe.ingredienti && typeof recipe.ingredienti === "string") {
      const ingredients = recipe.ingredienti
        .split(",")
        .map((ing) => ing.trim())
        .filter((ing) => ing !== "");
      const nuovi = ingredients.filter((ing) => !list.includes(ing));
      if (nuovi.length > 0) {
        setList((prev) => [...prev, ...nuovi]);
      }
    }
  }, [recipe]);

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(list));
  }, [list]);

  const addItem = () => {
    const newItem = item.trim();
    if (newItem !== "" && !list.includes(newItem)) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4" style={{ color: "#c0c0c0" }}>
        Lista della Spesa
      </h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <Row>
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Aggiungi un elemento..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button onClick={addItem} variant="success">
              Aggiungi
            </Button>
          </Col>
        </Row>
      </Form>
      {list.length === 0 && <p className="text-white mt-3">La tua lista della spesa è vuota.</p>}
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
      <div>
        <Button onClick={() => setList([])} variant="danger" className="mt-4">
          Pulisci Lista
        </Button>
      </div>
      <div className="mt-3">
        <Button onClick={() => navigate(-1)} className="mb-3" id="register-button">
          Torna indietro
        </Button>
      </div>
    </Container>
  );
};

export default Groceries;
