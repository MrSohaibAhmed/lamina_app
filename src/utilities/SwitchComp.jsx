import React from 'react';

const SwitchComp = ({ label, isChecked, onToggle }) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={onToggle} />
                <span className="slider round"></span>
            </label>
            <span className="switch-label ms-1">{label}</span>
        </div>
    );
};

export default SwitchComp;