import React from 'react'
import { useState, useEffect } from 'react'
import arrowImg from "../../assets/dashboard/arrows.png";
import solIconImg from "../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../assets/dashboard/transaction-table-icon.png";
import pairImg from '../../assets/pairtableImg/Ellipse 1020.png'
import twiterImg from '../../assets/pairtableImg/twitter 1.png'
import telegramImg from '../../assets/pairtableImg/telegram 1.png'
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png'
import Cross from '../../assets/img/cross';
import { useContext } from 'react';
import KeyContext from '../../context/walletContext';
import './newpair.css'
import { pairData } from '../hooks/useWallet';
import { useNavigate } from 'react-router-dom';
function NewpairTable({ tableData, isChecked, inputValue }) {
    const navigate = useNavigate();
    const { setCoinsKey, setNoDetails, setSolBalance, solBalance } =
        useContext(KeyContext);
    const [data, setData] = useState([])
    useEffect(() => {
        setData(tableData)

    }, [tableData])
    function shortenAddress(address) {

        // Extract the first 4 characters
        const firstPart = address.substring(0, 4);
        // Extract the last 3 characters
        const lastPart = address.substring(address.length - 3);
        // Join the parts with ellipses in between
        return `${firstPart}...${lastPart}`;
    }

    function convertTimestampToReadable(timestamp) {
        const date = new Date(timestamp);

        // Extracting date components
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);

        // Creating a readable format
        const readableFormat = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        return readableFormat;
    }
    const handleClick = async (pairAddress) => {
        // ////debugger
        // Check if the clicked pair's pairAddress exists in the data
        // const foundPair = data.find((pair) => pair.pairaddress === pairAddress);
        // if (foundPair) {
        // setNoDetails(false);
        // setPairAddress(pairAddress);
        // console.log(foundPair);
        const res = await pairData(pairAddress);
        console.log(res?.data, "Response data is = >>>>>>>>>");
        setCoinsKey(res?.data);
        navigate("/dashboard");

        // } else {
        // setNoDetails(true);
        // alert("Sorry We Are Not Dealing with this Pair.");
        // }
    };
    const tokenInfo = (item) => {
        handleClick(item.address)

    }

    return (
        <>
            <div className="table-responsive def-table tableClassMainDiv">
                <table className="table tableClass">
                    <thead className='tableHeader'>
                        <tr className=" text-white">
                            <th scope="col">
                                Pair Info
                            </th>
                            <th scope="col">Created <img src={arrowImg} width="14px" alt="" /></th>
                            {/* <th scope="col">Liquidity</th> */}
                            <th scope="col">Initial Liquidity</th>
                            <th scope="col">MKT App</th>
                            <th scope="col">TXNS</th>
                            <th scope="col">Volume</th>
                            <th scope="col">Audit Result</th>
                            {
                                isChecked ? <th scope="col">Actions</th> : null
                            }

                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {
                            data.map((item, index) =>
                                <tr onClick={() => tokenInfo(item)} style={{ backgroundColor: index % 2 === 0 ? "#0E0E26" : "#151530", cursor: "pointer" }} className=' text-white'>
                                    <td>
                                        <div className='d-flex'>
                                            <div><img style={{ borderRadius: "20px" }} src={item?.base?.icon} height={40} width={40} /></div>
                                            <div className=' ml-2'>
                                                <h6 style={{ margin: "3px" }}>{item?.base?.symbol}/{item?.quote?.symbol}</h6>
                                                <p style={{ margin: "3px" }}>{shortenAddress(item?.address)}</p>
                                                <div className=' pt-2'>
                                                    <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={twiterImg} /></span>
                                                    <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={telegramImg} /></span>
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                    <td className=' align-content-center'>
                                        <img src={clockImg} /> {convertTimestampToReadable(item?.timestamp)}
                                    </td>
                                    {/* <td className=' align-content-center'>
                                        <img src={solIconImg} /> 63.61088/ $10k
                                    </td> */}
                                    <td className=' align-content-center'>
                                        <img src={solIconImg} />{item?.liquidity.toFixed(4)}
                                    </td>
                                    <td className=' align-content-center my-auto'>
                                        <div>
                                            <p className=' mb-2'>${(item?.marketCap / 1000).toFixed(4)}k</p>
                                            {/* <p style={{ color: "#1ECBE3" }} className=' mb-0'>${lamportsToSol(item?.price)}</p> */}
                                        </div>
                                    </td>
                                    <td className=' align-content-center'>
                                        <div>
                                            <p className=' mb-2'>{item?.trade24h ? item?.trade24h : 0}</p>
                                            <p className=' mb-0'><span className=' text-success b'>{item?.buy24h ? item.buy24h : 0}</span> / <span className=' text-danger'>{item?.sell24h ? item.sell24h : 0}</span></p>

                                        </div>
                                    </td>
                                    <td className=' align-content-center'>${item?.volume24h ? item?.volume24h : 0}</td>
                                    <td className=' align-content-center'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={clockImg} />
                                                <p>Mint Auth <br /> Disabled</p>
                                            </div>
                                            <div>
                                                <img src={clockImg} />
                                                <p>Freeze Auth <br />{item.freezeAuthority ? "Enabled" : "Disabled"} </p>
                                            </div>
                                            <div>
                                                <img src={clockImg} />
                                                <p>LP Burned <br /> Disabled</p>
                                            </div>
                                            <div>
                                                {
                                                    item?.top10HolderPercent * 100 > 15 ? <img src={clockImg} /> : null
                                                }

                                                <p>Top 10 Holders <br /> {item.top10HolderPercent * 100 > 15 ? "Enabled " : "Disabled"}</p>
                                            </div>

                                        </div>
                                    </td>
                                    {
                                        isChecked ? <td className=' align-content-center'>
                                            <button className='btn-buy-quick'>Quick Buy</button>
                                        </td> : null
                                    }

                                </tr>)
                        }



                    </tbody>
                </table>

            </div>

        </>
    )

}
export default NewpairTable


