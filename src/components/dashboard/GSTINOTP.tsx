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
import {Loader, Dimmer, Dropdown} from "semantic-ui-react";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";

interface Mobile {
    mobile:boolean
}

export class GSTINOTP extends Component<any>{

    state = { visible: false, model:false};

    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }

    active=(e:any)=>{

        this.setState({
            visible   :true
        });
        setTimeout(()=>{

            this.setState({
                visible   :false
            });

        },1000);
    };

    Closemodel=()=>{
            this.setState({
                model   :false
            });
    };

    model=()=>{
        this.setState({
            model:true
        })
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
                    <Grid.Column widescreen={6} computer={8} mobile={16} tablet={10} style={{paddingTop:"7%" }}>
                        <Segment style={{padding:"4em"}}>
                            <div >
                                <div style={{fontSize:"2em",fontStyle:"bold",textAlign:"left",paddingBottom:"0.4em"}}>
                                    GST Verification
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
                                    <Button circular  className="commonButtonOtp" onClick={this.model} style={{width:"60%",background:"#5a6268",color:"white"}}>Contact Vayana</Button>
                                {/*</div>*/}
                            </div>




                            <Modal centered size="tiny" open={this.state.model} style={{marginTop:0 ,borderRadius:0}}>
                                <Modal.Header style={{textAlign:"center",color:"white",background:"#27303A",borderRadius:0}}>Thank you for Patience </Modal.Header>
                                <Modal.Content style={{textAlign:"center"}}>
                                    over vayana tema will get to back you as soon as possible
                                </Modal.Content>
                                <Modal.Actions style={{textAlign:"center"}}>
                                    <Button circular  className="commonButtonOtp" onClick={this.Closemodel} style={{width:"60%"}}>ok</Button>
                                </Modal.Actions>
                            </Modal>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}