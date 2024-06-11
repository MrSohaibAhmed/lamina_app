import React, { useState } from 'react'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'
import "../Dashboard/Dashboard.css"
import Img from '../../assets/img/Img'
import { withdraw } from '../hooks/useWallet'
import { useContext } from 'react'
import KeyContext from '../../context/walletContext'
import toast, { Toaster } from 'react-hot-toast'
function TransferFund() {
    const { solBalance } = useContext(KeyContext)
    const [formData, setFormData] = useState({
        fromPublicKey: localStorage.getItem("publicKey"),
        amount: '',
        toPublicKey: localStorage.getItem("solanaKey"),

    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const newValue = name === 'amount' ? parseFloat(value) * 1000000000 : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const withdrawFunds = () => {

        const response = withdraw(formData).then((res) => {
            toast.success("Withdraw Successfull")
            console.log(res)
        }).catch((err) => {
            toast.error("Try Again ")
        })

    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <InternalNavbar />
            <center>
                <h1 className='mt-6'>Transfer Fund</h1>
            </center>
            <div className='mt-4'>
                <div className='right-inner-box col-7 mx-auto '>
                    {/* <img src={Img}/> */}
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

                    <hr className='mt-3' />
                    {/* <div>
                        <div className='mt-2'>
                            <center>
                                <p>History</p>
                                <p className='bg-transparent grey-text'>There is no History yet .....</p>
                            </center>
                        </div>
                    </div> */}
                </div>
            </div>


        </>
    )
}

export default TransferFund