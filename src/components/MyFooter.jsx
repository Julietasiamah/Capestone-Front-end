import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-light py-3 mt-5 border-top footer">
      <Container>
        <p>&copy; {new Date().getFullYear()} My Meal. Tutti i diritti riservati.</p>
      </Container>
    </footer>
  );
};
export default MyFooter;
