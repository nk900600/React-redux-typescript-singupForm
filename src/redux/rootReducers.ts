import {combineReducers} from "redux";
import {UserReducersData} from "../components/signup/actionReduser";
import {LoginReducerData} from "../components/login/LoginactionReducers";


export const reducer = combineReducers({
    UserReducersData,LoginReducerData

});
