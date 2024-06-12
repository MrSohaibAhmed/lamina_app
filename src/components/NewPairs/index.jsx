import React from 'react'
import { useState, useEffect } from 'react'
import filterImg from "../../assets/pairtableImg/noun-filter-4651669 2.png"
import solIconImg from "../../assets/pairtableImg/Clip path group.png";
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar';
import NewpairTable from './NewPairTable';
import SwitchComp from '../../utilities/SwitchComp';
import DropdownComp from '../../utilities/DropdownComp';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import FilterDropdown from '../../utilities/FilterDropdownComp';

function Newpairs() {
    const dropdownItems = [
        { label: '1', href: '#' },
        { label: '2', href: '#' },
        { label: '3', href: '#' },
        { label: '4', href: '#' },
    ];
    return (
        <>
            <InternalNavbar />
            <div className=' container-fluid px-5'>
                <div className='d-flex justify-content-between py-5'>
                    <div>
                        <h4 className=' font-weight-bold'>NEW PAIRS</h4>
                        <p>New token pairs in the last 24-hours updated in real-time.</p>
                    </div>

                    <div className='d-flex align-content-center align-items-center'>

                        <div>
                            <SwitchComp label="Quick Buy" />
                        </div>

                        <div>
                            <DropdownComp
                                label="Decax"
                                items={dropdownItems}
                                imgSrc={filterImg} />
                        </div>
                        <div>
                        <FilterDropdown/>
                        </div>
                        <div style={{ width: '15%', padding: '7px 6px', borderRadius: '5px' }} className='d-flex border align-items-center'>
                            <img style={{ width: '10px', height: '10px' }} src={solIconImg} />
                            <input
                                className='bg-transparent border-0 w-100 text-center'
                                type='number'
                                placeholder='0.0'
                            />
                        </div>
                        <div>
                            <DropdownComp
                                label="SOL"
                                items={dropdownItems}
                                imgSrc={solIconImg} />
                        </div>
                    </div>
                </div>
                <NewpairTable />
                
            </div>
        </>
    )

}
export default Newpairs


