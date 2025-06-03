import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Mylogo from "../assets/logo.jpg";

import { Link, useNavigate } from "react-router-dom";
import { CalendarFill, CartFill, GearFill, HouseFill } from "react-bootstrap-icons";
import LogoutButton from "./LogoutButton";
import { useDispatch, useSelector } from "react-redux";

import { SET_WEEKLY_PLAN } from "../redux/actions/mealPlanAction";
import { logout } from "../redux/reducers/authReducer";

const MyNavBar = () => {
  //Funzione per fare sparire la navbar al click del bottone logout
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) return null; // Non mostrare nulla se non loggato
  // //al click del link logout,nascondi la navbar
  // const hideNavbar = () => (dispatch) => {
  //   dispatch(logout());
  // };
  console.log(user);

  //Funzione per fare sparire la navbar al click del bottone logout
  const handleLogout = () => {
    dispatch(logout()); // Chiamata alla funzione di logout
    dispatch({ type: SET_WEEKLY_PLAN, payload: null }); // Reset del weeklyPlan
    localStorage.removeItem("token");
    navigate("/login"); // Redirect alla pagina di login
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center gap-2">
          <img src={Mylogo} alt="logo" style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
          <span className="text-white"> Ciao, {user.name}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="gap-3">
            <Nav.Link as={Link} to="/home">
              <HouseFill className="fs-4" />
              <p className="fs-6 m-0">Home</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/weekly-plan">
              <CalendarFill className="fs-4" />
              <p className="fs-6 m-0">Piani</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/groceries">
              <CartFill className="fs-4" />
              <p className="fs-6 m-0">Spesa</p>
            </Nav.Link>
            <Nav.Link as={Link} to={"/"} onClick={handleLogout}>
              <LogoutButton />
              <p className="fs-6 m-0">Logout</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
