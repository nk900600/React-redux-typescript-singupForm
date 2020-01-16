

export interface LoginForm {
    username: string,
    password: string,
}


export const LoginActionData =(login : LoginForm)=>{
    return{
        type : "USER_LOGIN",
        payload: login
    }
};


export const LoginReducerData =(state: LoginForm[]=[],action:any)=>{

  if(action.type==="USER_LOGIN"){
      return action.payload
  }
  return state;

};
