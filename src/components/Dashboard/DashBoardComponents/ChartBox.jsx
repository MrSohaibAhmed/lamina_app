import React, { useEffect, useState } from 'react'
import shortBoxImg from '../../../assets/dashboard/short-box.png'
import '../Dashboard.css'
import TradingViewWidget from "./ApexChartComp"
import toast from 'react-hot-toast'

const ChartBox = ({ data }) => {
    const [tokenAddress, setTokenAddress] = useState();
    const [pairDataAddress, setPairDataAddress] = useState();
    const [name, setname] = useState("BTCUSD")


    const handleCopy = (address) => {

        console.log("basetoken 1 ", tokenAddress);
        switch (address) {
            case "tokenAddress":
                    
                navigator.clipboard.writeText(tokenAddress)
                    .then(() =>{ 
                        toast.success('Successfully copied Token!')
                        console.log("Base token copied successfully")})
                    .catch((error) => console.error("Error copying baseToken:", error));
                break;
            case "pairAddress":
                console.log("Copying pairAddress:", pairDataAddress);
                navigator.clipboard.writeText(pairDataAddress)
                    .then(() =>{
                        toast.success('Successfully copied pair address!')
                        console.log("Pair address copied successfully")})
                    .catch((error) => console.error("Error copying pairAddress:", error));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        console.log("api data is", data);
        const baseToken = data.pairs?.[0]?.baseToken.address;
        const pairAddress = data.pairs?.[0]?.pairAddress;
        console.log("base token data is", baseToken);
        console.log("pair address data is", pairAddress);
        if (data?.pairs && data.pairs.length > 0 && data.pairs[0]?.baseToken?.name) {
            setname(data.pairs[0]?.baseToken?.name)
            setPairDataAddress(pairAddress)
            setTokenAddress(baseToken)
        }
    }, [data])

    return (
        <div>
            <div className="chart-box">
                <div className="row">
                    <div className="col-6 col-sm-4 align-self-center">
                        <h4 className="mb-0">{name}</h4>
                    </div>
                    <div className="col-12 mt-2 mt-sm-0 col-sm-4 d-flex align-self-center">
                        Token
                        <input type="text" className="d-none" value={tokenAddress} id="myInput-token" />
                        <button className="bg-transparent border-0" onClick={() => handleCopy('tokenAddress')}><img src={shortBoxImg} width="20px" alt="" /></button>
                        <div className="vl"></div>
                        Pair
                        <input type="text" className="d-none" value={pairDataAddress} id="myInput-pair" />
                        <button className="bg-transparent border-0" onClick={() => handleCopy('pairAddress')}><img src={shortBoxImg} width="20px" alt="" /></button>
                    </div>
                    <div className="col-12 col-sm-4 mt-2 mt-sm-0 justify-content-lg-end d-flex align-self-center ms-lg-auto">
                        <label className="switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <span className="slider round"></span>
                        </label>
                        <span className="switch-lable ms-1">Outlier</span>
                    </div>

                    <div className="col-lg-12 mt-2 px-0">
                        <div id="candlestick-basic">
                            <TradingViewWidget data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ChartBox