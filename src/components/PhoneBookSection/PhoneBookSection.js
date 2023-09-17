import { Component } from "react";

// get components link from 'components' directory
import { DataIn } from '../DataIn/DataIn';
import { Control } from '../Control/Control';
import { DataOut } from '../DataOut/DataOut';
import { FindContacts } from '../FindContacts/FindContacts';

// add css modules
import phoneSec from './PhoneBookSection.module.css'

export class PhoneBookSection extends Component {

    state = {
        name: "",
        number: "",
        nameValid: true,
        numberValid:true,
    }

    // change 'nameValid' and 'numberValid' properties of state in THIS coponent
    changeValidInputValue = (validValue) => this.setState({
        
       nameValid: validValue.inputNameValid,
       numberValid: validValue.inputNumberValid,
       
    });

    // change 'name' and 'number' properties of state in THIS coponent
    changeStateUser = (userData) => this.setState(({
        name: userData.name,
        number: userData.number,
     }));

    render() {
        // <DataIn> - this component performs save input data and validation.
        // here change THIS state and main state in App.
        // <Control> - this component containe the button
        return(

            <div className={phoneSec.section}>
                <form className={phoneSec.form}>
                    <DataIn  getValid={this.changeValidInputValue} change={this.changeStateUser}/>
                    <Control users={this.props.users} inputData={this.state}/>
                </form>
                
                <p>Contacts</p>
                <FindContacts findUser={this.props.users} findFilter={this.props.userFilter} findData={this.props.data}/>

                <ul className={phoneSec.list}>
                    { 
                        this.props.data.contacts.map(result => { 
                                
                            return <DataOut key={result.id} userData={this.props.data} print={result} del={this.props.userDel}/>

                        })
                    }        
                </ul>
            </div>
        )
    }
}