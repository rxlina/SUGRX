import React from 'react';

const Entry = props => {
    const { entryData } = props;
    console.log(entryData);
    return (
        <div className="entryBox">
            <div>{entryData.bloodGlucose}{entryData.fasting}</div>
            <div>{entryData.createdAt}</div>
        </div>
    )
}

export default Entry;