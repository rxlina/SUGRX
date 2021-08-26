import React from 'react';
import Entry from './entry.jsx';

const EntryDisplay = props => {
    const { entryList } = props;
    const newEntryList = [];
    for (let i = 0; i < entryList.length; i += 1) {
        newEntryList.push(<Entry entryData={entryList[i]}/>);
    };
    return (
        <div className="displayBox">
            <div>{newEntryList}</div>
        </div>
    );
}

export default EntryDisplay;