import React from 'react';

export default ({ message, hideSampleMessage, fullName }) => (
    <div className="sample-message">
        <p> {message} </p>
        <p> API response for random name: {fullName} </p>
        <button type="button" className="sample-button" onClick={hideSampleMessage}> Hide </button>
    </div>
);
