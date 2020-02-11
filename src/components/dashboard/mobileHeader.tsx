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
    Grid, Sidebar, Ref
} from "semantic-ui-react";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import { Dashboard } from "./dashboard";

interface Mobile {
    mobile:boolean
}

export class MobileHeader extends Component<any>{
        state = {
            left:false,
            right:false
        }

    visible=()=>{

        this.setState({
            left:!this.state.left
        })
    }

    visibleleft=()=>{
        this.setState({
            right:!this.state.right
        })


    }
    hide=()=>{
        this.setState({
            right:!this.state.right
        })


    }
    hideright=()=>{
        this.setState({
            left:!this.state.left
        })


    }

    render() {
        const { children } = this.props
        // const { fixed } = this.state


        var noti= [];
        for (var i = 0; i < 7; i++) {
            noti.push(
                <List.Item  as ="a" style={{margin:"5px,0",iconPosition:"left"}} >
                    <List.Icon name='bullhorn' size='large'  verticalAlign='middle' />
                    <List.Header as="a">
                        csdsc
                    </List.Header>
                </List.Item>

            );}
        const myRef = React.createRef();

        return (

            // <div>

                <Responsive
                    as={Sidebar.Pushable}
                    // getWidth={getWidth}
                    maxWidth={Responsive.onlyMobile.maxWidth}
                >

                    <Sidebar
                        width="thin"
                        as={Menu}
                        animation='push'
                        // inverted
                        // onHide={this.handleSidebarHide}
                        vertical
                        visible={this.state.left}
                        direction="left"
                        onHide={this.hideright}
                        target={myRef}
                        style={{width:"60%"}}
                    >
                        {/*<Menu>*/}
                            <Menu.Item>
                                <Menu.Header>Products</Menu.Header>

                                <Menu.Menu>
                                    <Menu.Item
                                        name='enterprise'
                                    />
                                    <Menu.Item
                                        name='consumer'
                                    />
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item>
                                <Menu.Header>CMS Solutions</Menu.Header>

                                <Menu.Menu>
                                    <Menu.Item
                                        name='rails'
                                    />
                                    <Menu.Item
                                        name='python'
                                    />
                                    <Menu.Item
                                        name='php'
                                    />
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item>
                                <Menu.Header>User Account</Menu.Header>

                                <Menu.Menu>
                                    <Menu.Item
                                        as="a"
                                        name='Edit'
                                        // icon="bell"
                                    />
                                    {/*<Icon name="bell"/>*/}
                                    <Menu.Item
                                        name='dedicated'
                                    />
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item>
                                <Menu.Header>Support</Menu.Header>

                                <Menu.Menu>
                                    <Menu.Item
                                        name='email'
                                    >
                                        E-mail Support
                                    </Menu.Item>

                                    <Menu.Item
                                        name='faq'
                                    >
                                        FAQs
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                        {/*</Menu>*/}
                    </Sidebar>




                <Sidebar
                    width="thin"
                    as={Menu}
                    animation='push'
                    vertical
                    visible={this.state.right}
                    direction="right"
                    onHide={this.hide}
                    target={myRef}
                    style={{width:"60%"}}
                >
                    {/*{noti}*/}


                    <List.Item  as ="a" style={{margin:"5px 0",iconPosition:"left"}} >
                        <List.Icon name='bullhorn' size='large'  verticalAlign='middle' />
                        <List.Header as="a">
                            csdsc
                        </List.Header>
                    </List.Item>


                </Sidebar>




                <Sidebar.Pushable dimmed >
                    <Ref innerRef={myRef}>

                    <Segment
                            inverted
                            textAlign='center'
                            style={{ padding: 0 }}
                            vertical
                        >

                    <Container>
                                <Menu  inverted pointing secondary >
                                    <Menu.Item position="left" onClick={this.visible} style={{fontSize:"25px",paddingLeft:0,paddingRight:0}}>
                                        <Icon name='sidebar'/>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Image  src={require('../forgorpassword/main_logo.png')} style={{width:"48px"}}/>
                                    </Menu.Item>
                                    <Menu.Item position="right" onClick={this.visibleleft} style={{fontSize:"25px",paddingRight:0,paddingLeft:0}}>
                                        <Icon name='bell'/>
                                    </Menu.Item>
                                </Menu>
                            </Container>

                        {/*<HomepageHeading mobile />*/}
                        </Segment>
                    </Ref>



                    {/*{children}*/}
                    </Sidebar.Pushable>


                {children}

                    {/*<Dashboard />*/}

                {/*</Segment>*/}


                </Responsive>

        )
    }
}