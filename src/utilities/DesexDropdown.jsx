import React, { useState } from "react";
import filterImg from "../assets/pairtableImg/noun-filter-4651669 2.png"

const DesexDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    raydium: false,
    pumpFun: true,
    orca: false,
    meteora: true,
  });



  const checkBoxHandler = (event) => {
    const { id } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleChange = (setFunction) => (event) => {
    setFunction(event.target.value);
  };

  const resetHandler = () => {
   console.log("clicked reset handler");
  };

  const applyBtnHandler = () => {
    console.log("radyium" ,checkedItems.raydium);
    console.log("pumpFun" ,checkedItems.pumpFun);
    console.log("orca" ,checkedItems.orca);
    console.log("meteora" ,checkedItems.meteora);
    
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
      style={{border:"1px solid #303138"}}
        onClick={toggleMenu}
        className="btn text-white dropdown-toggle  py-2 mr-2"
        type="button"
        id="dropdownMenuButton"
        aria-expanded={isOpen}
      >
        <img className="mr-2" src={filterImg}/>
       Desex
      </button>

      {isOpen && (
        <div style={{ width:"150px" , backgroundColor:"#151530", border:"1px solid gray"}} className="dropdown-menu show text-white" aria-labelledby="dropdownMenuButton">
          <div style={{  borderBottom:"1px solid gray"}} className="p-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="raydium"
                onChange={checkBoxHandler}
                checked={checkedItems.raydium}
              />
              <label className="form-check-label" htmlFor="auditResult">
              Raydium
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="pumpFun"
                onChange={checkBoxHandler}
                checked={checkedItems.pumpFun}
              />
              <label className="form-check-label" htmlFor="social">
              Pump.fun
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="orca"
                onChange={checkBoxHandler}
                checked={checkedItems.orca}
              />
              <label className="form-check-label" htmlFor="sellLimit">
               Orca
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="meteora"
                onChange={checkBoxHandler}
                checked={checkedItems.meteora}
              />
              <label className="form-check-label" htmlFor="LiquidityAdded">
              Meteora
              </label>
            </div>
          </div>
       
          <div className="d-flex justify-content-between p-3">
            {/* <button className="btn btn-link" onClick={resetHandler}>
              Reset
            </button> */}
            <div>
              <button className=" rounded-3" onClick={applyBtnHandler}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesexDropdown;
