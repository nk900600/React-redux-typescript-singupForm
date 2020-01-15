import React, {Component} from "react";
import { UserActionsData, UserFormData } from "./actionReduser";
import { connect } from "react-redux";
import {isValidEmail, isValidMobile} from "../../validations/emailPhoneValidations";
import {Link, Route, Switch} from "react-router-dom";
import Login from "../login/login";


interface DispactchProps extends UserFormData{
    UserActionsData : typeof UserActionsData
}


class Signup_part2 extends Component<DispactchProps>{
    state={
        firstname:"",
        lastname:"",
        phone:"",
        email:""
    };


    // this component is used to populate fields
    // if already user filled it from local storage
    componentDidMount() {
        // this.props.UserActionsData(this.state);
        const z= JSON.parse(localStorage.getItem("user") as string);
        this.props.UserActionsData(this.state);
    }



    SubmitForm = (event: any) => {

        event.preventDefault();
        const user= this.state;
        localStorage.setItem("user", JSON.stringify(user));
        const email= isValidEmail(this.state.email);
        const phone= isValidMobile(this.state.phone);
        if (email.isValid && phone.isValid) {
            this.props.UserActionsData(this.state);

            //settimeout working gave wait of 10ms for fetching
            // data from redux store  in single go.

            setTimeout((state:any)=>{
                console.log(this.props)
            },10);
        alert("thank you for signing up please click on login link")

        }

        else {
            alert("form is not filled properly")
        }
    };

    render() {
        const email= isValidEmail(this.state.email);
        const phone= isValidMobile(this.state.phone);
        return (
            <div className="ui container">
                <div className="ui segment">
                    <form className="ui form error" onSubmit={this.SubmitForm} >
                        <div className="field">
                            <label> First Name </label>
                            <input required type="text" value={this.state.firstname}
                                   onChange={(e)=>
                                       this.setState({firstname:e.target.value})}/>
                            <label> Last Name </label>
                            <input required type="text" value={this.state.lastname} onChange={e => this.setState({lastname:e.target.value})}/>
                            <label>  phone </label>
                            <input required type="text" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})}/>
                            {!phone.isValid && this.state.phone ? <div className="ui error message">
                                <div className="ui tiny header">{phone.errorMessage}</div></div>  : <div></div>}

                            <label> Email </label>
                            <input required type="text" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                            {!email.isValid && this.state.email  ? <div className="ui error message">
                                <div className="ui tiny header">{email.errorMessage}</div></div> :<div></div>}
                        </div>
                        <br/>
                        {/*<div className="ui checkbox">*/}
                        {/*    <input type="checkbox"/>*/}
                        {/*    <label>I agree to the Terms and Conditions</label>*/}
                        {/*</div>*/}

                        {/*<br/>*/}
                        {/*<br/>*/}

                        <button className="ui button primary" >submit</button>
                    </form>
                    <br/>

                    <div>
                        <Link to="/login">Login</Link>

                    </div>

                </div>
            </div>
        )

    }
}

const mapStateToProps=(state:UserFormData)=>{
    return  state
};

export default connect(mapStateToProps,{UserActionsData})(Signup_part2)