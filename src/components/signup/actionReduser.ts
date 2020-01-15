import {combineReducers} from "redux";


export interface UserFormData {

    firstname: string,
    lastname: string,
    phone : string,
    email: string

}


export const UserActionsData =(state:UserFormData):any=> {

    // here I used settimeout function for actions

    // console.log("actions");
    // return (dispatch:any) =>{
    //     setTimeout(()=>{
    //         dispatch({
    //             type: "USER_DATA",
    //             payload: state
    //         });
    //     },10)
    // }

    return {
        type: "USER_DATA",
        payload: state
    }
};


export const UserReducersData =(state:UserFormData[]=[],action:any)=>{
    if (action.type==="USER_DATA"){
        return action.payload
    }
    return state;
};


