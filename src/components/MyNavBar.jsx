import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Mylogo from "../assets/logo.jpg";

import { Link } from "react-router-dom";
import { CalendarFill, CartFill, GearFill, HouseFill, PersonWalking } from "react-bootstrap-icons";
// import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";
//import { useSelector } from "react-redux";
/* import { logout } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux"; */
// import LogoutButton from "./LogoutButton";

const MyNavBar = () => {
  /* const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }; */

  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // if (!isAuth) return null;
  //const user = useSelector((state) => state.auth.user);
  //if (!user) return null;

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          <img src={Mylogo} alt="logo" style={{ borderRadius: "50%" }} />
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
            {/* <Nav.Link as={Link} to="/recipes">
              <BookFill className="fs-4" />
              <p className="fs-6 m-0">Ricette</p>
            </Nav.Link> */}
            <Nav.Link as={Link} to={"/"}>
              <LogoutButton />
              <p className="fs-6 m-0">Logout</p>
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              <GearFill className="fs-4" />
              <p className="fs-6 m-0">Profile</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
