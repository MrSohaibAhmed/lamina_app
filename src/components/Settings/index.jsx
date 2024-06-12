import React from 'react'
import { useState, useEffect } from 'react'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'
import SettingsIcon from "../../assets/img/settings.png"
import InfoIcon from "../../assets/img/info.png"
import "../Dashboard/Dashboard.css"
import SwitchComp from '../../utilities/SwitchComp'
import solIconImg from "../../assets/dashboard/sol-icon.png";


function Settings() {
    return (
        <>
            <InternalNavbar />

            <div className='container-fluid p-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>

                                <h3 className=''> <img className='mr-1' src={SettingsIcon} />SETTINGS</h3>
                                <p className='ml-4 font-twelve'>Sed ut perspiciatis unde omnis iste natus error sit </p>
                            </div>
                            <div className='col-6'>
                                <p className='gradient-text m-0 mb-2'>PHOTON TRADING WALLET</p>
                                <p className='font-twelve'>9W8WwWWAMT18s2L6Rg3ERW6dYN6vFrTkj5gn3emnLCkJ</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row mt-4'>
                            <div className='col-3'></div>
                            <div className='col-3 gradient-text'><p>Sending Method<img className='ml-2' src={InfoIcon} /></p></div>
                            <div className='col-3 font-twelve d-flex justify-content-evenly mt-2'><p className=''>Mev On/Off</p> <SwitchComp /></div>
                            <div className='col-3 font-twelve mt-2'><p>Fast/Secure</p></div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='col-lg-9 col-md-12 col-sm-12'>
                            <div className='row'>
                                <div className='col-6 settings-card'><p className=''>SLIPPACE</p>
                                    <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p></div>
                                <div className='col-6 settings-card-two'><p className=''>SLIPPACE</p>
                                    <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p></div>
                                <div className='col-6 settings-card-two'><p className=''>SLIPPACE</p>
                                    <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p></div>
                                <div className='col-6 settings-card'><p className=''>SLIPPACE</p>
                                    <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p></div>
                                <div className='col-12 settings-card'>
                                    <p>Customize</p>
                                    <p className='font-twelve opacity'>Customize your Quick Buy buttons with your own preset amounts.</p>
                                    <div className='d-flex justify-content-evenely'>
                                        <div className="input-group mx-2 my-4">
                                            <span
                                                className="input-group-text bg-transparent border border-right-0"
                                                id="basic-addon1"
                                            >
                                                <img src={solIconImg} width="14px" alt="" />
                                            </span>
                                            <input
                                                type="number"
                                                // value={inputAmountVal}
                                                value={0.5}
                                                //   onChange={changeAmountHandler}
                                                className="form-control bg-transparent border border-left-0 text-light"
                                                placeholder="Amount to buy in SOL"
                                                aria-label="Amount"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <div className="input-group mx-2 my-4">
                                            <span
                                                className="input-group-text bg-transparent border border-right-0"
                                                id="basic-addon1"
                                            >
                                                <img src={solIconImg} width="14px" alt="" />
                                            </span>
                                            <input
                                                type="number"
                                                // value={inputAmountVal}
                                                value={0.5}
                                                //   onChange={changeAmountHandler}
                                                className="form-control bg-transparent border border-left-0 text-light"
                                                placeholder="Amount to buy in SOL"
                                                aria-label="Amount"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>  <div className="input-group mx-2 my-4">
                                            <span
                                                className="input-group-text bg-transparent border border-right-0"
                                                id="basic-addon1"
                                            >
                                                <img src={solIconImg} width="14px" alt="" />
                                            </span>
                                            <input
                                                type="number"
                                                // value={inputAmountVal}
                                                value={0.5}
                                                //   onChange={changeAmountHandler}
                                                className="form-control bg-transparent border border-left-0 text-light"
                                                placeholder="Amount to buy in SOL"
                                                aria-label="Amount"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>  <div className="input-group mx-2 my-4">
                                            <span
                                                className="input-group-text bg-transparent border border-right-0"
                                                id="basic-addon1"
                                            >
                                                <img src={solIconImg} width="14px" alt="" />
                                            </span>
                                            <input
                                                type="number"
                                                // value={inputAmountVal}
                                                value={0.5}
                                                //   onChange={changeAmountHandler}
                                                className="form-control bg-transparent border border-left-0 text-light"
                                                placeholder="Amount to buy in SOL"
                                                aria-label="Amount"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>  <div className="input-group mx-2 my-4">
                                            <span
                                                className="input-group-text bg-transparent border border-right-0"
                                                id="basic-addon1"
                                            >
                                                <img src={solIconImg} width="14px" alt="" />
                                            </span>
                                            <input
                                                type="number"
                                                // value={inputAmountVal}
                                                value={0.5}
                                                //   onChange={changeAmountHandler}
                                                className="form-control bg-transparent border border-left-0 text-light"
                                                placeholder="Amount to buy in SOL"
                                                aria-label="Amount"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <div className='right-settings-card p-5'>
                                <h3 className='mb-4 '>What is Slippage?</h3>
                                <p className='font-ten'>Suppose you wanted to spend 1 sol to buy 10 $MOON tokens, and you have your slippage set to 10%. You place your order, and when it's confirmed, you see that instead of 10 $MOON tokens, you only received 9 $MOON tokens.I</p>
                                <p className='font-ten'>Suppose you wanted to spend 1 sol to buy 10 $MOON tokens, and you have your slippage set to 10%. You place your order, and when it's confirmed, you see that instead of 10 $MOON tokens, you only received 9 $MOON tokens.I</p>
                                <p className='font-ten'>Suppose you wanted to spend 1 sol to buy 10 $MOON tokens, and you have your slippage set to 10%. You place your order, and when it's confirmed, you see that instead of 10 $MOON tokens, you only received 9 $MOON tokens.I</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Settings