import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Finish.css";

export default function Finish () {
    const score = useSelector((e) => e.score);

    return(
        <div className='portada' >
            <h2>Final del Juego </h2>
         
            <div>
                <h1>Puntaje</h1>
                <h3>{score}</h3>
                <img src="https://alliancebom.com/wp-content/uploads/2020/11/trophy.png"/>
            </div>

        </div>
    )
}