import React from 'react'
import { useState, useEffect } from 'react'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'
import SettingsIcon from "../../assets/img/settings.png"
import InfoIcon from "../../assets/img/info.png"
import "../Dashboard/Dashboard.css"

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
                        <div className='row'>
                            <div className='col-3'></div>
                            <div className='col-3 gradient-text'><p>Sending Method<img className='ml-2' src={InfoIcon} /></p></div>
                            <div className='col-3'><p className='font-twelve items-center'>Mev On/Off</p></div>
                            <div className='col-3'></div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Settings