import React, { Component } from 'react';

class EntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodGlucose: 0,
            fasting: 'NF',
        }
    }

    handleChange = (event) => {
        const label = event.target.getAttribute('label');
        const value = event.target.value;
        console.log(event.target);
        this.setState({[label]: value});
    }

    handleSubmit = (event) => {
        const body = {...this.state};
        fetch('/api/entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => {
            console.log(response);
            return response.json();
        });
    }

    render() {
        return (
            <div className="formBox">
                <p className="input">Blood Glucose<input className="bloodGlucoseInput" type="number" name="bloodGlucose" label="bloodGlucose" onChange={this.handleChange} min="0" max="99"></input></p>
                <p className="input">Fasting<input className="fastingCheckbox" type="checkbox" name="fasting" label="fasting" value="F" onChange={this.handleChange}></input></p>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default EntryForm;