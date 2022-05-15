import axios from 'axios';

export function postJugador(payload){
    return async function(dispatch){
        const create= await axios.post('http://localhost:8080/user/new', payload);
        return dispatch({
            type:'POST_JUGADOR',
            payload: create.data,
        })
    }
}

export function getQuestion(level){
    return async function(dispatch){
        var json = await axios.get('http://localhost:8080/question?level='+level);
        return dispatch({
            type:'GET_QUESTION',
            payload: json.data,
        })
    }
}

export function upLevel(payload){
    return {
        type:"UP_LEVEL",
        payload,
    }
}

export function resetAnswer(){
    return {
        type:"RESET_ANSWER",
    }
}

export function getAnswer(payload){
   
    return async function(dispatch){
        var json = await axios.post('http://localhost:8080/answer', payload);
        return dispatch({
            type:'GET_ANSWER',
            payload: json.data,
        })
    }
}