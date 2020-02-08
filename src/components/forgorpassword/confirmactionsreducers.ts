export interface ConfirmPasswordForm {
    password1:string,
    password2:string,
    error:boolean,
    reset:boolean
}
const ConfirmActiontype ="USER_CONFIRM_PASSWORD";

export const ConfirmActionData =(confirmpassword : ConfirmPasswordForm)=>{
    return{
        type :ConfirmActiontype,
        payload: confirmpassword
    }
};




export interface ConfirmAction {
    type:typeof ConfirmActiontype
    payload: ConfirmPasswordForm
}


export const ConfirmReducerData =(state: ConfirmPasswordForm[]=[],action:ConfirmAction)=>{
    if(action.type==="USER_CONFIRM_PASSWORD"){
        return action.payload
    }
    return state;
};
