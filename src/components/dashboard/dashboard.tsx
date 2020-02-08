import React, {Component} from "react";

import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Link, Route, Switch} from "react-router-dom";
// import {Loginin} from "./login";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
import TextField from "@material-ui/core/TextField";
import Input from "semantic-ui-react/dist/commonjs/elements/Input/Input";
// import {Form} from "semantic-ui-react";
import './dashboard.css'
import {Dropdown, Modal, Header, TextArea} from "semantic-ui-react";
interface Mobile {
    mobile:boolean
}

interface errorConternt {
    content: string;
}

export class Dashboard extends Component<any,any>{
    state = {
        visible: true,
        pannumber: [],
        gstnnumber:[],
        pinnumber:[],
        tinnumber:[],
        trigger:false,
        country:"",
    }


    componentDidMount(): any {
        document.body.style.backgroundImage = "url(vayana.png)";
        this.setState({
            trigger:true
        })
        // return(
        //
        //     <Modal trigger={<Button>Show Modal</Button>}>
        //         <Modal.Header>Select a Photo</Modal.Header>
        //         <Modal.Content image>
        //             {/*<Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />*/}
        //             <Modal.Description>
        //                 <Header>Default Profile Image</Header>
        //                 <p>
        //                     We've found the following gravatar image associated with your e-mail
        //                     address.
        //                 </p>
        //                 <p>Is it okay to use this photo?</p>
        //             </Modal.Description>
        //         </Modal.Content>
        //     </Modal>
        // )

    }


    GSTNnumber=(e:any)=>{

        const v= e.target.id;
        const index=parseInt(v,10);
        const gstnnumberFocus=document.getElementById(`${index+1}gstnindex`);
        const gstnvalue= e.currentTarget.value;

        setTimeout(()=>{
            this.setState({
                gstnnumber: [...this.state.gstnnumber,gstnvalue]
            })
        },10);

        if (e.target.value.length === e.target.maxLength &&  gstnnumberFocus !==null ) {
            // @ts-ignore
            gstnnumberFocus.focus()
        }

    }

    PANnumber=(e:any)=>{
        const v= e.target.id;
        const index=parseInt(v,10);
        const pannumberFocus=document.getElementById(`${index+1}panindex`);
        const panvalue= e.currentTarget.value;


        setTimeout(()=>{
            this.setState({
                pannumber: [...this.state.pannumber,panvalue]
            })
        },10);

        if (e.target.value.length === e.target.maxLength &&  pannumberFocus !==null ) {
            // @ts-ignore
            pannumberFocus.focus()
        }
    };


    PINnumber=(e:any)=>{
        const v= e.target.id;
        const index=parseInt(v,10);
        const pinnumberFocus=document.getElementById(`${index+1}pinindex`);
        const pinvalue= e.currentTarget.value;
        setTimeout(()=>{
            this.setState({
                pannumber: [...this.state.pinnumber,pinvalue]
            })
        },10);

        if (e.target.value.length === e.target.maxLength &&  pinnumberFocus !==null ) {
            // @ts-ignore
            pinnumberFocus.focus()
        }
    };

    TINnumber=(e:any)=>{
        const v= e.target.id;
        const index=parseInt(v,10);
        const tinnumberFocus=document.getElementById(`${index+1}tinindex`);
        const tinvalue= e.currentTarget.value;
        setTimeout(()=>{
            this.setState({
                pannumber: [...this.state.tinnumber,tinvalue]
            })
        },10);
        if (e.target.value.length === e.target.maxLength &&  tinnumberFocus !==null ) {
            // @ts-ignore
            pinnumberFocus.focus()
        }
    };


    handleChange = (e:any, result:any) => {
        const { value } = result;
        console.log(value)
        this.setState({
            country:value,
            trigger:false
        });
    };

    RouteTONext=(e:any)=>{
         this.props.history.push("/gst")

    }



    render() {


        var gstinLength = [];
        for (var i = 0; i < 15; i++) {
            gstinLength.push(<input
                                className="codeBox4"
                                id={`${i}gstnindex`}
                                maxLength={1}
                                onChange={this.GSTNnumber}
                                />);
        }
        var panNumber = [];
        for (var i = 0; i < 10; i++) {
            panNumber.push(<input
                                className="codeBox4"
                                id={`${i}panindex`}
                                maxLength={1}
                                onChange={this.PANnumber}
            />);
        }


        var PINnumber = [];
        for (var i = 0; i < 6; i++) {
            PINnumber.push(<input
                                className="codeBox4"
                                id={`${i}pinindex`}
                                maxLength={1}
                                onChange={this.PINnumber}
            />);
        }


        // var TINnumber = [];
        // for (var i = 0; i < 6; i++) {
        //     PINnumber.push(<input
        //         className="codeBox4"
        //         id={`${i}tinindex`}
        //         maxLength={1}
        //         onChange={this.TINnumber}
        //     />);
        // }
        const countryOptions=[
            { key: 'ind', value: 'ind', flag: 'in', text: 'India' },
            { key: 'usa', value: 'usa', flag: 'us', text: 'USA' },

        ]

        return (

            <div style={{
                // backgroundImage:'url("home/nikhil/Downloads/vayana.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily:"neusa next std",
                // textAlign:"center"
            }}>
                {/**/}
                <Grid padded centered>
                    <Grid.Column widescreen={7} computer={9} mobile={16} tablet={14} style={{paddingTop:"5%"}} >
                        {/*style={{paddingRight:this.props.mobile?"10%":"",paddingTop:"5%"}}>*/}
                         <Segment style={{padding:"4em",textAlign:"center"}}>
                            <div >
                                <div style={{fontSize:"2.5em",fontStyle:"bold",textAlign:"center",paddingBottom:"0.4em"}}>
                                    Add an organization
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"center"}}>
                                    Minimum one organization is required

                                </div>
                            </div>
                            <br/>


                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:"2em"}}>





                                {/*<Form.Input required  label='Organisation Name' placeholder='Organisation Name'      />*/}
                                {/*</Form.Group>*/}


                                <Form.Group widths='equal'>
                                    <Form.Input required fluid label='Organisation Name' placeholder='Organisation Name'      />
                                    <Form.Input fluid label='Constitution' placeholder='Constitution' />
                                    {/*<Form.Dropdown  search selection options={countryOptions} onChange={this.handleChange}></Form.Dropdown>*/}
                                </Form.Group>


                                    <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                        GSTIN
                                    </div>
                                <form style={{float:"right",paddingBottom:"10px"}}>
                                    {gstinLength}
                                </form>

                                {this.state.country==="ind"?
                                    <div>

                                            <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                                PAN
                                            </div>

                                            <Form style={{float:"right",paddingBottom:"10px"}}>
                                                {panNumber}
                                            </Form>
                                    </div>:""}

                                {this.state.country==="usa"?
                                    <div>

                                        <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                            TIN
                                        </div>

                                        <Form style={{float:"right",paddingBottom:"10px"}}>
                                            {panNumber}
                                        </Form>
                                    </div>:""}


                                <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                    Address
                                </div>


                                <TextArea className="orgText" placeholder='Address' />


                                <div style={{fontWeight:"bold",paddingBottom:"6px",paddingTop:"6px"}}>
                                    PIN
                                </div>

                                <Form style={{paddingBottom:"10px"}}>
                                    {PINnumber}
                                </Form>


                                {/*</Form.Group>*/}
                                <Form.Group widths='equal' >
                                    <Form.Input fluid label='City' placeholder='City' />
                                    <Form.Input fluid label='State' placeholder='State' />
                                </Form.Group>


                                <Grid.Column computer={9} mobile={16} tablet={14} style={{paddingTop:"5%"}} >
                                <Modal open={this.state.trigger} style={{width:"30%" }}>
                                    <Modal.Header style={{textAlign:"center"}}>Choose a country</Modal.Header>
                                    {/*<Modal.Content image>*/}
                                        {/*<Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />*/}
                                        <Modal.Description>

                                            <div style={{textAlign:"center",padding:"20px 0"}}>
                                                <Dropdown  open search selection fluid  options={countryOptions} onChange={this.handleChange}  style={{width:"100%"}}/>
                                            </div>
                                        </Modal.Description>
                                </Modal>
                                </Grid.Column>
                                {/*<div>*/}
                                {/*    */}
                                {/*    Services you would l*/}
                                {/*</div>*/}

                                {/*<Form.Checkbox label="Vs"/>*/}
                            </Form>
                            <Button circular color="facebook" style={{width:"50%",fontSize:"1.2em"}} onClick={this.RouteTONext}>Next</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}