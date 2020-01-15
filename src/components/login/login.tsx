import React, {Component} from "react";
import {LoginForm, LoginActionData} from "./LoginactionReducers";
import {connect} from "react-redux";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Signup_part2 from "../signup/signup_part2";
// import {UserFormData} from "../signup/actionReduser";

import {TokenEncode} from '../../validations/jwtTokens'

export interface DispactchProps  extends LoginForm {
    LoginActionData : typeof LoginActionData
}



class Login extends Component<DispactchProps>{
    state={
        username: "",
        password :"",
    };

    componentDidMount(): void {
        let admins = require('./user.json');
        // this.props.LoginActionData(this.state);
        // console.log(this.state)
        console.log(admins[0]);

        this.props.LoginActionData(this.state);

        let jwt= require('jsonwebtoken');
        var token =jwt.sign({data:this.state},"nikhil",
            { expiresIn: 3600 }); //time in seconds or  '1h'

        console.log(token);
        var decode =jwt.verify(token,"nikhil");
        console.log(decode.data.username)
    }
    //
    // Token=()=>{
    //
    //     let jwt= require('jsonwebtoken');
    //
    // }

    SubmitLoginForm=(event:any)=>{
        event.preventDefault();
        let admins = require('./user.json');
        console.log(this.state);
        if (admins[0].username===this.state.username && admins[0].password===this.state.password){
            this.props.LoginActionData(this.state);
            const token = TokenEncode(this.state);
            localStorage.setItem("token",token);

        }
        else{
            alert("invaild user ")
        }

        // console.log(this.state)
        // console.log(admins[0].username);

    };


    render() {
        return (
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


                    <div>
                        <Link to="/signup">signup</Link>
                        </div>

            </form>

                </div>
                </div>
        );
    }
}


const mapStateToProps=(state:LoginForm)=>{
    return state

};

export default connect(mapStateToProps,{LoginActionData})(Login)