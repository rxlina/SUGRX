//Create a button for logging new entries here
import React from 'react';

const entryCreator = props => {
    return (
        <div className="createNewEntryButton">
            <button onClick={props.handleClick}>Create New Entry</button>
        </div>
    );
}

export default entryCreator;