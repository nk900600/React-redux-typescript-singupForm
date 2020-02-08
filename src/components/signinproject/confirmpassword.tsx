import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
// import {Form} from "semantic-ui-react";
import TextField from '@material-ui/core/TextField';

interface Mobile {
    mobile:boolean
}

export class Confirmpassword1 extends Component<any,any>{

    state = { visible: true };


    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }
    route=()=>{




    }



    render() {
        return (

            <div style={{
                backgroundImage: "url(vayana.png)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily:"neusa next std"
            }}>s
                <Grid padded>
                    <Grid.Column computer={8} mobile={16} tablet={10} floated="right" style={{paddingRight:this.props.mobile?"10%":"",paddingTop:"5%"}}>
                        <Segment style={{padding:"4em"}}>
                            <div >
                                <div style={{fontSize:"2em",fontStyle:"bold",textAlign:"left",paddingBottom:"0.4em"}}>
                                    Change password
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                  Enter your new password
                                </div>
                            </div>
                            <br/>
                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:"2em"}} >
                                {/*<Form.Group widths='equal' style={{paddingBottom:"1em"}}>*/}
                                    <Form.Input fluid label='Password' placeholder='Password' />
                                {/*<TextField*/}
                                {/*    required*/}
                                {/*    id="outlined-required"*/}
                                {/*    label="Password"*/}
                                {/*    // defaultValue="Hello World"*/}
                                {/*    variant="outlined"*/}
                                {/*/>*/}
                                    <Form.Input fluid label='Confirm Password' placeholder='Confirm password' />
                                {/*</Form.Group>*/}
                                {/*<Form.Checkbox label='I agree to the Terms and Conditions' />*/}
                            </Form>
                            <Button circular color="facebook" style={{width:"65%",fontSize:"1em"}} onClick={this.route}>Reset password</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}