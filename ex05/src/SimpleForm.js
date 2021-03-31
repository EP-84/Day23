import React, { Component } from 'react';

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "Yoda" };
    }

    onChangeHandler = (event) => {
        this.setState({code: event.target.value});

    }


    render() {
        return (
            
            <form>
            <h1>Name: {this.state.name}</h1>
            <p>First name:</p>   
            <input
            type='text'
            onChange={this.onChangeHandler}/>
            </form>

         );
    }
}

export default SimpleForm;