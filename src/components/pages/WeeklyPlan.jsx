import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WeeklyPlan = () => {
  const weeklyPlan = useSelector((state) => state.mealPlan.weeklyPlan);
  const mealLabels = ["Lunch", "Dinner"];
  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="mb-4 mt-4 text-center">Your weekly plan</h2>
      {!weeklyPlan ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        Object.entries(weeklyPlan).map(([day, meals]) => (
          <div key={day} className="mb-4">
            <h4>{day.toUpperCase()}</h4>
            <Row>
              {meals.slice(0, 2).map((meal, index) => (
                <Col md={6} key={meal.id} className="mb-3">
                  <Card>
                    <Card.Header>{mealLabels[index]}</Card.Header>
                    <Card.Img variant="top" src={meal.image} />
                    <Card.Body>
                      <Card.Title>{meal.title}</Card.Title>
                      {meal.dishTypes?.length > 0 && <p>Type: {meal.dishTypes?.join(", ")}</p>}

                      <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Vai alle ricette
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))
      )}

      <Button variant="success" className="mb-4" onClick={() => navigate("/groceries")}>
        Vai alla lista della spesa
      </Button>
    </Container>
  );
};
export default WeeklyPlan;
