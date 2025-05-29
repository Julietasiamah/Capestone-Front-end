import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { PersonBadgeFill, PersonFill, PersonWalking } from "react-bootstrap-icons";
import { logout } from "../redux/reducers/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/welcome");
  };

  return <PersonWalking onClick={handleLogout} className="fs-4" />;
  // <p onClick={handleLogout}>Logout</p>;
};

export default LogoutButton;
