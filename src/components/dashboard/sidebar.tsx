import React, {Component} from "react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";

// import './dashboard.css'
// import myimage from '../../../public'

import {
    Loader,
    Dimmer,
    Dropdown,
    Responsive,
    Visibility,
    Menu,
    Container,
    Icon,
    Image,
    List,
    Button,
    Grid,
    Header,
    Sticky
} from "semantic-ui-react";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import { Dashboard } from "./dashboard";

interface Mobile {
    mobile:boolean
}




class LefthelpMenu extends Component<any, any>{


    render() {
        return (
            // <div>
                <Segment disabled padded style={{marginTop:"3.5%",minHeight:"600px"}}>
                    <Label attached='top' style={{textAlign:"center",color:"white",backgroundColor:"black"}}>Need Help?</Label>
                    <Header></Header>
                    Here is a guide for filling the form
                </Segment>
            // </div>
        );
    }

}




export class Sidebar extends Component<any>{

    state = {
        mobile: false
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    componentDidMount(): void {

        document.body.style.background= "#DDE1E5";

    }

    mobile=()=>{

        const getWidth = window.innerWidth;
        // @ts-ignore
        if (Responsive.onlyMobile.maxWidth <= window.innerWidth){

            this.setState({
                mobile:true
            })
        }




    }

    render() {
        const { children } = this.props
        // const { fixed } = this.state


        var noti= [];
        for (var i = 0; i < 7; i++) {
            noti.push(
                // <div>
                // <Dropdown.Divider />
                // <List divided relaxed >
                <List.Item  as ="a" style={{margin:"5px,0"}} >
                    <List.Icon name='bullhorn' size='large' verticalAlign='middle' />
                    <List.Content as="a">
                        <List.Header>New Organisation added</List.Header>
                        <List.Description>Updated 10 mins ago</List.Description>
                    </List.Content>
                    <Dropdown.Divider style={{margin:0}}/>
                </List.Item>
                // </List>
                //     <Dropdown.Divider style={{margin:0}}/>
                // </div>
            );}

        return (

                <Responsive
                    minWidth={Responsive.onlyTablet.minWidth}>



                <Segment
                    textAlign='center'
                    style={{  padding: 0}}
                    vertical
                >
                    <Menu
                        pointing
                        secondary
                        size='large'
                        style={{background:"#461d40",marginBottom:0,}}
                    >
                        <Container style={{paddingLeft:0}}>
                            <Menu.Item  className="header-topmenu" >
                                <Image  src={require('../forgorpassword/main_logo.png')} style={{width:"60px"}}/>

                                <b> VAYANA NETWORK</b>
                            </Menu.Item>

                            <Menu.Item position='right' style={{paddingBottom:0,paddingTop:"1px"}}>

                                <Dropdown item inline labeled direction="left" text="Nikhil" style={{marginTop:"2px",fontSize:"18px",color:"#DBE4EC"}}>
                                    <Dropdown.Menu style={{marginRight:"20px",marginTop:"2px",fontSize:"15px",background:"#e7eeef",borderRadius:0}}>

                                        <Dropdown.Item text="Edit" icon="edit"/>
                                        <Dropdown.Item text="Invite user" icon="user"/>
                                        <Dropdown.Item text="support" icon="handshake"/>
                                        <Dropdown.Item text="contact" icon="phone"/>
                                    </Dropdown.Menu>
                                </Dropdown>






                                <div style={{cursor:"pointer"}}>
                                    <Icon.Group size='large' style={{padding:"4px 0"}}>
                                        <Dropdown  direction="left" as={Icon} fitted inline   icon="bell outline" item  style={{paddingTop:0,color:"#DBE4EC",borderRadius:0,maxHeight:"26em !important"}}  >
                                            <Dropdown.Menu style={{fontSize:"15px",marginTop:"13px",background:"#e7eeef",borderRadius:0}} >
                                                <List.Content  relaxed  verticalAlign='middle' style={{fontSize:"15px",margin:"13px 0 ",color:"black",textAlign:"center",cursor:"pointer"}} >
                                                    Notification
                                                </List.Content>
                                                <Dropdown.Divider style={{margin:0}}/>
                                                <List celled divided relaxed>
                                                    {noti}
                                                </List>
                                                <Dropdown.Divider style={{margin:0}}/>
                                                <List.Content  relaxed  verticalAlign='middle' style={{fontSize:"15px",margin:"13px 0 ",color:"black",textAlign:"center",cursor:"pointer"}} >
                                                    Show all
                                                </List.Content>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Label  floating color="red"  className="notification-counter" > 1  </Label>
                                    </Icon.Group>
                                </div>
                                <Icon style={{padding:"0 30px",color:"#DBE4EC"}} size="big" name='sign-out' />

                            </Menu.Item>

                        </Container>
                    </Menu>

                </Segment>

                <Grid centered>
                    <Grid.Column widescreen={2} computer={3} tablet={4}  only='tablet' >
                        {/*<Sticky >*/}
                        <Menu fluid vertical tabular
                              style={{marginTop:"4%",borderRight:0,fontSize:"15px"}}
                              >
                            <Menu.Item
                                name='bio'
                                // active
                            />
                            <Menu.Item
                                name='pics'
                                active
                                style={{background:"#d4d4d5"}}
                            />
                            <Menu.Item
                                name='companies'
                            />
                            <Menu.Item
                                name='links'
                            />
                        </Menu>

                        <Segment  padded style={{marginTop:"3.5%",minHeight:"600px",background:"rgb(222, 222, 227)" ,border:0,borderRadius:"10px"}}>
                            <Label attached='top' style={{textAlign:"center",color:"white",backgroundColor:"rgb(96, 59, 90)",fontSize:"16px",borderRadius:"10px 10px 0 0 ",boxShadow: "0 4px 12px 0 rgba(96, 59, 90, .50)"}}>Need Help?</Label>
                            <Header></Header>
                                Here is a guide for filling the form

                        </Segment>
                    </Grid.Column>

                    <Grid.Column stretched  widescreen={7} computer={9} tablet={10} mobile={15}
                    >
                            {/*<Dashboard />*/}
                        {children}
                    </Grid.Column>


                </Grid>

                </Responsive>

        )
    }
}