export interface ForgotPasswordForm {
    username:string,
    error:boolean,
    validation:boolean,
    radio:string,

}

const ForgotPasswordaction = "USER_FORGOT_PASSWORD"
export const ForgotActionData =(forgotpassword : ForgotPasswordForm)=>{
    return{
        type :ForgotPasswordaction,
        payload: forgotpassword
    }
};


export interface ForgotPasswordactionType{
    type : typeof ForgotPasswordaction,
    payload: ForgotPasswordForm

}


export const ForgotReducerData =(state: ForgotPasswordForm[]=[],action:ForgotPasswordactionType)=>{

    if(action.type==="USER_FORGOT_PASSWORD"){
        return action.payload
    }
    return state;
};
