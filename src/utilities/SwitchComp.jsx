import React from 'react'

const SwitchComp = ({label}) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <span className="switch-lable ms-1">{label}</span>
        </div>
    )
}

export default SwitchComp