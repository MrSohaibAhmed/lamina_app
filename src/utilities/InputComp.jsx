
import React from 'react';
// import PropTypes from 'prop-types';
// import solIconImg from "../../assets/dashboard/sol-icon.png";

const InputComp = ({ value, onChange, placeholder, ariaLabel, ariaDescribedBy ,image }) => {
    return (
        <div className="input-group mx-2 my-4">
            <span className="input-group-text bg-transparent border border-right-0" id={ariaDescribedBy}>
                <img src={image} width="14px" alt="Solana Icon" />
            </span>
            <input
                type="number"
                value={value}
                onChange={onChange}
                className="form-control bg-transparent border border-left-0 text-light"
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedBy}
            />
        </div>
    );
};

export default InputComp;
