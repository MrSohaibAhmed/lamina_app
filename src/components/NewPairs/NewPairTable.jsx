import React from 'react'
import { useState, useEffect } from 'react'
import arrowImg from "../../assets/dashboard/arrows.png";
import solIconImg from "../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../assets/dashboard/transaction-table-icon.png";
import pairImg from '../../assets/pairtableImg/Ellipse 1020.png'
import twiterImg from '../../assets/pairtableImg/twitter 1.png'
import telegramImg from '../../assets/pairtableImg/telegram 1.png'
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png'
import infoImg from '../../assets/pairtableImg/noun-info-4520370 2.png'
import TickImg from "../../assets/pairtableImg/noun-tick-1611443 1.png"
import Cross from '../../assets/img/cross';
import copyIcon from "../../assets/pairtableImg/svgexport-23.png"
import crossImg from "../../assets/pairtableImg/x-mark.png"
import { useContext } from 'react';
import KeyContext from '../../context/walletContext';
import './newpair.css'
import { pairData, swapTokens } from '../hooks/useWallet';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import TryAgain from "../../assets/dashboard/icons8-reset-24.png"


function NewpairTable({ tableData, isChecked, inputValue }) {

    const [activeBtn, setActiveBtn] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalItems = tableData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);



    // const [activeBtn, setActiveBtn] = useState({
    //     btn1: true,
    //     btn2: false,
    //     btn3: false,
    //     btn4: false,
    //     btn5: false,
    // });

    const handleActiveBtn = (index) => {
        setActiveBtn(index);
    };




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
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActiveBtn(pageNumber);
    };
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = uniqueTableData.slice(firstIndex, lastIndex);
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
        // debugger
        // //debugger
        setCoinsKey([])

        const res = await pairData(pairAddress);
        // debugger
        if (res.data.pairs !== null) {
            // debugger
            setCoinsKey(res?.data);
            navigate("/dashboard");

        } else {
            toast.success("Try clicking this Pair a little while later")

        }


    };
    const tokenInfo = (item) => {
        // //debugger
        handleClick(item.address)

    }
    const handleQuickBuy = (item) => {
        // //debugger
        // console.log("solona balance is =>>", solBalance);
        if (inputValue !== null && inputValue !== 0) {

            if (solBalance !== 0) {
                const value = {
                    address: localStorage.getItem("publicKey"),
                    amount: inputValue * 1000000000,
                    inputMint: "So11111111111111111111111111111111111111112",
                    outputMint: item?.base?.address,
                    slippageBps: 1000,
                    tip: 500000,
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
    const handleCopy = (e, item) => {
        e.stopPropagation();
        navigator.clipboard
            .writeText(item.address)
            .then(() => {
                toast.success("Successfully copied Pair Address!");
            })
            .catch((error) => console.error("Error copying baseToken:", error));

    };
    return (
        <>
            <div className="table-responsive def-table tableClassMainDiv">
                <table className="table tableClass newPairTable">
                    <thead className='tableHeader'>
                        <tr className=" text-white">
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530", paddingLeft: "20px" }} scope="col">
                                Pair Info
                            </th>
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">Created <img src={arrowImg} width="14px" alt="" /></th>
                            {/* <th scope="col">Liquidity</th> */}
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">Initial Liquidity</th>
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">MKT Cap <img src={infoImg} /></th>
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">TXN</th>
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">Volume</th>
                            <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">Audit Results</th>
                            {
                                isChecked ? <th style={{ borderBottom: "1px solid #151530", borderTop: "1px solid #151530" }} scope="col">Action</th> : null
                            }

                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {
                            currentItems.map((item, index) =>
                                <tr onClick={() => tokenInfo(item)} style={{ borderColor: "#151530", backgroundColor: index % 2 === 0 ? "#0E0E26" : "#151530", cursor: "pointer" }} className=' text-white'>
                                    <td style={{ paddingLeft: "20px" }}>
                                        <div className='d-flex'>
                                            <div><img style={{ borderRadius: "20px" }} src={item?.base?.icon} height={40} width={40} /></div>
                                            <div className=' ml-2'>
                                                <h6 style={{ margin: "3px" }}>{item?.base?.symbol}/{item?.quote?.symbol}</h6>
                                                <p style={{ margin: "3px" }}>{shortenAddress(item?.address)} <img src={copyIcon} onClick={(e) => handleCopy(e, item)} /></p>
                                                {/* <div className=' pt-2'>
                                                    <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={twiterImg} /></span>
                                                    <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={telegramImg} /></span>
                                                </div> */}
                                            </div>
                                        </div>

                                    </td>
                                    <td className=' align-content-center'>
                                        <img src={clockImg} /> {convertTimestampToReadable(item?.timestamp)}
                                    </td>

                                    <td className=' align-content-center'>
                                        <img height={18} src={solIconImg} />{item?.liquidity.toFixed(4)}
                                    </td>
                                    <td className=' align-content-center my-auto'>
                                        <div>
                                            <p className=' mb-2'>{item.marketCap ? (item.marketCap / 1000).toFixed(4) + 'k' : 'N/A'}</p>


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
                                                <img src={TickImg} />
                                                <p>Mint Auth <br /> Disabled</p>
                                            </div>
                                            <div>

                                                {item.freezeAuthority ? <img src={TickImg} /> : <img src={crossImg} />}
                                                <p>Freeze Auth <br />{item.freezeAuthority ? "Enabled" : "Disabled"} </p>
                                            </div>
                                            <div>
                                                <img src={TickImg} />
                                                <p>LP Burned <br /> Disabled</p>
                                            </div>
                                            <div>
                                                {
                                                    item?.top10HolderPercent * 100 > 15 ? <img src={TickImg} /> : <img src={crossImg} />
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
                <div className='d-flex justify-content-center newPairfooterBtn py-5'>
                    <button
                        className='bg-transparent text-white border rounded mx-1 btnPrev'
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`bg-transparent text-white border rounded mx-1 ${currentPage === index + 1 ? 'activeBtnPair' : ''
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className='bg-transparent text-white border rounded mx-1 btnPrev'
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>

        </>
    )

}
export default NewpairTable


