import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Dimmer from "semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer";
import Loader from "semantic-ui-react/dist/commonjs/elements/Loader/Loader";
// import {Form} from "semantic-ui-react";

interface Mobile {
    mobile?:boolean
}

interface errorConternt extends Mobile{
    content?: string;
    history?:any
}

export class Signotp extends Component<errorConternt,any>{

    state = { visible: false};

    route=()=>{
        this.props.history.push("/signupotp")

    };

    active=()=>{

        this.setState({
            visible   :true

        })
        setTimeout(()=>{

            const { history } = this.props;
            history.push("/login")


        },1000);



        // this.setState({
        //     visible   :false
        //
        // })



    }



    render() {
        // var  error: boolean | errorConternt = { content: "Tets"};
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
                                    Generate Otp
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                    Re-submit details?   <a onClick={this.route} style={{cursor:"pointer"}}>Go back</a>

                                </div>
                            </div>
                            <br/>
                            <Dimmer active={this.state.visible}>
                                <Loader indeterminate>SENDING OTP</Loader>
                            </Dimmer>


                            <Form style={{textAlign:"left",paddingBottom:"1em",paddingTop:"2em"}} >
                                <Form.Group widths='equal' >
                                    <Form.Input required fluid label='Email' placeholder='Email'/>
                                    <Form.Input fluid label='Mobile number' placeholder='Mobile number' />
                                </Form.Group>
                            </Form>
                            <div style={{paddingBottom:"1em",fontStyle:"bold"}}>

                               <b>Get Otp</b>
                            </div>

                            <div style={{paddingBottom:"2em"}}>

                                <Button circular color="facebook" style={{width:"60%",fontSize:"1.2em"}} onClick={this.active}>Email</Button>   <Divider horizontal>Or</Divider>

                                <Button circular color="facebook" style={{width:"60%",fontSize:"1.2em"}} onClick={this.active}>Mobile</Button>   </div>


                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}