import { Component } from "react";

// add css modules
import o from '../DataOut/DataOut.module.css'

export class DataOut extends Component {

    deleteUser = (evt) => {
        this.props.del(evt.target.name);
    }

    render() {

        return (
            
            <ul>

                {this.props.print.contacts.map(resault => { 
                     if(resault.name.toLowerCase().includes(this.props.print.filter)) {
                        
                        return (
                        <li className={o.item} key={resault.id}>

                            <p>{resault.name}</p>
                            <button className={o.button} name={resault.id} type="button" onClick={this.deleteUser}>Delete</button>
                            
                        </li>)
                    }}
                )}
                   
            </ul>
        
        )
    }
}