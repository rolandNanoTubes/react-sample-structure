import React from 'react';

export default ({ message, hideSampleMessage }) => (
    <div className="sample-message">
        <p> {message} </p>
        <button type="button" className="sample-button" onClick={hideSampleMessage}> Hide </button>
    </div>
);
