import { Component } from "react";

// get components link from 'components' directory
import { DataIn } from '../DataIn/DataIn';
import { Control } from '../Control/Control';
import { DataOut } from '../DataOut/DataOut';
import { FindContacts } from '../FindContacts/FindContacts';

// add css modules


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

                <div>
                    <form>
                        <DataIn read={this.readContacts}/>
                        <Control users={this.props.users} inputData={this.state}/>
                    </form>
                </div>

                <div>
                     <FindContacts/>
                </div>

                <div>
                    <p>Contacts</p>
                    <DataOut print={this.props.data}/>
                </div>
            
            </>

        )
    }
}