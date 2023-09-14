import { Component } from "react";
import { nanoid } from 'nanoid';
import Notiflix from "notiflix";

import { PhoneBookSection } from './components/PhoneBookSection/PhoneBookSection';

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  changeContacts = (newstate) => {

   
    if(this.state.contacts.find(element => element.name === [newstate.name, newstate.number].join(" ")) === undefined) {
      
      this.setState({contacts: [...this.state.contacts, {name:[newstate.name, newstate.number].join(" "), id: nanoid()}],
      
    });} else {
      Notiflix.Notify.warning(`"${newstate.name}" is already in contacts!`);
    }
  }
  
  changeFilter = (newFilter) => this.setState({filter: newFilter.filter});

  deleteContact = (deleteById) => this.setState( 

    {contacts: this.state.contacts.filter(element => element.id !== deleteById)}
    
  );
  
  render() {
   
    return(

      <>

        <p>Phonebook</p>
        <PhoneBookSection users={this.changeContacts} userDel={this.deleteContact} userFilter={this.changeFilter} data={this.state}/>
        
      </>
      
    )
  }
}
