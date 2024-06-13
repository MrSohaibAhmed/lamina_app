
import React, { useState } from 'react';

const DropdownComp = ({ label, items, imgSrc, DropdownContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="btn-group border mx-2 rounded-3">
            <button
                type="button"
                className="btn dropdown-toggle text-white"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                {imgSrc && <img src={imgSrc} alt="dropdown icon" />} {label}
            </button>
            <ul style={{backgroundColor:"#151530" , width:"90px"}} className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {items && items.length > 0 ? (
                    items.map((item, index) => (
                        <li className='text-white' key={index}>
                            <a className="dropdown-item text-white" href={item.href}>{item.label}</a>
                        </li>
                    ))
                ) : (
                    <li>
                        <div className="dropdown-item">{DropdownContent}</div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default DropdownComp;
