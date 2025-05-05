import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import Vegetarian from "../../assets/vegetarian.avif";
import Onnivoro from "../../assets/Onnivoro.avif";
import Vegano from "../../assets/veg.avif";
import Senzaglu from "../../assets/senzaglu.avif";
import Pescetarian from "../../assets/pescetarian.avif";
import Keto from "../../assets/keto.avif";

const Home = () => {
  return (
    <Container>
      <Alert
        variant="light"
        className="mt-4 px-4 py-4 rounded-4 shadow-sm border-0 text-center"
        style={{ backgroundColor: "#e9f7ef", color: "#2c3e50" }}
      >
        <h3 className="mb-3 fw-semibold">
          Benvenuto su <span style={{ color: "#6FCF97" }}>MyMeal</span> – il tuo spazio per pianificare con gusto!
        </h3>
        <p className="mb-0">
          Crea il tuo piano settimanale, scopri nuove ricette e gestisci la tua spesa con semplicità.
          <br /> Inizia quando vuoi!
        </p>
      </Alert>

      <Row className="mt-5">
        <Col>
          <h4 className="mb-3">Preferenze alimentari</h4>
          <div className="d-flex flex-wrap gap-2">
            <Container>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Onnivoro} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-success">No preference</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Vegetarian} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-success">Vegetarian</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Vegano} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-success">Vegano</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Senzaglu} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-success">Gluten free</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Keto} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-success">Keto</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={Pescetarian} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-success">Pescetarian</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
