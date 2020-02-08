import React, {Component} from "react";
import './des.css';

class DesignX extends Component{

    render() {
        return (
            <div>
                <body>

                <nav>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkbtn">
                        <i className="server icon"/>
                    </label>
                    <label className="logo"> Design X</label>
                    <ul>
                        <li><a className="active" href="#">home</a></li>
                        <li><a href="#">home</a></li>
                        <li><a href="#">home</a></li>
                        <li><a href="#">home</a></li>

                    </ul>

                </nav>
                </body>
            </div>
        );
    }
}


export  default  DesignX