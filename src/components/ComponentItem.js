import React from 'react';

function ComponentItem({ component }) {
    const isOperational = component.status === 'operational';

    return (
        <div
            className={`component-item ${isOperational ? 'operational' : 'non-operational'}`}
        >
            <h3>{component.name}</h3>
            <p>Status: {component.status}</p>
        </div>
    );
}

export default ComponentItem;
