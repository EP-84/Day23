import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    state = {
    charachters: [
        {
        firstName:'Lary',
        lastName:'Page',
        },
        {
        firstName:'Ada',
        lastName:'Lovelace',
        },
        {
            firstName:'Alan',
            lastName:'Turing',
        },

        
    ],
    
} 

remuveCharacter = (index) => {
    const {charachters} = this.state;

    this.setStates({
        charachters: charachters.filter((character, i) => {
            return i !==index;
        }),

    })
}

render() {
    const { charachters } = this.state;

    return (
        <div className="container">
            <Table charachterData={charachters}
            remuveCharacter={this.remuveCharacter} />
        </div>
    )
}

    
}
export default App;

