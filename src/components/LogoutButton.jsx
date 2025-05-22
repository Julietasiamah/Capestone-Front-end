import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { PersonBadgeFill, PersonFill } from "react-bootstrap-icons";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <span style={{ cursor: "pointer" }} onClick={handleLogout}>
      <PersonFill className="fs-4" />
    </span>
  );
};

export default LogoutButton;
