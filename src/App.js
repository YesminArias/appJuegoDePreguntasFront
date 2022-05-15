import "./App.css";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Finish from "./componentes/Finish/Finish.jsx";
import LandingPage from "./componentes/LandinPage/LandinPage.jsx";
import Question from "./componentes/Question/Question.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
}

export default App;
