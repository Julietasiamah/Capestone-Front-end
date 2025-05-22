import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const WelcomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 id="welcome">My meal planner!</h1>
      <p style={{ color: "#172A3A", fontWeight: "550" }}>Effetua login o registrazione per iniziare</p>
      <div className="d-flex gap-3">
        <Link to="/login">
          <button className="btn-primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn-primary">Registrati</button>
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
