import React from 'react'

import '../css/Button.css';

const Button = ( { buttonText }) => (
    <button type="button" className="btn btn-sm buttonFormat">
        {buttonText}
    </button>
);

export default Button;