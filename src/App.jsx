import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import WeeklyPlan from "./components/pages/WeeklyPlan";
import Groceries from "./components/pages/Groceries";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekly-plan" element={<WeeklyPlan />} />
          <Route path="/groceries" element={<Groceries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
