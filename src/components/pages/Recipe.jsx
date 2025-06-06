import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchRecipeByMealId } from "../../redux/actions/recipeAction";

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
      <h2 className="text-center mt-3" style={{ color: "#c0c0c0" }}>
        {recipe.nome}
      </h2>
      <Row>
        <Col md={7}>
          <Card style={{ backgroundColor: "#D0DACF" }} className="diet-card">
            <Card.Img variant="top" src={recipe.imgUrl} />
          </Card>
        </Col>
        <Col>
          <div className="mt-3">
            <h3 style={{ color: "#c0c0c0" }} className="mb-3">
              Ingredienti
            </h3>
            {ingredienti.map((ing, idx) => (
              <p key={idx}>{ing.trim()}</p>
            ))}
            <div className="mt-3">
              <Button variant="success" onClick={() => navigate("/groceries")} className="my-3" id="register-button">
                Vai alla lista della spesa
              </Button>
            </div>
          </div>
          <div className="mt-2">
            <h3 style={{ color: "#c0c0c0" }} className="mb-3">
              Procedimento
            </h3>
            <p>{recipe.procedimento}</p>
          </div>
          <Button onClick={() => navigate(-1)} className="mb-3" id="register-button">
            Torna indietro
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Recipe;
