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

function App() {
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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/weekly-plan" element={<WeeklyPlan />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="/recipes/:id" element={<Recipe />} />
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

/* import ProtectedRoute from "./components/ProtectedRoute";

<Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/weekly-plan"
    element={
      <ProtectedRoute>
        <WeeklyPlan />
      </ProtectedRoute>
    } */

export default App;
