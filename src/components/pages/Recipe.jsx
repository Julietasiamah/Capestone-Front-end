import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchRecipeByMealId } from "../../redux/actions/recipeAction";
import WeeklyPlan from "./WeeklyPlan";

const Recipe = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipe, loading, error } = useSelector((state) => state.recipeDetails);

  useEffect(() => {
    dispatch(fetchRecipeByMealId(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Caricamento ricetta...</p>
        <h2 className="text-center mt-3">Ricette</h2>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5 text-danger">
        <p>Error: {error}</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Torna indietro
        </button>
      </Container>
    );
  }

  if (!recipe) {
    return (
      <Container className="text-center mt-5">
        <p>Nessuna ricetta trovata.</p>
      </Container>
    );
  }
  const ingredienti = recipe.ingredienti?.split(" , ") || [];

  return (
    <Container>
      <h2 className="text-center mt-3">{recipe.nome}</h2>
      <Row>
        <Col md={7}>
          <Card>
            <Card.Img variant="top" src={recipe.imgUrl} />
            <Card.Body>
              <Card.Header>Ingredienti</Card.Header>
              <Card.Text>
                <ul>
                  {ingredienti.map((ing, idx) => (
                    <li key={idx}>{ing.trim()}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h6 className="mt-3 fw-semibold">Procedimento</h6>
          <p>{recipe.procedimento}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Recipe;
