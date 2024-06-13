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
import { getNewPairs } from '../hooks/useWallet';
import '../Dashboard/Dashboard.css'
import toast, { Toaster } from "react-hot-toast";
import DesexDropdown from '../../utilities/DesexDropdown';
function Newpairs() {
    const [isChecked, setIsChecked] = useState(false);
    const [inputValue, setInputValue] = useState(0.1);
    const [loading, setLoading] = useState(true);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    };
    const [tableData, setTableData] = useState([]);
    const dropdownItems = [
        { label: '0.25', href: '#' },
        { label: '0.5', href: '#' },
        { label: '1', href: '#' },
        { label: '2', href: '#' }
    ];
    const fetchTokenData = async (tokenAddress) => {
        const options = {
            method: 'GET',
            headers: { 'X-API-KEY': '1a6f67ecb3d540b984f8fc694cfb364c' }
        };
        // debugger
        const response = await fetch(`https://public-api.birdeye.so/defi/token_overview?address=${tokenAddress}`, options);
        const data = await response.json();
        // debugger
        return data.data;
    };
    const fetchData = async () => {
        try {
            const response = await getNewPairs();
            const newData = response?.data;

            // Filter out entries with addresses already present in tableData
            const uniqueEntries = newData.filter(newEntry => !tableData.some(prevEntry => prevEntry.address === newEntry.address));

            // Fetch token data for each unique entry and update tableData
            const updatedDataArray = await Promise.all(uniqueEntries.map(async (item) => {
                // debugger
                // debugger
                const tokenData = await fetchTokenData(item.base.address);
                console.log(tokenData, "I am token Data")
                // debugger
                if (tokenData) {
                    // debugger
                    return {
                        ...item,
                        trade24h: tokenData.trade24h,
                        sell24h: tokenData.sell24h,
                        buy24h: tokenData.buy24h,
                        marketCap: tokenData.mc,
                    };
                } else {
                    // If API call fails or doesn't return data, keep original values
                    return item;
                }
            }));

            // Update tableData with the updatedDataArray
            setTableData(prevData => {
                // Concatenate unique entries with previous data
                return [...updatedDataArray, ...prevData];
            });

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(); // Initial fetch
        const intervalId = setInterval(fetchData, 20000); // Fetch every 5 seconds
        return () => clearInterval(intervalId); // Cleanup function
    }, []);
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            <InternalNavbar />
            <div className=' container-fluid px-5 bg-class'>
                <div className='d-flex justify-content-between py-5'>
                    <div>
                        <h4 className=' font-weight-bold'>NEW PAIRS</h4>
                        <p>New token pairs in the last 24-hours updated in real-time.</p>
                    </div>

                    <div className='d-flex align-content-center align-items-center justify-content-end'>

                        <div className='mr-2'>
                            <SwitchComp label="Quick Buy" isChecked={isChecked} onToggle={toggleSwitch} />
                        </div>

                        <div>
                            {/* <DropdownComp
                                label="Decax"
                                items={dropdownItems}
                                imgSrc={filterImg} /> */}
                                <DesexDropdown/>
                        </div>
                        <div>
                            <FilterDropdown />
                        </div>
                        <div style={{ width: '15%', padding: '7px 6px', borderRadius: '5px' ,border:"1px solid #303138" }} className='d-flex align-items-center'>
                            <img style={{ width: '10px', height: '10px' }} src={solIconImg} />
                            <input
                                className='bg-transparent w-100 border-0 text-center text-white'
                                type='number'
                                placeholder='0.0'
                                value={inputValue}
                                onChange={handleInputChange}
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
                {loading ? (
                    <p>Loading...</p>
                ) : tableData.length > 0 ? (
                    <NewpairTable tableData={tableData} isChecked={isChecked} inputValue={inputValue} />
                ) : (
                    <p>No data found</p>
                )}


            </div>
        </>
    )

}
export default Newpairs


