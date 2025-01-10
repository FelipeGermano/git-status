import React from 'react';

function Header({ onFetchStatus }) {
    return (
        <header className="header">
            <h1>GitHub Status</h1>
            <button onClick={onFetchStatus}>Obter Status</button>
        </header>
    );
}

export default Header;