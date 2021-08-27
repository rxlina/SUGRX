import React from 'react';

const Entry = props => {
    const { entryData } = props;
    const date = new Date(entryData.createdAt);
    const newDate = date.toLocaleDateString();


    return (
        <div className="entryBox">
            <div>{entryData.bloodGlucose}{entryData.fasting}</div>
            {/* <div>{entryData.createdAt}</div> */}
            <div>{newDate}</div>
        </div>
    )
}

export default Entry;