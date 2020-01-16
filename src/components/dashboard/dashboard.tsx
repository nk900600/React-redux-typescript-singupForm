import React, {Component} from "react";
import {render} from "react-dom";
import {TokenDecode} from "../../validations/jwtTokens";
import {brotliCompress} from "zlib";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {domainToASCII} from "url";

// interface DashboardProps {
//     hasError: boolean,
//     username : string
//
// }

class Dashboard extends Component<any>{

    state = {
        hasError : false,
        username : ""
    };


    componentDidMount(): void {
        var user= localStorage.getItem("token");
        try {
            var data = TokenDecode(user);
            this.setState({
                username: data.data.username
            });
        }
        catch (error) {
            this.setState({
                hasError: true
            })
        }
    }


    // works for child component

    // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //     // if (error==="TokenExpiredError"){
    //     //     this.setState({
    //     //         hasError: true
    //     //     })
    //     console.log("dd")
    //     }
    //

    render() {

        if(this.state.hasError){
            return (
                <div>
                <h1> Something went wrong please login back</h1>
                <br/>
                    <div>
                        <Link to="/login">login</Link>
                    </div>
                </div>

            )
        }
        return (
            <div>
                hello {this.state.username}
            </div>
        );
    }
}



export default Dashboard