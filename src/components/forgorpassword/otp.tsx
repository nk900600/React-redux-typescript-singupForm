import React, {Component} from "react";
import {Segment, Button, Message, Radio, Input, Loader, Progress} from "semantic-ui-react";
import Confirm from "./confirm";
import {OtpActionData, OtpForm} from "./otpactionreducers";
import {connect} from "react-redux";

interface OtpProps extends OtpForm{

    OtpActionData: typeof OtpActionData

}



class Otp extends Component<OtpProps>{
    state={
        otp:"",
        error:false,
        route:false,
    };

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({time: Date.now()})
    //     }, 1000)
    // }

    HandleChange=(e:any)=> {
        if ("1111"===this.state.otp){
            this.setState({
                error:false,
                route:true
            });
            setTimeout(()=>{
                this.props.OtpActionData(this.state)
            },10);
        }
        else {
            this.setState({
                error:true
            })
        }
    };

    Sentotp=()=>{
        console.log("ddd")
    // otp is resent
    };



    render() {
        return (
            <div id="login-screen">
                {this.state.route ?
                    <Confirm/>:<div>
                        {/*<Usertemplate/>*/}
                    <Input fluid icon="shield alternate" iconPosition="left"
                           placeholder="Enter OTP"
                           className = "loginUser"
                           formlabel="Email or mobile number"
                           value={this.state.otp}
                           onChange={(e)=>{this.setState({otp:e.target.value})}}/>

                        <div style={{float: 'right' }}>
                            <a style={{cursor:"pointer" }} onClick={this.Sentotp}>resend otp</a>
                        </div>
                    <br/>
                    <br/>

                        {/*<Progress percent={44} progress />*/}


                <Button color="facebook"
                        className="dark-blue-background white-font"
                        fluid
                        size="large"
                        onClick={this.HandleChange}
                >Submit</Button>
                        {/*</Usertemplate>*/}
                    </div>}
                {/*<Loader active inline />*/}
                <br/>
                {this.state.error ? <div>
                    <Message
                        warning
                        header='Please check the details'
                        // content=
                    />
                </div>: <div></div>}
            </div>
        );
    }
}

const mapStateToProps=(state:OtpForm)=>{
    return state
}

export default connect(mapStateToProps,{OtpActionData})(Otp)