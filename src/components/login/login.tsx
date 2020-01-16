import React, {Component,} from "react";
import {LoginForm, LoginActionData} from "./LoginactionReducers";
import {connect} from "react-redux";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Signup_part2 from "../signup/signup_part2";
// import {UserFormData} from "../signup/actionReduser";

import {TokenEncode} from '../../validations/jwtTokens'

export interface DispactchProps  extends LoginForm {
    LoginActionData : typeof LoginActionData,
    history: any
}


class Login extends Component<DispactchProps>{
    state ={
        username : "",
        password : "",
    };

    componentDidMount(): void {
        this.props.LoginActionData(this.state);
    }

    SubmitLoginForm=()=>{
        let admins = require('./user.json');
        if (admins[0].username===this.state.username && admins[0].password===this.state.password) {
            this.props.LoginActionData(this.state);
            const token = TokenEncode(this.state);
            localStorage.setItem("token", token);
            this.props.history.push("/")
        }
        else{
            alert("invaild user ")
        }
    };

    render() {
        return (

            <div>

                <h1> username : admin , password : admin</h1>



            <div className="ui container">
                <div  className="ui segment">

            <form className="ui form" onSubmit={this.SubmitLoginForm}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={e => this.setState({username:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" />
                            <label>Keep me Logged In</label>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
                    <br/>
                    <br/>
                    <div>
                        <Link to="/signup">signup</Link>
                        </div>
            </form>
                </div>
                </div>
                </div>
        );

    }
}


const mapStateToProps=(state:LoginForm)=>{
    return{
        state
    }
};



export default connect(mapStateToProps,{LoginActionData})(Login)