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
// import './dashboard.css'
import {Dropdown, Modal, Header, TextArea} from "semantic-ui-react";
import { partionInput } from "./utils";
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
    };


    componentDidMount(): any {
        // document.body.style.backgroundImage = "url(vayana.png)";
        // this.setState({
        //     trigger:true
        // })
    }


     GSTNnumber= async (e:any)=>{

        const v= e.target.id;
        const index=parseInt(v,10);
        const gstnnumberFocus=document.getElementById(`${index+1}gstnindex`);
        const gstnvalue= e.currentTarget.value;
         if (gstnvalue.length === e.target.maxLength &&  gstnnumberFocus !==null ) {
             // @ts-ignore
             gstnnumberFocus.focus()
         }
        await this.setState({
                    gstnnumber: [...this.state.gstnnumber,gstnvalue]
                })
    }

    PANnumber=async (e:any)=>{
        const v= e.target.id;
        const index=parseInt(v,10);
        const pannumberFocus=document.getElementById(`${index+1}panindex`);
        const panvalue= e.currentTarget.value;
        if (e.target.value.length === e.target.maxLength &&  pannumberFocus !==null ) {
            // @ts-ignore
            pannumberFocus.focus()
        }
        await this.setState({
                pannumber: [...this.state.pannumber,panvalue]
            })


    };


    PINnumber= async (e:any)=>{
        const v= e.target.id;
        const index=parseInt(v,10);
        const pinnumberFocus=document.getElementById(`${index+1}pinindex`);
        const pinvalue= e.currentTarget.value;
        if (e.target.value.length === e.target.maxLength &&  pinnumberFocus !==null ) {
            // @ts-ignore
            pinnumberFocus.focus()
        }

        await this.setState({
                pannumber: [...this.state.pinnumber,pinvalue]
            })



    };

    TINnumber= async (e:any)=>{
        const v= e.target.id;
        const index=parseInt(v,10);
        const tinnumberFocus=document.getElementById(`${index+1}tinindex`);
        const tinvalue= e.currentTarget.value;
        if (e.target.value.length === e.target.maxLength &&  tinnumberFocus !==null ) {
            // @ts-ignore
            pinnumberFocus.focus()
        }
        await this.setState({
                pannumber: [...this.state.tinnumber,tinvalue]
            })

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

    gstChange=(e:any)=>{
        const v= e.target.id;
        const num=parseInt(v,10);
        const gstnnumberFocus=document.getElementById(`${num-1}gstnindex`);
        const key= e.keyCode;
        if (key===8){
            var array = [...this.state.gstnnumber]; // make a separate copy of the array
            // @ts-ignore
            var index = array.indexOf(e.currentTarget.value);
            var index1 = (e.currentTarget.value);
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({gstnnumber: array});
            }
            if (index1.length === 0 && gstnnumberFocus !==null){
                // @ts-ignore
                gstnnumberFocus.focus()
            }
        }
    };

    panChange=(e:any)=>{

        const v= e.target.id;
        const num=parseInt(v,10);
        const pannumberFocus=document.getElementById(`${num-1}panindex`);
        const key= e.keyCode;
        if (key===8){
            var array = [...this.state.pannumber]; // make a separate copy of the array
            // @ts-ignore
            var index = array.indexOf(e.currentTarget.value)
            var index1 = (e.currentTarget.value)
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({pannumber: array});
            }
            if (index1.length === 0 && pannumberFocus !==null){
                // @ts-ignore
                pannumberFocus.focus()
            }
        }
    }


    pinChange=(e:any)=>{

        const v= e.target.id;
        const num=parseInt(v,10);
        const pinnumberFocus=document.getElementById(`${num-1}pinindex`);
        const key= e.keyCode;
        if (key===8){
            var array = [...this.state.pinnumber]; // make a separate copy of the array
            // @ts-ignore
            var index = array.indexOf(e.currentTarget.value)
            var index1 = (e.currentTarget.value)
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({pinnumber: array});
            }
            if (index1.length === 0 && pinnumberFocus !==null){
                // @ts-ignore
                pinnumberFocus.focus()
            }
        }
    }



    render() {

        var gstinLength =partionInput("Gstncss",15,"gstnindex",this.GSTNnumber,this.gstChange);
        var panNumber =partionInput("Pancss",10,"panindex",this.PANnumber,this.panChange);
        var PINnumber =partionInput("Pincss",6,"pinindex",this.PINnumber,this.pinChange);
        const countryOptions=[
            { key: 'ind', value: 'ind', flag: 'in', text: 'India' },
            { key: 'usa', value: 'usa', flag: 'us', text: 'USA' },

        ];

        return (

            <div style={{
                // backgroundImage:'url("home/nikhil/Downloads/vayana.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily:"neusa next std",
                // textAlign:"center"
            }}>
                {/**/}
                <Grid padded centered  style={{background:"#DDE1E5"}}>
                    <Grid.Column widescreen={14} computer={15} mobile={16} tablet={15} style={{paddingTop:"2%",minWidth:"420px" }} >
                         <Segment style={{padding:"3em",textAlign:"center"}}>
                            <div >
                                <div style={{fontSize:"2.5em",fontStyle:"bold",textAlign:"center",paddingBottom:"0.4em"}}>
                                    Add organization
                                </div>
                                <div style={{fontSize:"1em",fontStyle:"bold",textAlign:"center"}}>
                                    Minimum one organization is required

                                </div>
                            </div>
                            <br/>

                            <Form style={{textAlign:"left",paddingBottom:"2em",paddingTop:"2em"}}>
                                <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                    PAN
                                </div>
                            <div style={{paddingBottom:"10px"}}>
                                {panNumber}
                            </div>
                                <Form.Group widths='equal'>
                                    <Form.Input required fluid label='Organisation Name' placeholder='Organisation Name'      />
                                    <Form.Input fluid label='Constitution' placeholder='Constitution' />
                                </Form.Group>
                                    <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                        GSTIN
                                    </div>
                                <form style={{float:"right",paddingBottom:"10px"}}>
                                    {gstinLength}
                                </form>




                                {/*{this.state.country==="usa"?*/}
                                {/*    <div>*/}

                                {/*        <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>*/}
                                {/*            TIN*/}
                                {/*        </div>*/}

                                {/*        <Form style={{float:"right",paddingBottom:"10px"}}>*/}
                                {/*            {panNumber}*/}
                                {/*        </Form>*/}
                                {/*    </div>:""}*/}


                                <div style={{fontWeight:"bold",paddingBottom:"4px",paddingTop:"4px"}}>
                                    Address
                                </div>


                                <TextArea className="orgText" placeholder='Address' />


                                <div style={{fontWeight:"bold",paddingBottom:"6px",paddingTop:"6px"}}>
                                    Pin code
                                </div>

                                <Form style={{paddingBottom:"10px"}}>
                                    {PINnumber}
                                </Form>


                                {/*</Form.Group>*/}
                                <Form.Group widths='equal' >
                                    <Form.Input fluid label='City' placeholder='City' />
                                    <Form.Input fluid label='State' placeholder='State' />
                                </Form.Group>


                                <Modal  centered basic size="mini" open={this.state.trigger} >
                                    <Modal.Header style={{textAlign:"center",color:"white",background:"#27303A",borderRadius:0}}>Choose a country</Modal.Header>
                                    {/*<Modal.Content image>*/}
                                        {/*<Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />*/}
                                        <Modal.Description>

                                            <div style={{textAlign:"center",paddingBottom:"20px"}}>
                                                <Dropdown  open search selection fluid  options={countryOptions} onChange={this.handleChange}  style={{width:"100%"}}/>
                                            </div>
                                        </Modal.Description>
                                </Modal>

                            </Form>
                            <Button circular color="facebook" style={{width:"50%",fontSize:"1.2em"}} onClick={this.RouteTONext}>Next</Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}