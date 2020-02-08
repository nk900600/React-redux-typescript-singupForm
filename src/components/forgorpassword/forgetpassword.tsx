import React, {Component} from "react";
import {Container, Grid, Header, Image, Form, Segment, Button, Message, Radio, Input} from "semantic-ui-react";

import Otp from "./otp";
import Confirm from "./confirm";
import {Link, Route, Switch} from "react-router-dom";
import {ForgotPasswordForm, ForgotActionData} from "./forgotpasswordactionreducers";
import {connect} from "react-redux";
import {isValidEmail, isValidMobile} from "../../validations/emailPhoneValidations";
// import {isValidEmail, isValidMobile} from "../../utils/validation";
// import { VayanaHeader } from "../vayanaHeader";


export interface ForgotProps extends ForgotPasswordForm{
    ForgotActionData: typeof ForgotActionData
}



class Forgotpassword extends Component<ForgotProps>{
    state={
        username:"",
        error:false,
        validation:false,
        radio:'',

    };

    componentDidMount(): void {

        // console.log(this.state)
    }


    Radio=(event:any)=>{
        const val= event.target.id;
        this.setState({
            radio:val,
        });
    };


    HandleChange=(event:any)=>{

        const email= isValidEmail(this.state.username);
        const phone= isValidMobile(this.state.username);
        if ((email.isValid || phone.isValid ) && this.state.radio){
            // otp is generated
            this.setState({
                validation:true,
                error:false,

            });
            setTimeout(()=>{
                this.props.ForgotActionData(this.state);
            },10);

        }
        else{

            this.setState({
                error:true,
                validation:false
            });
            setTimeout(()=>{
                this.props.ForgotActionData(this.state);
            },10);
        }



    };
    render() {
        console.log(this.state.error);
        return (
            <div id="login-screen">
                <Container fluid className="login-form"  >
                    <Grid textAlign="center" verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column textAlign="center" verticalAlign="middle" style={{ maxWidth: "450px" }}>
                                {/*// <div className="ui container" style={{marginTop:"5%"}} >*/}
                                {/*//     <div  className="ui segment" style={{maxWidth:"100%",position:"relative",borderColor:"blueviolet",borderStyle:"solid"}} >*/}
                                {/*//         <Grid fluid>*/}
                                {/*//             <Grid.Row fluid>*/}
                                {/*//                 <Grid.Column textAlign="center" verticalAlign="middle" style={{ maxWidth: "100%" }}>*/}
                                {/*                    <VayanaHeader/>*/}
                                {this.state.validation? <div>

                                    <Segment stacked>
                                        <Input fluid icon="user" iconPosition="left"
                                               placeholder="email or Mobile NO."
                                               className = "loginUser"
                                               formlabel="Email or mobile number"
                                               value={this.state.username}
                                               onChange={(e)=>{this.setState({username:e.target.value})}}/>
                                        <br/>
                                        {/*<Route path="/otp" component={Otp}/>*/}
                                        <Otp/>
                                    </Segment>
                                </div>:<div>
                                    <Segment stacked>
                                        <Input fluid icon="user" iconPosition="left"
                                               placeholder="email or Mobile NO."
                                               className = "loginUser"
                                               formlabel="Email or mobile number"
                                               value={this.state.username}
                                               onChange={(e)=>{this.setState({username:e.target.value})}}/>

                                        <Segment.Group horizontal size="mini">
                                            <Segment> <Form.Field> <Radio  name='radioGroup' id="Email" label="Email" checked={this.state.radio==="Email"} onClick={this.Radio}/></Form.Field> </Segment>
                                            <Segment> <Form.Field> <Radio  name='radioGroup' id="Mobile" label="Phone" checked={this.state.radio==="Mobile"} onClick={this.Radio}/></Form.Field> </Segment>
                                        </Segment.Group>
                                        <Button color="facebook"
                                                className="dark-blue-background white-font"
                                                fluid
                                                size="large"
                                                onClick={this.HandleChange}
                                        >generate otp</Button>

                                    </Segment>
                                    {/*{this.state.error}*/}
                                    <br/>
                                    {this.state.error ? <div>
                                        <Message negative
                                                 header='Please check the details'
                                            // content=
                                        />
                                    </div>: <div/>}
                                </div>}

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}


const mapStateToProps=(state:ForgotPasswordForm)=>{
    return state


};

export default connect(mapStateToProps,{ForgotActionData})(Forgotpassword)