const inicialState={
    score:0,
    level:1,
    jugador:{},
    question: {
        id: 0,
        question: "",
        answers: []
    },
    answer: {}
}

function rootReducer(state= inicialState, action){

    switch(action.type){
        case "POST_JUGADOR":
            return{
                ...state,
                jugador: action.payload,
            }
        case'GET_QUESTION':
            return{
                ...state,
                question: action.payload
            }
        case "UP_LEVEL":
            return{
                ...state,
                level: action.payload + 1
            }
        case "GET_ANSWER":
            return{
                ...state,
                answer: action.payload,
                score: action.payload.score
            }
        case "RESET_ANSWER":
            return{
                ...state,
                answer: {}
            }

        default:
            return state;
    }
}
export default rootReducer;