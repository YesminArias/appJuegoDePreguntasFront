import React, { useState } from "react";
import "./LandinPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    }
    dispatch(postJugador(juagador));
    dispatch(getQuestion(1));
  }

  return (
    <div className="portada">
      <h2>Juego de Preguntas </h2>

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
          <Link  to="/questions">
            <button onClick={(e) => handleInputName()}>
                Comenzar
            </button>
          </Link>
        </div>

        <img
          src="https://img2.freepng.es/20180328/yrq/kisspng-question-mark-drawing-clip-art-question-5abc078fba7d16.1149263615222721437639.jpg"
          alt="preguntas"
        />
      </div>
    </div>
  );
}
