import React, {Component} from "react";
import {Segment, Button, Message, Radio, Input, Loader} from "semantic-ui-react";
import {ConfirmPasswordForm, ConfirmActionData} from "./confirmactionsreducers";
import {connect} from "react-redux";


interface ConfirmProps  extends  ConfirmPasswordForm{

    ConfirmActionData: typeof ConfirmActionData

}

class Confirm extends Component<ConfirmProps>{
    state={
        password1:"",
        password2:"",
        error:false,
        reset:false
    };


    HandleChange=()=> {
        if (this.state.password1===this.state.password2){
                this.setState({
                    error:false,
                    reset:true
                });

            setTimeout(()=>{
                this.props.ConfirmActionData(this.state)
            },10);

        }
        else {
            this.setState({
                error:true
            })
        }
    };

    render() {
        return (
            <div id="login-screen">
                    <Input fluid icon="eye slash" iconPosition="left"
                           placeholder="Password"
                           type="password"
                           className = "password"
                           formlabel="Email or mobile number"
                           value={this.state.password1}
                           onChange={(e)=>{this.setState({password1:e.target.value})}}/>
                            <br/>
                    <Input fluid icon="eye slash" iconPosition="left"
                           placeholder="Confirm Password"
                           className = "password"
                           type="password"
                           formlabel="Confirm Password"
                           value={this.state.password2}
                           onChange={(e)=>{this.setState({password2:e.target.value})}}/>
                {/*</Segment>*/}
<br/>

                <Button color="facebook"
                        className="dark-blue-background white-font"
                        fluid
                        size="large"
                        onClick={this.HandleChange}
                >Submit</Button>
                {/*<Loader active inline />*/}
                <br/>
                {this.state.error ? <div>
                    <Message
                        warning
                        header='password not matching'
                        // content=
                    />
                </div>: <div>
                 </div>}
                {this.state.reset? <div>
                    <Message
                        success
                        header='congrats password changed'
                        // content=
                    />
                </div>: <div> </div>}
            </div>
        );
    }
}


const mapStateToProps=(state:ConfirmPasswordForm)=>{
    return state

}

export default connect(mapStateToProps,{ConfirmActionData})(Confirm)