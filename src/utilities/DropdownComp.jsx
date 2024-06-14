
import React, { useState } from 'react';
import "./Utilities.css"

const DropdownComp = ({ label, items, imgSrc, DropdownContent,onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleItemClick = (item) => {
        if (onClick) {
            onClick(item.label);
        }
    };

    return (
        <div className="btn-group  mx-2 rounded-3">
            <button
            style={{border:"1px solid #303138"}}
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
                        <li className='text-white dropDownCompCls' key={index}>
                            <a className="dropdown-item text-white" href={item.href} onClick={() => handleItemClick(item)}>{item.label}</a>
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
