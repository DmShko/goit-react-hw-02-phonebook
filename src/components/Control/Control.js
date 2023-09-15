import { Component } from "react";

// add css modules
import c from '../Control/Control.module.css';

export class Control extends Component {

    addUser = (evt) => {
        if(this.props.inputData.NameValid === false && this.props.inputData.NumberValid === false) {
            evt.preventDefault();
            this.props.users(this.props.inputData)
        } else{
            evt.preventDefault();
        }
    };

    render() {
        console.log(`${this.props.inputData.NameValid} ${this.props.inputData.NumberValid}`)
        return(
            <>
                <button className={c.button} type="submit" onClick={this.addUser}>Add contact</button>
            </>
        )
    }
}