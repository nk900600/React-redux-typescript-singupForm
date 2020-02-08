import React, {Component} from "react";
import {
    Container,
    Grid,
    Menu,
    Segment,
    Dropdown,
    Icon,
    Button,
    Sidebar,
    Responsive,
    Accordion,
    Image
} from "semantic-ui-react";
// declare function require(path: string);
import './sem.css';


const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'nkn',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },]


class SemanticRes extends Component{

    state = { activeIndex: 3 }

    handleClick = (e:any, titleProps:any) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })

    }

    render() {

        const {activeIndex}=this.state

        return (
            <div>
                <Sidebar
                    // width=" thin"
                    as={Menu}
                    borderless
                    style={{textAlign:"left",marginLeft:50, background:"green"}}
                    // animation='push'
                    inverted
                    vertical
                    visible
                    direction="right"
                >
                    <Menu.Item header style={{margin:0}} >
                        <Image src={require('./swoosh.png')} className="vayana-logo-menu" style={{paddingBottom:5}}/>
                        VAYANA NETWORK
                    </Menu.Item>
                    <Menu.Item as='a' >
                        <i className="home icon"/>
                        Home
                    </Menu.Item>
                    {/*<Menu.Item as='a'>Work</Menu.Item>*/}
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>

                    <Menu.Item  style={{padding:0}}>

                        <Accordion  inverted  >

                            <Accordion.Title

                                style={{padding:0}}
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <Menu.Item>
                                <Icon name='dropdown' />
                                profile
                                </Menu.Item>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0} style={{paddingLeft:30,paddingBottom:0,paddingTop:0}}>

                                <Menu.Item as='a'>edit profile</Menu.Item>
                                    {/*<Menu.Item as='a'>Careers</Menu.Item>*/}
                                <Menu.Item as='a'>Log out</Menu.Item>

                            </Accordion.Content>


                            <Accordion.Title
                                style={{padding:0}}
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handleClick}
                            >
                                <Menu.Item>
                                <Icon name='dropdown' />
                                Organisations

                                </Menu.Item>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}  style={{paddingLeft:30,paddingBottom:0,paddingTop:0}}>
                                <Menu.Item as='a'>Future Groups</Menu.Item>
                                {/*<Menu.Item as='a'>Careers</Menu.Item>*/}
                                <Menu.Item as='a'>Company 1</Menu.Item>
                                <Menu.Item as='a'>Company 2</Menu.Item>
                                <Menu.Item as='a'>Company 3</Menu.Item>
                                <Menu.Item as='a'>
                                    {/*<i className="dropdown"></i>*/}
                                    Add more
                                </Menu.Item>
                            </Accordion.Content>
                        </Accordion>
                    </Menu.Item>
                </Sidebar>



            </div>
        );
    }
}



export default SemanticRes