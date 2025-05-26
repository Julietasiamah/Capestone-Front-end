import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Button from "react-bootstrap/Button";

const WelcomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" id="bg-welcome">
      <h1 id="welcome">My MealPlanner!</h1>
      {/* <img src={Logo} alt="logo" width="50%" style={{ borderRadius: "50%" }} /> */}
      <p style={{ color: "#d0dacf", fontWeight: "550" }}>Effetua login o registrazione per iniziare</p>
      <div className="d-flex gap-3">
        <Link to="/login">
          <Button id="register-button">Login</Button>
        </Link>
        <Link to="/register">
          <Button id="register-button">Registrazione</Button>
        </Link>
      </div>
      {/*  <div style={{ maxWidth: "400px" }}>
        <h3>Come funziona?</h3>
        <ul className="list-unstyled">
          <li>🗓️ Pianifica i pasti settimanali in pochi clic</li>
          <li>🍲 Scopri ricette sane e personalizzate</li>
          <li>🛒 Genera automaticamente la lista della spesa</li>
        </ul>
      </div> */}
    </div>
  );
};

export default WelcomePage;
