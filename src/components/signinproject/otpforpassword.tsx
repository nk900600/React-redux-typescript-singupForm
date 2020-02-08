import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
// import {Form} from "semantic-ui-react";

interface Mobile {
    mobile:boolean
}

export class Otpforpassword extends Component<any,any>{

    state = { visible: true };

    Otpregenerate=()=>{
        console.log("efdf")

    }

    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }
    render() {
        return (

            <div style={{
                // backgroundImage:'url("home/nikhil/Downloads/vayana.png")',
                // backgroundImage:`url(require(`../../public`)})`,
                backgroundImage: "url(vayana.png)",
                // backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily:"neusa next std"
            }}>
                {/**/}
                <Grid padded>
                    <Grid.Column computer={8} mobile={16} tablet={10} floated="right" style={{paddingRight:this.props.mobile?"10%":"",paddingTop:"5%"}}>
                        <Segment style={{padding:"4em"}}>
                            <div >
                                <div style={{fontSize:"2em",fontStyle:"bold",textAlign:"left",paddingBottom:"0.4em"}}>
                                    Verify
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                    Re-submit details?   <Link to="/forgotpassword">Go back</Link>

                                </div>
                            </div>
                            <br/>
                            <Form style={{textAlign:"left",paddingBottom:".8em",paddingTop:".8em"}} >
                                {/*<Form.Group widths='equal' >*/}
                                {/*    <Form.Input fluid label='First name' placeholder='First name' />*/}
                                    <Form.Input fluid label='Enter otp' placeholder='Enter otp' />
                                <div style={{textAlign:"right",fontSize:"0.9em",}}>
                                    <a  style={{cursor:"pointer"}} onClick={this.Otpregenerate}>Resend otp</a>
                                </div>
                            </Form>

                            <Button circular color="facebook" style={{width:"50%",fontSize:"1.2em"}}>Verify</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}