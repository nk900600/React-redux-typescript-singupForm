import React, {Component} from "react";
import './res.css';
import {Sidebar, Menu, Icon, Segment} from "semantic-ui-react";

class Responsiveness extends Component{
    state={
        status:false,
        visible:"",
        setVisible:"",
    };


    // const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

    Changeless=(event:any)=>{
      this.setState({
          status:!this.state.status
      })
    };

    render() {
        return (
            <div>
                <header>
                    <div className="wrapper">
                        <h1 className="logo"> Hello World</h1>
                        <nav>
                            <h2>main menu</h2>
                            <div id="burger-nav" onClick={this.Changeless}/>
                            <ul className={this.state.status.toString()} >
                                <li><a href="#">One</a></li>
                                <li><a href="#">Second</a></li>
                                <li><a href="#">Third</a></li>
                                <li><a href="#">Four</a></li>
                            </ul>


                        </nav>

                    </div>
                </header>
            </div>
        );
    }

}

export default Responsiveness