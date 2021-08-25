import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryDisplay from '../components/entryDisplay.jsx';
import EntryCreator from '../components/entryCreator.jsx';

class EntryContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log('hi')
        return;
    }

    render() {
        return(
            <div>
                <EntryDisplay entryList={[]}/>
                <EntryCreator handleClick={this.handleClick} />
            </div>
        )
    }
}

export default EntryContainer;