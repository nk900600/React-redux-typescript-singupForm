import React, {Component} from "react";
import {Form, Checkbox, Button, Grid, Segment, GridRow} from "semantic-ui-react";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link} from "react-router-dom";

interface Mobile {
    mobile?:boolean

}

export class Loginin extends Component<Mobile>{
    state={
        mobile:null
    }

    componentDidMount(): void {
        document.body.style.backgroundImage = "url(vayana.png)";
    }


    render() {
        return (

            <div style={{
                // backgroundImage: "url(vayana.png)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily:"neusa next std",
                width:"100%",
                height:"100%"
            }}>
                {/**/}
                <Grid padded>
                    <Grid.Column computer={8} mobile={16} tablet={10} floated="right" style={{paddingRight:this.props.mobile?"10%":"",paddingTop:"5%"}}>
                        <Segment style={{padding:"4em"}}>
                            <div >
                                <div style={{fontSize:"2em",fontStyle:"bold",textAlign:"left",paddingBottom:"0.4em"}}>
                                    Sign in
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"left"}}>
                                    New User?   <Link to="/sign">Create an account</Link>
                                </div>
                            </div>
                            <br/>
                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:"2em"}} >

                                <Form.Input fluid label='username' placeholder='username' />
                                <Form.Input fluid label='password' placeholder='password' />
                                <div style={{textAlign:"right",fontSize:"0.9em"}}>
                                <Link  to="/forgotpassword">Forgot Password?</Link>
                                </div>
                                {/*<Form.Checkbox label='I agree to the Terms and Conditions' />*/}
                            </Form>
                            <Button circular color="facebook" style={{width:"50%",fontSize:"1.2em"}}>Login</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }



}