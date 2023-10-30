import * as React from 'react';

function Tomato() {
    return (
        <div className="tomato-container">
            <svg
                className="tomato"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
            >
                <circle cx="50" cy="50" r="40" fill="tomato" />
                <ellipse cx="45" cy="55" rx="15" ry="25" fill="green" />
                <ellipse cx="55" cy="55" rx="15" ry="25" fill="green" />
                <line x1="50" y1="60" x2="50" y2="70" stroke="green" strokeWidth="2" />
            </svg>
        </div>
    );
}

export default Tomato;