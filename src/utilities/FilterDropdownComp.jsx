import React, { useState } from "react";
import filterImg from "../assets/pairtableImg/noun-filter-4651669 2.png"

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    auditResult: false,
    social: false,
    sellLimit: false,
    LiquidityAdded: false,
  });

  const [liquidityFrom, setLiquidityFrom] = useState('');
  const [liquidityTo, setLiquidityTo] = useState('');
  const [volumeFrom, setVolumeFrom] = useState('');
  const [volumeTo, setVolumeTo] = useState('');
  const [marketCapFrom, setMarketCapFrom] = useState('');
  const [marketCapTo, setMarketCapTo] = useState('');
  const [txnsFrom, setTxnsFrom] = useState('');
  const [txnsTo, setTxnsTo] = useState('');
  const [buysFrom, setBuysFrom] = useState('');
  const [buysTo, setBuysTo] = useState('');
  const [sellsFrom, setSellsFrom] = useState('');
  const [sellsTo, setSellsTo] = useState('');

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
    setBuysFrom('');
    setBuysTo('');
    setTxnsFrom('');
    setTxnsTo('');
    setLiquidityFrom('');
    setLiquidityTo('');
    setMarketCapFrom('');
    setMarketCapTo('');
    setVolumeFrom('');
    setVolumeTo('');
    setSellsFrom('');
    setSellsTo('');
  };

  const applyBtnHandler = () => {
    console.log("volume from is ", volumeFrom);
    console.log("volume to is ", volumeTo);
    console.log("txnx is ", txnsFrom);
    console.log("txns to is ", txnsTo);
    console.log("sell is ", sellsFrom);
    console.log("sell to is ", sellsTo);
    console.log("liquidity is ", liquidityFrom);
    console.log("liquidity to is ", liquidityTo);
    console.log("MKt is ", marketCapFrom);
    console.log("Mkt to is ", marketCapTo);
    console.log("buy is ", buysFrom);
    console.log("buy to is ", buysTo);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
      style={{border:"1px solid #303138"}}
        onClick={toggleMenu}
        className="btn text-white dropdown-toggle  py-2 mr-2 filterBtn"
        type="button"
        id="dropdownMenuButton"
        aria-expanded={isOpen}
      >
        <img className="mr-2" src={filterImg}/>
        Filter
      </button>

      {isOpen && (
        <div style={{ width:"300px" , backgroundColor:"#151530" ,height: '70vh', overflowY: 'auto' }} className="dropdown-menu show text-white" aria-labelledby="dropdownMenuButton">
          <div className="p-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="auditResult"
                onChange={checkBoxHandler}
                checked={checkedItems.auditResult}
              />
              <label className="form-check-label" htmlFor="auditResult">
                Audit results passed
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="social"
                onChange={checkBoxHandler}
                checked={checkedItems.social}
              />
              <label className="form-check-label" htmlFor="social">
                With at least 1 social
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="sellLimit"
                onChange={checkBoxHandler}
                checked={checkedItems.sellLimit}
              />
              <label className="form-check-label" htmlFor="sellLimit">
                Avoid low sell limit
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="LiquidityAdded"
                onChange={checkBoxHandler}
                checked={checkedItems.LiquidityAdded}
              />
              <label className="form-check-label" htmlFor="LiquidityAdded">
                Liquidity Added
              </label>
            </div>
          </div>
          <div className="p-3">
            <p>By Current Liquidity($)</p>
            <div className="d-flex">
              <input
                onChange={handleChange(setLiquidityFrom)}
                value={liquidityFrom}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="From"
              />
              <span className="mx-2">to</span>
              <input
                onChange={handleChange(setLiquidityTo)}
                value={liquidityTo}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="To"
              />
            </div>
          </div>
          <div className="p-3">
            <p>By Volume</p>
            <div className="d-flex">
              <input
                onChange={handleChange(setVolumeFrom)}
                value={volumeFrom}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="From"
              />
              <span className="mx-2">to</span>
              <input
                onChange={handleChange(setVolumeTo)}
                value={volumeTo}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="To"
              />
            </div>
          </div>
          <div className="p-3">
            <p>By MKT Cap</p>
            <div className="d-flex">
              <input
                onChange={handleChange(setMarketCapFrom)}
                value={marketCapFrom}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="From"
              />
              <span className="mx-2">to</span>
              <input
                onChange={handleChange(setMarketCapTo)}
                value={marketCapTo}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="To"
              />
            </div>
          </div>
          <div className="p-3">
            <p>By TXNS</p>
            <div className="d-flex">
              <input
                onChange={handleChange(setTxnsFrom)}
                value={txnsFrom}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="From"
              />
              <span className="mx-2">to</span>
              <input
                onChange={handleChange(setTxnsTo)}
                value={txnsTo}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="To"
              />
            </div>
          </div>
          <div className="p-3">
            <p>By Buys</p>
            <div className="d-flex">
              <input
                onChange={handleChange(setBuysFrom)}
                value={buysFrom}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="From"
              />
              <span className="mx-2">to</span>
              <input
                onChange={handleChange(setBuysTo)}
                value={buysTo}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="To"
              />
            </div>
          </div>
          <div className="p-3">
            <p>By Sells</p>
            <div className="d-flex">
              <input
                onChange={handleChange(setSellsFrom)}
                value={sellsFrom}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="From"
              />
              <span className="mx-2">to</span>
              <input
                onChange={handleChange(setSellsTo)}
                value={sellsTo}
                className="form-control form-control-sm bg-transparent text-white"
                placeholder="To"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between p-3">
            <button className="btn btn-link" onClick={resetHandler}>
              Reset
            </button>
            <div>
              <button className=" rounded-3" onclick={applyBtnHandler}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
