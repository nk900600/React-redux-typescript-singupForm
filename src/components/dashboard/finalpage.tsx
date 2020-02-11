import React, {Component} from "react";
import {MobileHeader} from "./mobileHeader";
import {Sidebar} from "./sidebar";
import {Dashboard} from "./dashboard";


const ResponsiveContainer = ({ children}:any) => (
    <div>
        <MobileHeader>{children}</MobileHeader>
        <Sidebar>{children}</Sidebar>
    </div>
)




export class Finalpage extends Component{


    render() {
        return (
            <div>
                <ResponsiveContainer>

                    <Dashboard/>

                </ResponsiveContainer>


            </div>
        );
    }



}