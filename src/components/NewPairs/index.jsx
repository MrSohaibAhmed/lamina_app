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
        <div className=' container-fluid'>
        <NewpairTable/>
        </div>
        </>
    )

}
export default Newpairs


