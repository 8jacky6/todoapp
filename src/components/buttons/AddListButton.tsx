import React from "react";
import { Component, MouseEvent } from "react";

/* export const AddListButton = (handleClick) => {
    return(

    );

} */

export class AddListButton extends Component {
    handleClick(event: MouseEvent) {
        event.preventDefault();
        alert(event.currentTarget.tagName);
    }

    render() {
        return <button onClick={this.handleClick}>{this.props.children}</button>;
    }
}
