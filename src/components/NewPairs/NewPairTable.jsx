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
import crossImg from "../../assets/pairtableImg/x-mark.png"
import { useContext } from 'react';
import KeyContext from '../../context/walletContext';
import './newpair.css'
import { pairData, swapTokens } from '../hooks/useWallet';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import TryAgain from "../../assets/dashboard/icons8-reset-24.png"
function NewpairTable({ tableData, isChecked, inputValue }) {
    // debugger
    const navigate = useNavigate();
    const { setCoinsKey, setNoDetails, setSolBalance, solBalance } =
        useContext(KeyContext);
    const [data, setData] = useState([])
    useEffect(() => {
        setData(tableData)

    }, [tableData])
    const uniqueTableData = data.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.address === item.address
        ))
    );
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

        const res = await pairData(pairAddress);
        console.log(res?.data, "Response data is = >>>>>>>>>");
        setCoinsKey(res?.data);
        navigate("/dashboard");


    };
    const tokenInfo = (item) => {
        handleClick(item.address)

    }
    const handleQuickBuy = (item) => {
        // debugger
        // console.log("solona balance is =>>", solBalance);
        if (inputValue !== null && inputValue !== 0) {

            if (solBalance !== 0) {
                const value = {
                    address: localStorage.getItem("publicKey"),
                    amount: inputValue * 1000000000,
                    inputMint: "So11111111111111111111111111111111111111112",
                    outputMint: item?.base?.address,
                    slippageBps: 1000,
                    tip: 5000000,
                };
                const buyPromise = swapTokens(value);
                buyPromise
                    .then((result) => {
                        const transactionResult =
                            result?.data?.swapResponse?.transactionResult;
                        setBuyResult(transactionResult);
                        console.log("Buy Promise Result:", transactionResult);
                        const t = (
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() => copy(transactionResult)}
                            >
                                Your Transaction Is Sent . Click Here To Check your Transaction
                                Hash{" "}
                                <a href={transactionResult} target="blanked">
                                    <img width={20} src={arrowImg} />
                                </a>
                            </div>
                        );

                        // toast.success(`Buyed Successfully. Your Transaction Is Sent`, {
                        //   duration: 10000,
                        // });
                        toast.success(t, {
                            duration: 10000,
                        });
                    })
                    .catch((error) => {
                        console.error("Buy Promise Error:", error);
                        toast.error("Transaction Failed", {
                            duration: 5000
                        });
                    });
                const tryagain = (
                    <div>Click Here To Try Again
                        <img width={20} src={TryAgain} onClick={handleQuickBuy} />
                    </div>
                )

                toast.promise(buyPromise, {
                    loading: "Waiting For Transaction...",
                    success: "",
                    error: tryagain,
                });
            }
            else {
                toast.error("You Donot have Enough Sol Balance");
            }
        }
        else {
            console.error("No value selected");
            // noValueError();
            toast.error("Selected Amount is 0");
        }
    };
    const handleBuy = (e, item) => {
        e.stopPropagation();
        handleQuickBuy(item)
    };
    return (
        <>
            <div className="table-responsive def-table tableClassMainDiv">
                <table className="table tableClass newPairTable">
                    <thead className='tableHeader'>
                        <tr className=" text-white">
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">
                                Pair Info
                            </th>
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">Created <img src={arrowImg} width="14px" alt="" /></th>
                            {/* <th scope="col">Liquidity</th> */}
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">Initial Liquidity</th>
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">MKT App</th>
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">TXNS</th>
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">Volume</th>
                            <th style={{borderBottom:"1px solid #151530"}} scope="col">Audit Result</th>
                            {
                                isChecked ? <th scope="col">Actions</th> : null
                            }

                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {
                            uniqueTableData.map((item, index) =>
                                <tr  onClick={() => tokenInfo(item)} style={{borderColor:"#151530", backgroundColor: index % 2 === 0 ? "#0E0E26" : "#151530", cursor: "pointer" }} className=' text-white'>
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

                                                {item.freezeAuthority ? <img src={clockImg} /> : <img src={crossImg} />}
                                                <p>Freeze Auth <br />{item.freezeAuthority ? "Enabled" : "Disabled"} </p>
                                            </div>
                                            <div>
                                                <img src={clockImg} />
                                                <p>LP Burned <br /> Disabled</p>
                                            </div>
                                            <div>
                                                {
                                                    item?.top10HolderPercent * 100 > 15 ? <img src={clockImg} /> : <img src={crossImg} />
                                                }

                                                <p>Top 10 Holders <br /> {item.top10HolderPercent * 100 > 15 ? "Enabled " : "Disabled"}</p>
                                            </div>

                                        </div>
                                    </td>
                                    {
                                        isChecked ? <td className=' align-content-center'>
                                            <button className='btn-buy-quick' onClick={(e) => handleBuy(e, item)}>Quick Buy</button>
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


