import React, {Component} from "react";
import {Form, Checkbox, Button, Grid, Segment, GridRow,Image, Transition,Divider} from "semantic-ui-react";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
import {Loginin} from "./login";
import Login from "../login/login";

interface Mobile {
    mobile:boolean

}

export class Mainpage extends Component<any,any>{

    state = { visible: true };


    render() {
        return (

            <div>
                <Grid padded>

                        <Route path="/login" render={(props) => <Loginin {...props} mobile/>}/>
                        {/*<Route path="/sign" render={(props) => <Signup {...props} mobile/>}/>*/}

                </Grid>
            </div>
        );
    }



}