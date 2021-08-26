import React, { Component } from 'react';

class EntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodGlucose: 0,
            fasting: false,
        }
    }

    formChangeHandler = (event) => {
        const label = event.target.getAttribute('label');
        const value = event.target.value;
        console.log(event.target);
        this.setState({[label]: value});
    }

    render() {
        return (
            <div>
                <p>Blood Glucose<input type="number" name="bloodGlucose" label="bloodGlucose" onChange={this.formChangeHandler}></input></p>
                <p>Fasting<input type="checkbox" name="fasting" label="fasting" onChange={this.formChangeHandler}></input></p>
                <button type="submit">Submit</button>
            </div>
        )
    }
}

export default EntryForm;