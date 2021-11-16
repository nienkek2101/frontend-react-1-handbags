import React from 'react';

function Button({ type, buttonName, buttonMessage, isDisabled }) {
    return (
        <button
            type={type}
            disabled={isDisabled}
            onClick={() => console.log(buttonMessage) }
        >
            {buttonName}
        </button>
    );
}

export default Button;