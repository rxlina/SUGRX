import React from 'react';

const Entry = props => {
    const { entryData } = props;
    console.log(entryData);
    return (
        <div>
            <div>{entryData.bloodGlucose}</div>
            <div>{entryData.createdAt}</div>
        </div>
    )
}

export default Entry;