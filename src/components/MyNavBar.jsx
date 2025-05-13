import { Container, Nav, Navbar } from "react-bootstrap";
import Mymeal from "../assets/meal2.avif";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={Mymeal} alt="MyMeal" height="45" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="gap-3">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/weekly-plan">
              Piano Settimanale
            </Nav.Link>
            <Nav.Link as={Link} to="/groceries">
              Gestione spesa
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes">
              Le mie ricette
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
