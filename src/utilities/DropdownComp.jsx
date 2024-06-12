import React from 'react';

const DropdownComp = ({ label, items, imgSrc }) => {
  return (
    <div className="btn-group border mx-2 rounded-3">
      <button 
        type="button" 
        className="btn dropdown-toggle text-white" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        
      >
        {imgSrc && <img src={imgSrc} alt="dropdown icon" />} {label}
      </button>
      <ul className="dropdown-menu text-white">
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item text-white" href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default DropdownComp;
