//Create a button for logging new entries here
import React from 'react';

const entryCreator = props => {
    return (
        <div className="entryCreateBox">
            <form>
                <input type="number"/>
                <button type="submit" onClick={props.handleClick}>Submit</button>
            </form>
        </div>
    );
}

export default entryCreator;