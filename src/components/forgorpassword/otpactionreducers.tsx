export interface OtpForm {

    otp:string,
    error?:boolean,
    route?:boolean,
}


const Otpactionstype= "USER_OTP";


export const OtpActionData =(otp : OtpForm)=>{
    return{
        type : Otpactionstype,
        payload: otp
    }
};


export interface OtpActionsInterface {
    type : typeof Otpactionstype ,
    payload: OtpForm

}

// export type otpactionstypes=OtpActionData


export const OtpReducerData =(state: OtpForm[]=[],action:OtpActionsInterface)=>{

    if(action.type==="USER_OTP"){
        return action.payload
    }
    return state;
};
