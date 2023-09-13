import { Component } from "react";

export class Control extends Component {


    addUser = (evt) => {
        evt.preventDefault();
        this.props.users(this.props.inputData)
    };

    render() {
        return(
            <>
                <button type="submit" onClick={this.addUser}>Add contact</button>
            </>
        )
    }
}