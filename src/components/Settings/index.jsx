import React from 'react'
import { useState, useEffect } from 'react'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'
import SettingsIcon from "../../assets/img/settings.png"
import InfoIcon from "../../assets/img/info.png"
import "../Dashboard/Dashboard.css"
import SwitchComp from '../../utilities/SwitchComp'
import solIconImg from "../../assets/dashboard/sol-icon.png";
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png'
import SettingLeft from './SettingLeft'
import SettingRight from './SettingRight'


function Settings() {
    return (
        <>
            <InternalNavbar />

            <div className='container-fluid bg-class  p-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-6'>

                                <h3 className=''> <img className='mr-1' src={SettingsIcon} />SETTINGS</h3>
                                <p className='ml-4 font-twelve'>Sed ut perspiciatis unde omnis iste natus error sit </p>
                            </div>
                            <div className='col-lg-6'>
                                <p className='gradient-text m-0 mb-2'>TOPG TRADING</p>
                                <p className='font-twelve'>9W8WwWWAMT18s2L6Rg3ERW6dYN6vFrTkj5gn3emnLCkJ</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 '>
                        <div className='row mt-4'>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-3 gradient-text'><p>Sending Method<img className='ml-2' src={InfoIcon} /></p></div>
                            <div className='col-lg-3 font-twelve d-flex justify-content-evenly mt-2'><p className=''>Mev On/Off</p> <SwitchComp /></div>
                            <div className='col-lg-3 font-twelve mt-2'><p>Fast/Secure</p></div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid py-5'>
                    <div className='row d-flex justify-content-evenly align-items-stretch'>
                        <div className='col-lg-9 col-md-12 col-sm-12 d-flex flex-column'>
                       <div className='flex-grow-1'>
                       <SettingLeft/>
                       </div>
                        
                        
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 d-flex flex-column'>
                        <div className='flex-grow-1 SettingRightClass rounded-custom'>
                            <SettingRight/>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>

        </>
    )
}

export default Settings