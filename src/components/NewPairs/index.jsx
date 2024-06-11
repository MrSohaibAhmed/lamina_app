import React from 'react'
import { useState, useEffect } from 'react'
import arrowImg from "../../assets/dashboard/arrows.png";
import solIconImg from "../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../assets/dashboard/transaction-table-icon.png";
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar';
import NewpairTable from './NewPairTable';
function Newpairs() {
    return (
        <>
        <InternalNavbar/>
        <div className=' container-fluid px-5'>
            <div className=' py-5'>
                <div>
                    <h4 className=' font-weight-bold'>NEW PAIRS</h4>
                    <p>New token pairs in the last 24-hours updated in real-time.</p>
                </div>
                <div></div>
            </div>
        <NewpairTable/>
        </div>
        </>
    )

}
export default Newpairs


