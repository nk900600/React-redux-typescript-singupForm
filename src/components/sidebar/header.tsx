import * as React from "react";
import {
    Grid,
    Menu,
    Icon,
    Dropdown,
    Image,
    Responsive,
    Sidebar,
    Segment,
    Container,
    Button,
    Header, Visibility, Accordion, Transition
} from "semantic-ui-react";
import {Component} from "react";

export interface ITopMenuProps {}
export interface ITopMenuDispatchedProps {
    openOrganisationModal?: () => void;
}
export interface ITopMenuWrappedprops extends ITopMenuDispatchedProps, ITopMenuProps {}

interface ITopMenuState {}


const getWidth = ():any => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyMobile.minWidth : window.innerWidth
};


class Desktop extends Component<any, any>{

    state = {
        fixed:false
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
            <Grid padded>
                <Menu borderless inverted fluid fixed="top">
                    <Menu.Item header >
                        <Image src={require('../forgorpassword/main_logo.png')} className="vayana-logo-menu" style={{height:40}} />
                        VAYANA NETWORK
                    </Menu.Item>
                    <Menu.Menu position="right">



                        <Dropdown item text="Org: TVS" >
                            <Dropdown.Menu>
                                <Dropdown.Item text="Future Group"/>
                                <Dropdown.Item text="Supplier A"/>
                                <Dropdown.Item text="Supplier B"/>
                                <Dropdown.Item text="Supplier C"/>
                                <Dropdown.Item text="Add Organisation" icon="plus" onClick={this.props.openOrganisationModal}/>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown item text="Archana" icon="setting">
                            <Dropdown.Menu>
                                <Dropdown.Item icon="address book" text="My Profile"/>
                                <Dropdown.Item icon="lock" text="Change Password"/>
                                <Dropdown.Item icon="users" text="Invite User"/>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item color="yellow" className="logout"> Logout </Menu.Item>
                    </Menu.Menu>
                </Menu>
                {/*<HomepageHeading/>*/}
            </Grid>
                    </Visibility>
                </Responsive>


        );
    }

}

const HomepageHeading = ({ mobile }:any) => (


    <Container text>

        <Menu pointing secondary vertical>
            <Menu.Item
                name='home'
                active
                // onClick={this.handleItemClick}
            />
            <Menu.Item
                name='messages'
                // active={activeItem === 'messages'}
                // onClick={this.handleItemClick}
            />
            <Menu.Item
                name='friends'
                // active={activeItem === 'friends'}
                // onClick={this.handleItemClick}
            />
        </Menu>



    </Container>
)

class Mobile extends Component<any>{
    state = {
        sidebarOpened:false,
        activeIndex: 3 ,
        accordian1:false,
        accordian2:false

    }



    // state = {
    handleClick = (e:any, titleProps:any) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        // const newIndex = activeIndex === index ? -1 : index
        // this.setState({ activeIndex: newIndex })
        if (index===0){
            this.setState({
                accordian1:!this.state.accordian1
            })
        }
        if (index===1){
            this.setState({
                accordian2:!this.state.accordian2
            })
        }



    };

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => {
        this.setState({
            sidebarOpened: true,
            accordian2:false,
            accordian1:false

        })
    }

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        const {activeIndex}=this.state


        return(
                    <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >

                            <Sidebar
                                // width=" thin"
                                // as={Menu}
                                borderless

                                style={{textAlign:"left",marginLeft:50, background:"black"}}
                                // width="thin"
                                as={Menu}

                                animation='push'
                                inverted
                                onHide={this.handleSidebarHide}
                                vertical
                                visible={sidebarOpened}
                                direction="right"
                            >

                                <Menu.Item header style={{margin:0,textAlign:"center"}} >
                                    <Image src={require('../forgorpassword/main_logo.png')} className="vayana-logo-menu" style={{paddingBottom:5, width:"35%",  display: 'block',  marginLeft: 'auto' ,marginRight: 'auto', height:70}}/>
                                    VAYANA NETWORK
                                </Menu.Item>
                                <Menu.Item as='a' >
                                    <i className="home icon"/>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a' >
                                    <i className="file alternate icon"/>
                                    Reports
                                </Menu.Item>
                                {/*<Menu inverted>*/}

                                <Menu.Item
                                    name='video camera'
                                    // active={activeItem === 'video camera'}
                                    // onClick={this.handleItemClick}
                                >
                                    <Icon name='video camera' />
                                    Channels
                                </Menu.Item>
                                {/*</Menu>*/}

                                <Menu.Item as='a' >
                                    <i className="address card icon"/>
                                    KYC
                                </Menu.Item>
                                <Menu.Item  style={{padding:0}}>
                                    <Accordion  inverted  >
                                        <Accordion.Title
                                            style={{padding:0}}
                                            active={this.state.accordian1}
                                            index={0}
                                            onClick={this.handleClick}
                                        >
                                            <Menu.Item>
                                                <Icon name='dropdown' />
                                                Profile
                                            </Menu.Item>
                                        </Accordion.Title>
                                        <Accordion.Content
                                            active={this.state.accordian1 }
                                            style={{paddingLeft:30,paddingBottom:0,paddingTop:0}}>
                                            <Menu.Item as='a'>Edit profile</Menu.Item>
                                            {/*<Menu.Item as='a'>Careers</Menu.Item>*/}
                                            <Menu.Item as='a'>Log out</Menu.Item>

                                        </Accordion.Content>
                                        <Accordion.Title
                                            style={{padding:0}}
                                            // active={activeIndex === 1}
                                            active={this.state.accordian2}
                                            index={1}
                                            onClick={this.handleClick}
                                        >
                                            <Menu.Item>
                                                <Icon name='dropdown' />

                                                Organisations

                                            </Menu.Item>
                                        </Accordion.Title>
                                        <Accordion.Content
                                            // active={activeIndex === 1}
                                            active={this.state.accordian2}
                                            style={{paddingLeft:30,paddingBottom:0,paddingTop:0}}>
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
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        // inverted
                        textAlign='center'
                        style={{ minHeight:350, padding: '1em 0em' , paddingTop:0}}
                        vertical
                    >

                            <Menu inverted pointing secondary size='large' style={{background:"black", marginTop:0,marginBottom:0}}>
                                    <Menu.Item header style={{paddingBottom:0}} >
                                        <Image src={require('../forgorpassword/main_logo.png')} className="vayana-logo-menu" style={{height:40}} />
                                        VAYANA NETWORK
                                    </Menu.Item>
                                <Menu.Item onClick={this.handleToggle}  position="right" style={{inline:0}}>
                                    <Icon name='sidebar' inverted/>
                                </Menu.Item>

                            </Menu>

                        {/*<HomepageHeading mobile />*/}
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>

        );
    }
}


const ResponsiveContainer = ({ children }:any) => (
    <div>
        <Desktop>{children}</Desktop>
        <Mobile>{children}</Mobile>
    </div>
)






export class TopMenuComponent extends React.Component<ITopMenuWrappedprops, ITopMenuState> {

    componentDidMount(): any {

        const isSSR:boolean = typeof window === 'undefined';
        console.log(Responsive.onlyMobile.minWidth,isSSR)

        // return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth

    }

    render(): React.ReactNode {

        // console.log(this.componentDidMount)


        return (

            <div>

                <ResponsiveContainer>

                   {/*<div style={{background:"red"}}>*/}

                </ResponsiveContainer>




            </div>
        );
    }
}