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
        { label: '1', href: '#' },
        { label: '2', href: '#' },
        { label: '3', href: '#' },
        { label: '4', href: '#' },
    ];
    const fetchData = async () => {
        try {
            const response = await getNewPairs();
            const newData = response?.data;

            setTableData(prevData => {
                // Concatenate new data with previous data
                return [...newData, ...prevData];
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(); // Initial fetch
        const intervalId = setInterval(fetchData, 5000); // Fetch every 5 seconds
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

                    <div className='d-flex align-content-center align-items-center'>

                        <div>
                            <SwitchComp label="Quick Buy" isChecked={isChecked} onToggle={toggleSwitch} />
                        </div>

                        <div>
                            <DropdownComp
                                label="Decax"
                                items={dropdownItems}
                                imgSrc={filterImg} />
                        </div>
                        <div>
                            <FilterDropdown />
                        </div>
                        <div style={{ width: '15%', padding: '7px 6px', borderRadius: '5px' }} className='d-flex border align-items-center'>
                            <img style={{ width: '10px', height: '10px' }} src={solIconImg} />
                            <input
                                className='bg-transparent border-0 w-100 text-center text-white'
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


