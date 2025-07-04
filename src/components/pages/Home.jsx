import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";

import Vegetarian from "../../assets/vegetarian.avif";
import Onnivoro from "../../assets/Onnivoro.avif";
import Vegano from "../../assets/veg.avif";
import Senzaglu from "../../assets/senzaglu2.jpg";

import DietPreferenceCard from "../DietPreferenceCard";

const Home = () => {
  const preferences = [
    { title: "Nessuna preferenza", image: Onnivoro, diet: "CARNIVORO" },
    { title: "Vegetariano", image: Vegetarian, diet: "VEGETARIANO" },
    { title: "Vegano", image: Vegano, diet: "VEGANO" },
    { title: "Senza glutine", image: Senzaglu, diet: "SENZA_GLUTINE" },
  ];

  return (
    <Container>
      <Alert
        variant="light"
        className="mt-4 px-4 py-4 rounded-4 shadow-sm border-0 text-center"
        style={{ backgroundColor: "#D0DACF", color: "#8daa95" }}
      >
        <h3 className="mb-3 fw-semibold">
          Benvenuto su <span style={{ color: "#475649" }}>MealPlanner</span> – il tuo spazio per pianificare con gusto!
        </h3>
        <p className="mb-0" style={{ color: "#02271c" }}>
          Crea il tuo piano settimanale, scopri nuove ricette e gestisci la tua spesa con semplicità.
          <br /> Inizia quando vuoi!
        </p>
      </Alert>

      <Row className="mt-5">
        <Col>
          <h4 className="mb-3 " style={{ color: "#c0c0c0" }}>
            Preferenze Alimentari
          </h4>

          <Row>
            {preferences.map((pref, idx) => (
              <Col md={6} key={idx}>
                <DietPreferenceCard
                  title={pref.title}
                  image={pref.image}
                  description="Pasti adatti alla tua dieta"
                  diet={pref.diet} //Diet type
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
