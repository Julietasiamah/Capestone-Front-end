import { Container } from "react-bootstrap";
import Mylogo from "../assets/logo.jpg";
//import { useSelector } from "react-redux";
//import { useSelector } from "react-redux";

const MyFooter = () => {
  /*  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuth) return null; */
  // const user = useSelector((state) => state.auth.user);
  // if (!user) return null;

  return (
    <footer className=" py-3 mt-auto border-top footer">
      <Container>
        <p>&copy; {new Date().getFullYear()} My MealPlanner. Tutti i diritti riservati.</p>
      </Container>
    </footer>
  );
};
export default MyFooter;
