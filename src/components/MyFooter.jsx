import { Container } from "react-bootstrap";
import Mylogo from "../assets/logo.jpg";

const MyFooter = () => {
  return (
    <footer className=" py-3 mt-auto border-top footer">
      <Container>
        <p>&copy; {new Date().getFullYear()} My MealPlanner. Tutti i diritti riservati.</p>
      </Container>
    </footer>
  );
};
export default MyFooter;
