import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import Vegetarian from "../../assets/vegetarian.avif";
import Onnivoro from "../../assets/Onnivoro.avif";
import Vegano from "../../assets/veg.avif";
import Senzaglu from "../../assets/senzaglu.avif";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWeeklyMealPlan } from "../../redux/action/mealPlanAction";
import DietPreferenceCard from "../DietPreferenceCard";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDietClick = (diet) => {
    dispatch(fetchWeeklyMealPlan(diet)); //Genera piano settimanale per la dieta selezionata
    navigate("/weekly-plan");
  };

  const preferences = [
    { title: "Nessuna preferenza", image: Onnivoro, diet: "" },
    { title: "Vegetariano", image: Vegetarian, diet: "vegetarian" },
    { title: "Vegano", image: Vegano, diet: "vegan" },
    { title: "Senza glutine", image: Senzaglu, diet: "gluten free" },
  ];

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

          <Row>
            {preferences.map((pref, idx) => (
              <Col md={6} key={idx}>
                <DietPreferenceCard
                  title={pref.title}
                  image={pref.image}
                  description="Pasti adatti alla tua dieta"
                  onClick={() => handleDietClick(pref.diet)}
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
