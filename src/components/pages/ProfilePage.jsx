import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <p style={{ textAlign: "center", color: "#888" }}>Caricamento profilo...</p>;
  }

  const labelStyle = {
    color: "#c0c0c0",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const valueStyle = {
    color: "#f0f0f0",
  };

  const boxStyle = {
    backgroundColor: "#2c2c2c",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(72, 71, 71, 0.2)",
    maxWidth: "500px",
    margin: "0 auto",
    marginTop: "30px",
  };

  return (
    <Container>
      <h1 className="text-center mb-4" style={{ color: "#c0c0c0" }}>
        Profilo Utente
      </h1>
      <div style={boxStyle}>
        <p>
          <span style={labelStyle}>Nome:</span>
          <span style={valueStyle}>{user.name}</span>
        </p>
        <p>
          <span style={labelStyle}>Cognome:</span>
          <span style={valueStyle}>{user.surname}</span>
        </p>
        <p>
          <span style={labelStyle}>Username:</span>
          <span style={valueStyle}>{user.username}</span>
        </p>
        <p>
          <span style={labelStyle}>Email:</span>
          <span style={valueStyle}>{user.email}</span>
        </p>
      </div>
    </Container>
  );
};

export default ProfilePage;
