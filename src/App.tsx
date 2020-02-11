import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import {BrowserRouter,Switch, Route,Link} from "react-router-dom";  //ts-ignored
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

// import Signup from "./components/signup/signup";
import Signup_part2 from "./components/signup/signup_part2";
import Login from "./components/login/login";

import Forgetpassword from "./components/forgorpassword/forgetpassword";
import Otp from "./components/forgorpassword/otp";

import Responsiveness from "./components/forgorpassword/responsive";
import SemanticRes from "./components/forgorpassword/semantic-res";
import DesignX from "./components/forgorpassword/designX";
import { TopMenuComponent } from './components/sidebar/header';
import HomepageLayout from "./components/seamantic-homepage/homepage";
import Youtube from "./components/semantic-youtube-turorials";
import {Dropdown} from "./components/forgorpassword/dropdown";
import {TopMenuIcon} from "./components/sidebar/icon-based-sidebar";
import ResponsiveLayout from "./components/sidebar/side-tag";
import {  Loginin } from './components/signinproject/login';
import {Responsive} from "semantic-ui-react";
// @ts-ignore
import {Signup} from "./components/signinproject/signup";
import {Mainpage} from "./components/signinproject/mainpage";
import {Forgotpassword1} from "./components/signinproject/forgotpassword";
import {Otpforpassword} from "./components/signinproject/otpforpassword";
import { Confirmpassword1 } from './components/signinproject/confirmpassword';
import { Signotp } from './components/signinproject/signupotp';
import { Dashboard } from './components/dashboard/dashboard';
import { GSTINOTP } from './components/dashboard/GSTINOTP';
import { OtpVerify } from './components/dashboard/OtpVerify';
import { Header } from './components/dashboard/header';
import { Sidebar } from './components/dashboard/sidebar';
import { MobileHeader } from './components/dashboard/mobileHeader';
import { Finalpage } from './components/dashboard/finalpage';
// import ResponsiveLayout from "./components/sidebar/responsibe-semantic";
// import {Dropdown} from "semantic-ui-react";

// minWidth={Responsive.onlyTablet.minWidth}
//
// const mobile= (if (minWidth==={Responsive.onlyTablet.minWidth}){
//
// }
class App extends Component<any> {



    render() {

        return (
            <div className="App" >
                {/*<BrowserRouter>*/}
                {/*        <div>*/}
                {/*            <Route path ="/signup" exact component={Signup_part2}  />*/}
                {/*            <Route path ="/login" exact component={Login} />*/}
                {/*        </div>*/}
                {/*</BrowserRouter>*/}


                <BrowserRouter>
                    <div >
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                        <Switch>
                            <Route path="/signup">
                                <Signup_part2/>
                            </Route>
                            {/*<Route path="/" exact component={Dashboard}/>*/}
                            {/*<Route path="/login" component={Login}/>*/}
                            {/*<Route path="/forgotpassword" component={Forgetpassword}/>*/}
                            {/*<Route path="/otp" component={Otp}/>*/}
                            {/*<Route path="/res" component={Responsiveness}/>*/}
                            <Route path="/sem" component={SemanticRes}/>
                            <Route path="/des" component={DesignX}/>
                            <Route path="/header" component={TopMenuComponent}/>
                            <Route path="/home" component={HomepageLayout}/>
                            <Route path="/youtube" component={Youtube}/>
                            <Route path="/drop" component={Dropdown}/>
                            <Route path="/icon" component={TopMenuIcon}/>
                            {/*<Route path="/res" component={ResponsiveLayout}/>*/}
                            {/*<Route path="/side" component={ResponsiveLayout}/>*/}
                            {/*<Route path="/main" component={Mainpage}/>*/}
                            {/*<Transition.Group animation="drop">*/}
                                <Route path="/login" render={(props) => <Loginin {...props} mobile/>}/>
                                <Route path="/sign" render={(props) => <Signup {...props} mobile/>}/>
                                <Route path="/forgotpassword" render={(props) => <Forgotpassword1 {...props} mobile/>}/>
                                <Route path="/otp" render={(props) => <Otpforpassword {...props} mobile/>}/>
                                <Route path="/confirm" render={(props) => <Confirmpassword1 {...props} mobile/>}/>
                                <Route path="/signupotp" render={(props) => <Signotp {...props} mobile/>}/>
                                <Route path="/dash" render={(props) => <Dashboard {...props} mobile/>}/>
                                <Route path="/gst" render={(props) => <GSTINOTP />}/>
                                <Route path="/gstotp" render={(props) => <OtpVerify />}/>
                                <Route path="/head" render={(props) => <Header />}/>
                                <Route path="/side" render={(props) => <Sidebar />}/>
                                <Route path="/mobile" render={(props) => <MobileHeader />}/>
                                <Route path="/page" render={(props) => <Finalpage />}/>
                            {/*</Transition.Group>*/}




                            {/*    <Login />*/}
                            {/*</Route>*/}
                        </Switch>
                    </div>
                </BrowserRouter>
                {/*<Signup_part2 />*/}
            </div>
        );
    }
}

export default App;
