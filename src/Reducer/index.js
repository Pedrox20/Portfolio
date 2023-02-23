const initialState={
    allUsers:[],
    users:[],
}

export default function rootReducer(state= initialState, action){

    switch(action.type){
        case "GET_USER":{
            return{
                ...state,
                allUsers: action.payload,
                users: action.payload,
            }
        }
        default: return state;
    }
}