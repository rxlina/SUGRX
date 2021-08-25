import React, { Component } from 'react';
import EntryContainer from './containers/entryContainer.jsx'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div><EntryContainer /></div>;
    }
}

export default App;