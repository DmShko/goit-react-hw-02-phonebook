import { Component } from "react";

export class DataOut extends Component {
    render() {

        
        return (
            
            <ul>

                {this.props.print.contacts.map(resault => 
                    (<li key={resault.id}>

                     <p>{resault.name}</p>
                        
                    </li>)
                )}
                   
            </ul>
        
        )
    }
}