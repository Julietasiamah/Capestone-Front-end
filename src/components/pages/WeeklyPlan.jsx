import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WeeklyPlan = () => {
  const { weeklyPlan, loading, error } = useSelector((state) => state.mealPlan);
  const navigate = useNavigate();
  /*  const clickRecipe = () => {
    navigate(`/recipes/${meal.pasto.id}`);
  }; */

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

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Piano Settimanale</h2>

      {Object.entries(weeklyPlan.week).map(([day, { meals }], index) => (
        <div key={index} className="mb-5">
          <h4 className=" mb-3">{day}</h4>
          <Row>
            {meals.map((meal, idx) => (
              <Col md={6} key={idx} className="mb-3">
                <h6>{idx === 0 ? "PRANZO" : "CENA"}</h6>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={meal.imgUrl}
                    style={{ objectFit: "cover", height: "450px", width: "500px" }}
                  />
                  <Card.Body>
                    <Card.Title>{meal.nome}</Card.Title>
                    <Button variant="outline-success" onClick={() => navigate(`/recipes/${meal.id}`)}>
                      Visualizza ricetta
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      <div className="text-center">
        <Button variant="success" onClick={() => navigate("/groceries")}>
          Vai alla lista della spesa
        </Button>
      </div>
    </Container>
  );
};

export default WeeklyPlan;
