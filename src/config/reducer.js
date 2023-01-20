
const initialState = {
    result : "",
    history: []
}

function reducer(state=initialState, action){

    switch(action.type){
        case "ADD":
            return {...state, result: `${action.actualResult} + `};
        case "SUBSTRACT":
            return {...state, result: `${action.actualResult} - `};
        case "MULTIPLY":
            return {...state, result: `${action.actualResult} * `};
        case "DIVIDE":
            return {...state, result: `${action.actualResult} / `};
        case "RESET":
            return {...state, result:""}
        case "EQUAL":
            try {
                
                const h = `${action.actualResult} = ${eval(action.actualResult)}`;
                return  {...state, result: `${eval(action.actualResult)}`, history: [...state.history,h]};
              }catch(e){
                return {...state, result: "Error..."};
              }
        default:
            return state

    }
}

export default reducer;