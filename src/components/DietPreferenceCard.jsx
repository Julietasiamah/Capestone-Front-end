import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateWeeklyPlanFromSearch } from "../redux/actions/mealPlanAction";

const DietPreferenceCard = ({ title, image, diet }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(generateWeeklyPlanFromSearch(diet));
    navigate("/weekly-plan");
  };
  return (
    <Card className="mb-4 shadow-sm diet-card">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button onClick={handleClick} variant="success">
          Genera piano settimanale
        </Button>
      </Card.Body>
    </Card>
  );
};
export default DietPreferenceCard;
