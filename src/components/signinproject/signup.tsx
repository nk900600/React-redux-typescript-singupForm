import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
import TextField from "@material-ui/core/TextField";
// import {Form} from "semantic-ui-react";

interface Mobile {
    mobile:boolean
}

interface errorConternt {
    content: string;
}

export class Signup extends Component<any,any>{

    state = { visible: true };



    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }


    render() {
        var  error: boolean | errorConternt = { content: "Tets"};
        return (

            <div style={{
                // backgroundImage:'url("home/nikhil/Downloads/vayana.png")',
                // backgroundImage:`url(require(`../../public`)})`,
                // backgroundImage: "url(vayana.png)",
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
                                    Create an account
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                    Already have an account?   <Link to="/login">Sign In</Link>

                                </div>
                            </div>
                            <br/>

                            {/*<form style={{paddingTop:"2em",paddingBottom:"2em",textAlign:"left",width:"100%"}}>*/}
                            {/*    <TextField autoFocus id="outlined-search" label="First name" type="search" variant="outlined" style={{width:"48%"}} />  <TextField id="outlined-search" label="Last name" type="search" variant="outlined" style={{width:"48%",float:"right"}} />*/}
                            {/*    <br/><br/>*/}
                            {/*    <TextField autoFocus id="outlined-search" label="First name" type="search" variant="outlined" fullWidth />*/}
                            {/*    <br/><br/>*/}
                            {/*    <TextField autoFocus id="outlined-search" label="First name" type="search" variant="outlined" fullWidth/>*/}
                            {/*    <br/><br/>*/}
                            {/*    <TextField autoFocus id="outlined-search" label="First name" type="search" variant="outlined" style={{width:"48%"}} />  <TextField id="outlined-search" label="Last name" type="search" variant="outlined" style={{width:"48%",float:"right"}} />*/}
                            {/*</form>*/}




                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:"2em"}} >
                                <Form.Group widths='equal' >
                                    <Form.Input required fluid label='First name' placeholder='First name'
                                                />
                                    <Form.Input fluid label='Last name' placeholder='Last name' />
                                </Form.Group>
                                {/*<Form.Group widths='equal'>*/}
                                    <Form.Input fluid label='Email' placeholder='Email' />
                                    <Form.Input fluid label='mobile' placeholder='Mobile' />
                                {/*</Form.Group>*/}
                                <Form.Group widths='equal' style={{paddingBottom:"1em"}}>
                                    <Form.Input fluid label='Password' placeholder='Password' />
                                    <Form.Input fluid label='Confirm Password' placeholder='Confirm password' />
                                </Form.Group>
                                <Form.Checkbox label='I agree to the Terms and Conditions' />
                            </Form>
                            <Button circular color="facebook" style={{width:"50%",fontSize:"1.2em"}}>Submit</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}