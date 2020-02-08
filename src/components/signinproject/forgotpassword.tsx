import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
import {HighlightedInputBox} from "./custominput";
// import {Form} from "semantic-ui-react";

import TextField from '@material-ui/core/TextField';

interface Mobile {
    mobile:boolean
}

export class Forgotpassword1 extends Component<any,any>{

    state = { visible: true };

    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }
    render() {
        return (

            <div style={{
                // backgroundImage: "url(vayana.png)",
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
                                    Forgot password
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                    New User?   <Link to="/sign">Create an account</Link>
                                </div>
                            </div>
                            <br/>
                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:".5em"}} >
                                    <Form.Input fluid label='Email or Mobile number' placeholder='Email or Mobile number' />
                            </Form>
                            <Button circular color="facebook" style={{width:"50%",fontSize:"1.2em"}}>Generate otp</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}