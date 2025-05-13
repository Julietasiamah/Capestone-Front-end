import { Card, Col, Container, Row } from "react-bootstrap";
import Onnivoro from "../../assets/Onnivoro.avif";

const Recipe = () => {
  return (
    <Container>
      <h2 className="text-center mt-3">Ricette</h2>

      <Row>
        <Col md={7}>
          <Card>
            <Card.Img variant="top" src={Onnivoro} />
            <Card.Body>
              <Card.Header>Nome Pasto</Card.Header>
              <p className="text-center mt-3">Ingredienti</p>
              <Card.Text>
                <ul>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                  <li>1kg di carne</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h6 className="mt-3 fw-semibold">Procedimento</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, perspiciatis! Deleniti distinctio
            explicabo neque modi et doloribus reiciendis vitae est. At alias quod quasi, distinctio autem libero beatae
            dolorem? Vel? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, perspiciatis! Deleniti
            distinctio explicabo neque modi et doloribus reiciendis vitae est. At alias quod quasi, distinctio autem
            libero beatae dolorem? Vel? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus,
            perspiciatis! Deleniti distinctio explicabo neque modi et doloribus reiciendis vitae est. At alias quod
            quasi, distinctio autem libero beatae dolorem? Vel?
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Recipe;
