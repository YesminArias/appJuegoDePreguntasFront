import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom"
import "./Card.css";
import { GrRadialSelected } from "react-icons/gr";
import { getAnswer, getQuestion, upLevel, resetAnswer } from "../../Redux/actions";
import Swal from 'sweetalert2';


export default function Card({ idJugador, id, question, answers }) {
  const dispatch = useDispatch();
  const answerCorret = useSelector((e) => e.answer);
  const level = useSelector((e) => e.level)
  let navigate = useNavigate();
  function handleSelect(e) {
    
    dispatch(
      getAnswer({
        rta: e.target.value,
        idQuestion: id,
        idJugador: idJugador,
      })
    );
   
  }

  useEffect(() => {

    
      if(answerCorret){
          if (answerCorret.message === "Respuesta Incorrecta"){
            Swal.fire({
                title: 'Respuesta incorrecta',
                confirmButtonText: 'Salir',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                dispatch(resetAnswer())
                navigate("/finish")
              })
          } else if(answerCorret.message === "Correcto") {
            Swal.fire({
                title: 'Muy Bien',
                confirmButtonText: 'continue',
            }).then((result) => {
                dispatch(upLevel(level))
                dispatch(getQuestion(level+1))
            })
          }
      }
      if(level === 5){
        navigate("/finish")
    }
  }, [answerCorret]);

  return (
    <div className="portadaCard">
      <div>
        <div className="continer">
          <h3>{question}</h3>
          {answers.map((e) => (
            <button
              value={e}
              onClick={(e) => handleSelect(e)}
              className="respuesta"
            >
              <h6>{e}</h6>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
