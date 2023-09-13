import { Component } from "react";
import { nanoid } from 'nanoid'

import { PhoneBookSection } from './components/PhoneBookSection/PhoneBookSection';

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
  }

  changeContacts = (newstate) => this.setState({contacts: [...this.state.contacts, {name:[newstate.name, newstate.number].join(" "), id: nanoid()}],
    name: newstate.name});

  render() {
    console.log(this.state)
    return(

      <>

        <p>Phonebook</p>
        <PhoneBookSection users={this.changeContacts} data={this.state}/>
        
      </>
      
    )
  }
}
