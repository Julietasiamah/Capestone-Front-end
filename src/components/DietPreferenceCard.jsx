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
    <Card className="mb-4 shadow-sm diet-card" style={{ backgroundColor: "#D0DACF" }}>
      <Card.Img variant="top" src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button onClick={handleClick} id="generazione">
          Genera piano settimanale
        </Button>
      </Card.Body>
    </Card>
  );
};
export default DietPreferenceCard;
