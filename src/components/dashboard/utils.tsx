import React from "react";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
// import './dashboard.css'




export function partionInput(css:string,num:number,id:string,onchange:any,onkeydown:any) {



    var totalInputBox = [];
    for (var i = 0; i < num; i++) {
        totalInputBox.push(<input
            className={`${css}`}
            id={`${i}${id}`}
            maxLength={1}
            onChange={onchange}
            onKeyDown={onkeydown}
        />);}

    return totalInputBox



}

