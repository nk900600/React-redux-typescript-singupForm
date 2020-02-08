import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
// import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
// import {HighlightedInputBox} from "./custominput";
// import {Form} from "semantic-ui-react";

import TextField from '@material-ui/core/TextField';
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";
import {Loader, Dimmer} from "semantic-ui-react";

interface Mobile {
    mobile:boolean
}

export class GSTINOTP extends Component<any,any>{

    state = { visible: false };

    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }

    active=()=>{

        this.setState({
            visible   :true
        });
        setTimeout(()=>{

            this.setState({
                visible   :false
            });
            // routeHistory.push(URLS.OTP);
        },1000);
    };

    render() {
        return (

            <div style={{
                // backgroundImage: "url(vayana.png)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily:"neusa next std"
            }}>
                {/**/}
                <Grid padded centered>
                    <Grid.Column widescreen={6} computer={8} mobile={16} tablet={10}  style={{paddingRight:this.props.mobile?"10%":"",paddingTop:"5%"}}>
                        <Segment style={{padding:"4em"}}>
                            <div >
                                <div style={{fontSize:"2em",fontStyle:"bold",textAlign:"left",paddingBottom:"0.4em"}}>
                                    GST Authentication
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                    Edit Details?   <Link to="/dash">Go back</Link>
                                </div>
                            </div>

                            <Dimmer active={this.state.visible}>
                                <Loader indeterminate>SENDING OTP</Loader>
                            </Dimmer>
                            <br/>
                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:".5em"}} >
                                <Form.Input fluid label='Gstin Username' placeholder='Gstin Username' />
                            </Form>
                            <div style={{textAlign:"center"}}>
                                {/*<div style={{textAlign:"center"}}>*/}
                                    <Button circular color="facebook" className="commonButtonOtp" onClick={this.active} style={{width:"60%"}}>Generate otp</Button>
                                    <Divider horizontal>Or</Divider>
                                    <Button circular color="facebook" className="commonButtonOtp" onClick={this.active} style={{width:"60%"}}>Contact Vayana</Button>
                                {/*</div>*/}
                            </div>




                            {/*<Segment>*/}
                            {/*    <Grid columns={2} relaxed='very'>*/}
                            {/*        <Grid.Column>*/}
                            {/*            <Button circular color="facebook" className="commonButtonOtp" onClick={this.active} style={{width:"60%"}}>Generate otp</Button>*/}

                            {/*        </Grid.Column>*/}
                            {/*        <Grid.Column>*/}
                            {/*            <Button circular color="facebook" className="commonButtonOtp" onClick={this.active} style={{width:"60%"}}>Contact Vayana</Button>*/}

                            {/*        </Grid.Column>*/}
                            {/*    </Grid>*/}

                            {/*    <Divider vertical>And</Divider>*/}
                            {/*</Segment>*/}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}