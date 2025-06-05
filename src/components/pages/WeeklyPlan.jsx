import { Button, Card, Col, Container, Row, Spinner, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateMealPlanWeek } from "../../redux/actions/mealPlanAction";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";

const WeeklyPlan = () => {
  const { weeklyPlan, loading, error } = useSelector((state) => state.mealPlan);
  const navigate = useNavigate();
  const [dayFilter, setDayFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const dispatch = useDispatch();

  // Funzione per spostare un pasto all'interno della settimana
  const handleMove = (day, index, direction, targetDay = null) => {
    // Copia profonda della settimana
    const newWeek = Object.fromEntries(
      Object.entries(weeklyPlan.week).map(([giorno, value]) => [giorno, { ...value, meals: [...value.meals] }])
    );

    const sourceMeals = newWeek[day].meals;
    const mealToMove = sourceMeals[index];

    if (!mealToMove) return;

    if (targetDay && targetDay !== day) {
      // Spostamento tra giorni
      newWeek[day].meals.splice(index, 1); // rimuovi dal giorno di origine
      newWeek[targetDay].meals.push(mealToMove); // aggiungi al giorno di destinazione
    } else {
      // Spostamento interno al giorno
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= sourceMeals.length) return;
      [sourceMeals[index], sourceMeals[targetIndex]] = [sourceMeals[targetIndex], sourceMeals[index]];
    }

    dispatch(updateMealPlanWeek(newWeek));
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Caricamento piano settimanale...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <p>Errore: {error}</p>
      </div>
    );
  }

  if (!weeklyPlan) {
    return (
      <div className="text-center mt-5">
        <p>Nessun piano settimanale disponibile.</p>
      </div>
    );
  }

  const days = Object.keys(weeklyPlan.week);
  const categories = ["PRANZO", "CENA"];

  const filteredMeals = Object.entries(weeklyPlan.week)
    .filter(([day]) => {
      if (dayFilter && day !== dayFilter) return false;
      return true;
    })
    .map(([day, { meals }]) => {
      const filteredMeals = meals.filter((meal, idx) => {
        if (categoryFilter && (idx === 0 ? "PRANZO" : "CENA") !== categoryFilter) return false;
        return true;
      });
      return { day, meals: filteredMeals };
    })
    .filter(({ meals }) => meals.length > 0);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4" style={{ color: "#c0c0c0" }}>
        Piano Settimanale
      </h2>
      <Row>
        <Col md={4}>
          <Form>
            <Form.Group controlId="dayFilter">
              <Form.Label className="text-white fw-bold">Giorno</Form.Label>
              <Form.Control as="select" value={dayFilter} onChange={(e) => setDayFilter(e.target.value)}>
                <option value="">Tutti i giorni</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="categoryFilter">
              <Form.Label className="text-white fw-bold">Categoria</Form.Label>
              <Form.Control as="select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="">Tutte le categorie</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {filteredMeals.map(({ day, meals }, index) => (
        <div key={index} className="mb-5">
          <h4 className="mb-3 mt-3" style={{ color: "#c0c0c0" }}>
            {day}
          </h4>
          <Row>
            {meals.map((meal, idx) => (
              <Col md={6} key={idx} className="mb-3">
                <h5 className="text-center" style={{ color: "#c0c0c0" }}>
                  {idx === 0 ? "PRANZO" : "CENA"}
                </h5>
                <Card className="h-100 shadow-sm card diet-card" style={{ backgroundColor: "#D0DACF" }}>
                  <Card.Img
                    variant="top"
                    src={meal.imgUrl}
                    style={{
                      objectFit: "cover",
                      height: "350px",
                      width: "500px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{meal.nome}</Card.Title>
                    <Button variant="outline-success" onClick={() => navigate(`/recipes/${meal.id}`)}>
                      Visualizza ricetta
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleMove(day, idx, -1)}
                      disabled={idx === 0}
                      className="mx-2"
                    >
                      <ArrowUpCircleFill />
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleMove(day, idx, 1)}
                      disabled={idx === meals.length - 1}
                    >
                      <ArrowDownCircleFill />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};
export default WeeklyPlan;
