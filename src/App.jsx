import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import WeeklyPlan from "./components/pages/WeeklyPlan";
import Groceries from "./components/pages/Groceries";
import Home from "./components/pages/Home";
import Recipe from "./components/pages/Recipe";
import MyFooter from "./components/MyFooter";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { checkAuthFromLocalStorage } from "./redux/actions/authActions";
//import SavedPlans from "./components/SavedPlan";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthFromLocalStorage());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          {/*forzo il footer in basso anche quando ce poco contenuto  */}
          {window.location.pathname !== "/login" &&
            window.location.pathname !== "/register" &&
            window.location.pathname !== "/" && <MyNavBar />}

          <main>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/weekly-plan" element={<WeeklyPlan />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="/recipes/:id" element={<Recipe />} />
              <Route path="/profile" element={<ProfilePage />} />

              {/* <Route path="/saved-plans" element={<SavedPlans />} /> */}

              {/* <Route path="/lpgout" element={<LogoutButton />} /> */}
            </Routes>
          </main>

          {window.location.pathname !== "/login" &&
            window.location.pathname !== "/register" &&
            window.location.pathname !== "/" && <MyFooter />}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
