import axios from "axios";

export function getUser(){
    return async(dispatch)=>{
        try{
          
            var json= await axios.get("http://localhost:3001/users");
            
            return dispatch({
                type: "GET_USER",
                payload: json.data,
            })
        }catch(error){
            console.log(error);
        }
    }
}

