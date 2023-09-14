import { Component } from "react";

// add css modules
import c from '../Control/Control.module.css';

export class Control extends Component {


    addUser = (evt) => {
        evt.preventDefault();
        this.props.users(this.props.inputData)
    };

    render() {
        return(
            <>
                <button className={c.button} type="submit" onClick={this.addUser}>Add contact</button>
            </>
        )
    }
}