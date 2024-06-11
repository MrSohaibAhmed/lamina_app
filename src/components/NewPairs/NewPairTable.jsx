import React from 'react'
import { useState, useEffect } from 'react'
import arrowImg from "../../assets/dashboard/arrows.png";
import solIconImg from "../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../assets/dashboard/transaction-table-icon.png";
import pairImg from '../../assets/pairtableImg/Ellipse 1020.png'
import twiterImg from '../../assets/pairtableImg/twitter 1.png'
import telegramImg from '../../assets/pairtableImg/telegram 1.png'
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png'
import './newpair.css'
function NewpairTable() {
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
                            <th scope="col">Liquidity</th>
                            <th scope="col">Initial Liquidity</th>
                            <th scope="col">MKT App</th>
                            <th scope="col">TXNS</th>
                            <th scope="col">Volume</th>
                            <th scope="col">Audit Result</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">

                        <tr style={{backgroundColor:"#0E0E26"}} className=' text-white'>
                            <td>
                                <div className='d-flex'>
                                    <div><img src={pairImg} /></div>
                                    <div className=' ml-2'>
                                        <h6 style={{ margin: "3px" }}>SHAWK/SOL</h6>
                                        <p style={{ margin: "3px" }}>7rio..pump</p>
                                        <div className=' pt-2'>
                                            <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={twiterImg} /></span>
                                            <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={telegramImg} /></span>
                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td className=' align-content-center'>
                                <img src={clockImg} /> 5s
                            </td>
                            <td className=' align-content-center'>
                                <img src={solIconImg} /> 63.61088/ $10k
                            </td>
                            <td className=' align-content-center'>
                                <img src={solIconImg} /> 60/ $9.8k
                            </td>
                            <td className=' align-content-center my-auto'>
                                <div>
                                    <p className=' mb-2'>$5.13k</p>
                                    <p style={{color:"#1ECBE3"}} className=' mb-0'>$0.0551</p>
                                </div>
                            </td>
                            <td className=' align-content-center'>
                            <div>
                                    <p className=' mb-2'>2</p>
                                    <p className=' mb-0'><span className=' text-success'>2</span> / <span className=' text-danger'>0</span></p>
                                </div>
                            </td>
                            <td className=' align-content-center'>$295</td>
                            <td className=' align-content-center'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth <br/> Disabled</p>
                                    </div>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth <br/> Disabled</p>
                                    </div>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth <br/> Disabled</p>
                                    </div>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth  <br/> Disabled</p>
                                    </div>
                                    
                                </div>
                            </td>
                            <td className=' align-content-center'>
                                <button className='btn-buy-quick'>Quick Buy</button>
                            </td>
                        </tr>
                        <tr style={{backgroundColor:"#151530"}} className=' text-white'>
                            <td>
                                <div className='d-flex'>
                                    <div><img src={pairImg} /></div>
                                    <div className=' ml-2'>
                                        <h6 style={{ margin: "3px" }}>SHAWK/SOL</h6>
                                        <p style={{ margin: "3px" }}>7rio..pump</p>
                                        <div className=' pt-2'>
                                            <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={twiterImg} /></span>
                                            <span className='mr-2' style={{ backgroundColor: "#D9D9D9", borderRadius: "50%", padding: "2px 6px" }}><img src={telegramImg} /></span>
                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td className=' align-content-center'>
                                <img src={clockImg} /> 5s
                            </td>
                            <td className=' align-content-center'>
                                <img src={solIconImg} /> 63.61088/ $10k
                            </td>
                            <td className=' align-content-center'>
                                <img src={solIconImg} /> 60/ $9.8k
                            </td>
                            <td className=' align-content-center my-auto'>
                                <div>
                                    <p className=' mb-2'>$5.13k</p>
                                    <p style={{color:"#1ECBE3"}} className=' mb-0'>$0.0551</p>
                                </div>
                            </td>
                            <td className=' align-content-center'>
                            <div>
                                    <p className=' mb-2'>2</p>
                                    <p className=' mb-0'><span className=' text-success'>2</span> / <span className=' text-danger'>0</span></p>
                                </div>
                            </td>
                            <td className=' align-content-center'>$295</td>
                            <td className=' align-content-center'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth <br/> Disabled</p>
                                    </div>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth <br/> Disabled</p>
                                    </div>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth <br/> Disabled</p>
                                    </div>
                                    <div>
                                        <img src={clockImg}/>
                                        <p>Mint Auth  <br/> Disabled</p>
                                    </div>
                                    
                                </div>
                            </td>
                            <td className=' align-content-center'>
                                <button className='btn-buy-quick'>Quick Buy</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </>
    )

}
export default NewpairTable


