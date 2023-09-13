import { Component } from "react";

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

                <label> 
                    Name
                    <input name="userName" type="text" onChange={this.toChange} 
                    pattern="^[A-Za-z]+\s[A-Za-z]+$"
                    title="Please, use only letters!"></input>
                </label>
                <label> 
                    Number
                    <input name="userNumber" type="text" onChange={this.toChange} 
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required></input>
                </label>
            
            </>
               
        )
    }
}