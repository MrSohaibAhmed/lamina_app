import React, { useState } from 'react'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'
import "../Dashboard/Dashboard.css"
// import Img from '../../assets/img/Img'
import { withdraw } from '../hooks/useWallet'
import { useContext } from 'react'
import KeyContext from '../../context/walletContext'
import toast, { Toaster } from 'react-hot-toast'
import fundImg from "../../assets/transferFund/noun-withdraw-6779380 1.png"
function TransferFund() {
    const { solBalance } = useContext(KeyContext)
    console.log(solBalance)
    const [formData, setFormData] = useState({
        fromPublicKey: localStorage.getItem("publicKey"),
        amount: solBalance,
        toPublicKey: localStorage.getItem("solanaKey"),

    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const withdrawFunds = () => {
    //     console.log("amount is" , formData.amount);
    //     if (solBalance >0 && solBalance !<= formData.amount) {
    //         const newVal = {
    //             fromPublicKey: formData.fromPublicKey,
    //             amount: Number(formData.amount) * 1000000000,
    //             toPublicKey: formData.toPublicKey,
    //         }
    //         // const response = withdraw(newVal).then((res) => {
    //     //     toast.success("Withdraw Successfull")
    //     //     console.log(res)
    //     // }).catch((err) => {
    //     //     toast.error("Try Again ")
    //     // })
    //     }

    //     else{
    //         console.log("you donot have enough money");
    //     }




    // }
    const handleCopy = (keyValue) => {
        navigator.clipboard.writeText(keyValue)
            .then(() => {
                console.log("Hash copied to clipboard:");
                toast.success("Successfully copied ");
            })
            .catch((error) => {
                console.error("Error copying text:", error);
            });
    }
    const withdrawFunds = () => {
        console.log("amount is", formData.amount);
        if (solBalance <= 0) {
            toast.error("Your sol balance is 0");
        } else if (solBalance < formData.amount) {
            toast.error("Your amount should be smaller or equal to sol balance");
        } else {
            const newVal = {
                fromPublicKey: formData.fromPublicKey,
                amount: Number(formData.amount) * 1000000000,
                toPublicKey: formData.toPublicKey,
            };

            const response = withdraw(newVal)
                .then((res) => {
                    const t = (
                        <div onClick={() => handleCopy(res?.data?.signature
                        )}>Click Here To Copy your Hash</div>
                    )
                    // //debugger
                    toast.success(t);
                    console.log(res);
                })
                .catch((err) => {
                    toast.error("Try Again ");
                });
            toast.promise(response, {
                loading: "Waiting For Transaction...",
                // success: "Sold Successfully",
                // error: "Transaction Failed. Try Again",
            });
        }
    };


    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <InternalNavbar />
            <center>
                <h1 className='mt-6'>Transfer Fund</h1>
            </center>
            <div className='mt-1 bg-class py-5'>
                <div className='right-inner-box-transfer-fund col-7 mx-auto '>
                    <div className='d-flex justify-content-center transferFundHeadClass py-2'>
                        <div className='p-0 mx-2'>
                            <button className=' bg-transparent text-white w-100 border-0 rounded'>Deposit</button>
                        </div>
                        <div className='mx-2'>
                            <button className='w-100  border-0 rounded'>Withdraw</button>
                        </div>
                    </div>
                    <div className='m-auto d-flex justify-content-center align-items-center py-5'>
                        <img src={fundImg} className="img-fluid" />
                    </div>
                    <center className='mt-3'>
                        <p><span className='span-text'>Withdraw </span>from Photon trading wallet to your selected wallet</p>
                    </center>
                    <div className='container mt-3 p-5'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label>Withdraw From </label>
                                <input
                                    name="fromPublicKey"
                                    type="text"
                                    className="form-control bg-transparent border border-left-0 text-light"
                                    placeholder="Kjiy...rt"
                                    aria-label="Amount"
                                    aria-describedby="basic-addon1"
                                    value={formData.fromPublicKey}
                                    onChange={handleInputChange}
                                    disabled
                                />
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label>Sol Amount </label>

                                <input
                                    name="amount"
                                    type="number"
                                    className="form-control bg-transparent border border-left-0 text-light"
                                    placeholder="Input Amount"
                                    aria-label="Amount"
                                    aria-describedby="basic-addon1"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    min={0}
                                    max={solBalance}
                                />
                            </div>

                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label>Withdraw To </label>
                                <input
                                    name="toPublicKey"
                                    type="text"
                                    className="form-control bg-transparent border border-left-0 text-light"
                                    placeholder="Input Amount"
                                    aria-label="Amount"
                                    aria-describedby="basic-addon1"
                                    value={formData.toPublicKey}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label>Priority Fee</label>

                                <input
                                    type="number"
                                    className="form-control bg-transparent border border-left-0 text-light"
                                    placeholder="Input Amount"
                                    aria-label="Amount"
                                    aria-describedby="basic-addon1"
                                    value={formData.priorityFee}
                                    onChange={handleInputChange}
                                />
                            </div> */}

                        </div>
                        <div className="mt-5 mb-3">
                            <button onClick={withdrawFunds} className=" btn-buy-quick col-5 mx-auto">
                                Withdraw
                            </button>
                        </div>
                    </div>

                    {/* <hr className='mt-3' /> */}
                    <div>
                        {/* <div className='mt-2 py-4'>
                            <center>
                                <p>History</p>
                                <p className='bg-transparent grey-text'>There are currently no transactions yet.</p>
                            </center>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default TransferFund