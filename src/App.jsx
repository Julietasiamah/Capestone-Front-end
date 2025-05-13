import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import WeeklyPlan from "./components/pages/WeeklyPlan";
import Groceries from "./components/pages/Groceries";
import Home from "./components/pages/Home";
import Recipe from "./components/pages/Recipe";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekly-plan" element={<WeeklyPlan />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/recipes" element={<Recipe />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
