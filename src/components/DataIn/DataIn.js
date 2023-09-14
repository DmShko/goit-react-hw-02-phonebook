import { Component } from "react";

// add css modules
import di from './DataIn.module.css';

export class DataIn extends Component {

    state = {
        nameValue: "",
        numberValue:"",
    }

    toChange = (evt) => {
       
        evt.target.name === "userName" ? this.setState({nameValue: evt.target.value.trim(),})
        : this.setState({numberValue: evt.target.value.trim(),});
        this.props.read(this.state);

    }

    render() {
        return(
            <>

                <label className={di.lable}> 
                    <p className={di.text}>Name</p>
                    <input className={di.input}  name="userName" type="text" onChange={this.toChange} 
                    pattern="^[A-Za-z]+\s[A-Za-z]+$"
                    title="Please, use only letters!" required></input>
                </label>
                <label className={di.lable}> 
                    <p className={di.text}>Number</p> 
                    <input className={di.input} name="userNumber" type="tel" onChange={this.toChange} 
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required></input>
                </label>
            
            </>
               
        )
    }
}