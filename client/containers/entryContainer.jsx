import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryDisplay from '../components/entryDisplay.jsx';
import EntryCreator from '../components/entryCreator.jsx';
import EntryForm from '../components/entryForm.jsx';
import { withRouter } from "react-router";

class EntryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'main',
            entryList: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('/api/entry')
            .then(res => res.json())
            .then((data) => {
                console.log(data.entries)
                this.setState({ entryList: data.entries })
            })
            .catch(err => console.log('EntryContainer.componentDidMount: get data: ERROR: ', err));
    }
    
    handleClick = () => {
        this.setState({ view: 'form' });
    };

    render() {
        if (this.state.view === 'main') {
            return (
                <div className="entryContainer">
                    <EntryDisplay entryList={this.state.entryList} />
                    <EntryCreator handleClick={this.handleClick} />
                </div>
            )
        }
        else if (this.state.view === 'form') {
            return (
                <div>
                    <EntryForm />
                </div>
            )
        }
    }
}

export default withRouter(EntryContainer);