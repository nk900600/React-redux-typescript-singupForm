import * as React from "react";
import { string } from "prop-types";

export interface IHighlightedInputBoxProps {
    type: string;
    onChange?: (value: string) => void;
    required?: boolean;
    lable: string;
    value?:string;
}
export interface IHighlightedInputBoxState {}

export class HighlightedInputBox extends React.Component<IHighlightedInputBoxProps, IHighlightedInputBoxState> {

    constructor(props: IHighlightedInputBoxProps, state: IHighlightedInputBoxState) {
        super(props, state);
        this.onchange = this.onchange.bind(this);
    }

    onBlurFn(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault();
        var value = event.currentTarget.value;

        if(value) {
            event.currentTarget.classList.add("used");
        } else {
            event.currentTarget.classList.remove("used");
        }
    }

    onchange(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault();
        let currentValue = event.currentTarget.value;
        // this.props.onChange(currentValue);
        // this.props.onChange(currentValue);
    }

    render(): React.ReactNode {

        return (
            <div className="highlighted-input">
            <input className="myInput" type={this.props.type}
        onBlur={this.onBlurFn} onChange={this.onchange}
        value={ this.props.value } required/>
        <span className="highlight"></span>
            <span className="bar"></span>
            <label>{this.props.lable}</label>
            </div>
    );
    }
}