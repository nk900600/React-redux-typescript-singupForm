import {combineReducers} from "redux";
import {UserReducersData} from "../components/signup/actionReduser";
import {LoginReducerData} from "../components/login/LoginactionReducers";
import {ForgotReducerData} from "../components/forgorpassword/forgotpasswordactionreducers";
import {OtpReducerData} from "../components/forgorpassword/otpactionreducers";
import {ConfirmReducerData} from "../components/forgorpassword/confirmactionsreducers";


export const reducer = combineReducers({
    UserReducersData,LoginReducerData,ForgotReducerData,OtpReducerData,ConfirmReducerData

});
