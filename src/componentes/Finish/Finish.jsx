import React from "react";
import { useSelector } from "react-redux";
import "./Finish.css";

export default function Finish() {
  const score = useSelector((e) => e.score);

  return (
    <div className="portada">
      <h1>Final del Juego </h1>

      <div>
        <h2>Puntaje</h2>
        <h3>{score}</h3>
        {score && score > 99 ? (
          <div>
            {" "}
            <h2 className="textGanaste">Felicitacines Ganaste!!!</h2>{" "}
            <img className="imgGanaste" src="https://alliancebom.com/wp-content/uploads/2020/11/trophy.png" />
          </div>
        ) : (
          <div>
            <h2 className="textPerdiste" >Lo siento Perdiste !!!</h2>{" "}
            <img className="imgPerdiste"
              src="https://img.freepik.com/vector-gratis/caricatura-nino-triste-deprimido_184560-113.jpg"
              alt="perdio"
              
            />
          </div>
        )}
      </div>
    </div>
  );
}
