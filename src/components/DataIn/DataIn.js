import { Component } from "react";

// add css modules
import di from './DataIn.module.css';

export class DataIn extends Component {

    state = {
        inputNameValid: true,
        inputNumberValid: true,
    }

    checkValid = (data) => {
        if(data.name === "userName") {
            data.validity.patternMismatch === false ? this.state.inputNameValid = false:
                this.state.inputNameValid = true;

            this.props.getValid(this.state);
        } else {
            data.validity.patternMismatch === false ? this.state.inputNumberValid = false:
                this.state.inputNumberValid = true;

            this.props.getValid(this.state);
        }
    }

    toChange = (evt) => {
        this.checkValid(evt.target);
        // evt.target.name === "userName" ? this.setState({nameValue: evt.target.value.trim(),})
        // : this.setState({numberValue: evt.target.value.trim(),});
        if(this.state.inputNameValid === false || this.state.inputNumberValid === false) {
            evt.target.name === "userName" ? this.props.read.name = evt.target.value
            : this.props.read.number = evt.target.value;
        }
        
        // this.props.read(this.state);
        
    }

    render() {
        
        return(
            <>

                <label className={di.lable}> 
                    <p className={di.text}>Name</p>
                    <input className={di.input}  name="userName" type="text" onChange={this.toChange} 
                    pattern="\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+"
                    title="Please, use only letters!" required></input>
                </label>
                <label className={di.lable}> 
                    <p className={di.text}>Number</p> 
                    <input className={di.input} name="userNumber" type="tel" onChange={this.toChange} 
                    pattern="\d{3}[0-9]-\d{1}[0-9]-\d{1}[0-9]"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required></input>
                </label>
                
            
            </>
               
        )
    }
}