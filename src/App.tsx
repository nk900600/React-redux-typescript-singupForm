import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import {BrowserRouter,Switch, Route,Link} from "react-router-dom";  //ts-ignored

// import Signup from "./components/signup/signup";
import Signup_part2 from "./components/signup/signup_part2";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
const App: React.FC = () => {
  return (
    <div className="App">
        {/*<BrowserRouter>*/}
        {/*        <div>*/}
        {/*            <Route path ="/signup" exact component={Signup_part2}  />*/}
        {/*            <Route path ="/login" exact component={Login} />*/}
        {/*        </div>*/}
        {/*</BrowserRouter>*/}


        <BrowserRouter>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                <Switch>
                    <Route path="/signup" >
                        <Signup_part2 />
                    </Route>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login}/>
                    {/*    <Login />*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        </BrowserRouter>
        {/*<Signup_part2 />*/}
    </div>
  );
}

export default App;
