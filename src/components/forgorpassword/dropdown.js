import React, {Component} from "react";
import {Icon, Menu, Responsive, Sidebar} from "semantic-ui-react";
// import SearchCategoryLayout from "semantic-ui-react/dist/commonjs/modules/Search/SearchCategoryLayout";



export class Dropdown extends Component{


    render() {
        return (
            <Menu vertical>
                <Dropdown item text='Categories'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Electronics</Dropdown.Item>
                        <Dropdown.Item>Automotive</Dropdown.Item>
                        <Dropdown.Item>Home</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        );
    }
}