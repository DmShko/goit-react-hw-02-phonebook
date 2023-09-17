import { Component } from "react";

// add css modules
import di from './DataIn.module.css';

export class DataIn extends Component {

    state = {
        name: "",
        number: "",
        inputNameValid: true,
        inputNumberValid: true,
    }

    checkValid = (data) => {
       
        if(data.validity.patternMismatch === false) {
               
            data.name === "userName" ?  this.setState(value => ({inputNameValid : value.inputNameValid && data.validity.patternMismatch})):
            this.setState(value => ({inputNumberValid : value.inputNumberValid && data.validity.patternMismatch}));
                
        } else {
                
            data.name === "userName" ?  this.setState(value => ({inputNameValid : value.inputNameValid || data.validity.patternMismatch})):
            this.setState(value => ({inputNumberValid : value.inputNumberValid || data.validity.patternMismatch}));

        }
            
    }
    
    change = (data) => {
        
        if(data.validity.patternMismatch === false) {
            
            data.name === "userName" ? this.setState({name: data.value.trim()})
            : this.setState({number: data.value.trim()});

        }

    }

    toChange = (evt) => {

        this.props.getValid(this.state);
        
        // if(this.state.inputNameValid === false && this.state.inputNumberValid === false){
         
           
        this.props.change(this.state);
        // }
        
        this.checkValid(evt.target);
        this.change(evt.target);
        
    }

    render() {
        console.log(this.state)
        return(
            <>

                <label className={di.lable}> 
                    <p className={di.text}>Name</p>
                    <input className={di.input} name="userName" type="text" onChange={this.toChange} 
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