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
    Header, Visibility, Accordion, Transition, List
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
            <Responsive  minWidth={Responsive.onlyTablet.minWidth}>
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
        accordian2:false,
        arrowicon:true

    }



    // state = {
    handleClick = (e:any, titleProps:any) => {
        const { index } = titleProps
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

    icon=()=>{
        this.setState({
            arrowicon:!this.state.arrowicon
        })
    }

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        // const {activeIndex}=this.state


        return(
            <Responsive
                as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    onHide={this.handleSidebarHide}
                    visible={sidebarOpened}
                    width='thin'
                    direction="right"
                >
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>

                {/*<Menu.Item>*/}


                    <Accordion  inverted>
                    <Accordion.Title
                        style={{padding:0}}
                        active={this.state.accordian1}
                        index={0}
                        onClick={this.handleClick}
                        >

                        <Menu.Item as='a' onClick={this.icon} >
                            <Icon name={this.state.arrowicon?"arrow right":"arrow down"} />
                            Channels
                        </Menu.Item>

                        </Accordion.Title>

                            <Accordion.Content
                                active={this.state.accordian1 }
                                style={{paddingBottom:0,paddingTop:0,paddingLeft:0}}
                                >
                                    <Menu.Item as='a'>
                                        <Icon name='gamepad' />
                                        Games
                                    </Menu.Item>
                                    <Menu.Item as='a'>
                                        <Icon name='camera' />
                                        Channels
                                    </Menu.Item>

                             </Accordion.Content>


                        </Accordion>
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






export class TopMenuIcon extends React.Component<ITopMenuWrappedprops, ITopMenuState> {

    componentDidMount(): any {

        const isSSR:boolean = typeof window === 'undefined';
        console.log(window.innerWidth,isSSR);
        // console.log()

        return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth

    }

    render(): React.ReactNode {

        // console.log(this.componentDidMount)


        return (

            <div>
                <ResponsiveContainer>
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}


                </ResponsiveContainer>

                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable >
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>
                                        Footer Header
                                    </Header>
                                    <p>
                                        Extra space for a call to action inside the footer that could help re-engage users.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>



            </div>
    );
    }
}