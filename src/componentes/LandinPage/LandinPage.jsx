import React, { useState } from "react";
import "./LandinPage.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postJugador, getQuestion } from "../../Redux/actions";

export default function LandingPage() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleInputName() {
    var juagador = {
      name,
    };
    dispatch(postJugador(juagador));
    dispatch(getQuestion(1));
  }

  return (
    <div className="portada">
      <h1>Juego de Preguntas </h1>

      <div className="bienvenida">
        <div>
          <span>
            Bienvenido al juego de preguntas para validar tu conocimiento{" "}
          </span>
          <br />
          <br />
          <input
            type="text"
            placeholder="Nombre..."
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <br />
          <br />
          <Link to="/questions">
            <button onClick={(e) => handleInputName()}>Comenzar</button>
          </Link>
        </div>

        <img
          src="https://www.nicepng.com/png/detail/239-2399751_signo-de-interrogacin-question-mark-man-png.png"
          alt="preguntas"
        />
      </div>
    </div>
  );
}
