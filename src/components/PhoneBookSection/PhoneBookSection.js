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
        
    }

    readContacts = (userName) => this.setState({
        name: userName.nameValue,
        number: userName.numberValue,
    } 
    );

    render() {
       
        return(

            <>

                <div className={phoneSec.section}>
                    <form className={phoneSec.form}>
                        <DataIn read={this.readContacts}/>
                        <Control users={this.props.users} inputData={this.state}/>
                    </form>
                
                    <p>Contacts</p>
                    <FindContacts findUser={this.props.users} findFilter={this.props.userFilter} findData={this.props.data}/>
                    <DataOut print={this.props.data} del={this.props.userDel}/>
               
                </div>
            </>

        )
    }
}