import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Question.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function Question() {
  const dispatch = useDispatch();
  const score = useSelector((e) => e.score);
  const level = useSelector((e) => e.level);
  const jugador = useSelector((e) => e.jugador);
  const question = useSelector((e) => e.question);

  return (
    <div className="portadaQuestion">
      <div>
        <h1>Juego de Preguntas</h1>
        <h3> Hola {jugador.name} </h3>
        <div className="nivel">
          <h4>NIVEL {level}</h4>
          <h4>Puntaje: {score}</h4>
        </div>

        <div className="pregunta">
          <Card
            idJugador={jugador.id}
            id={question.id}
            question={question.question}
            answers={question.answers}
          />
          <div>
            <br />
            <Link to="/finish">
              <button>Salir</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
