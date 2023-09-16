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
   
    getValidInputValue = (validValue) => this.setState(value => ({
       nameValid: validValue.inputNameValid,
       numberValid: validValue.inputNumberValid,
    }));

    changeState = (userData) => this.setState(({
        name: userData.name,
        number: userData.number,
     }));

    render() {
       
        return(

                <div className={phoneSec.section}>
                    <form className={phoneSec.form}>
                        <DataIn read={this.state} getValid={this.getValidInputValue} change={this.changeState}/>
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