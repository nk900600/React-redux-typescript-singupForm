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
    Grid
} from "semantic-ui-react";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import { Dashboard } from "./dashboard";

interface Mobile {
    mobile:boolean
}

export class Header extends Component<any>{

    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

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

                <div>
                    <Segment
                        textAlign='center'
                        style={{ minHeight: 700, padding: 0}}
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
                                                <List   divided relaxed>
                                                    {/*<List.Item>*/}
                                                    {/*    <List.Icon name='bullhorn' size='large' verticalAlign='middle' />*/}
                                                    {/*    <List.Content>*/}
                                                    {/*        <List.Header>New Organisation added</List.Header>*/}
                                                    {/*        <List.Description as='a'>Updated 10 mins ago</List.Description>*/}
                                                    {/*    </List.Content>*/}
                                                    {/*</List.Item>*/}

                                                    {/*<Dropdown.Divider style={{margin:0}}/>*/}
                                                    {noti}
                                                    {/*<Dropdown.Divider style={{margin:0}}/>*/}

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


                        <Menu
                            // fixed={fixed ? 'top' : null}
                            // inverted={!fixed}
                            pointing
                            vertical
                            secondary
                            size='large'
                        >

                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>


                            </Container>
                        </Menu>

                        <Dashboard />

                    </Segment>
                </div>
        )
    }
}