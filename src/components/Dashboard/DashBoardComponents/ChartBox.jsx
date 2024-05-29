import React, { useEffect, useState, useMemo } from 'react';
import shortBoxImg from '../../../assets/dashboard/short-box.png';
import '../Dashboard.css';
import TradingViewWidget from "./ApexChartComp";
import toast from 'react-hot-toast';

const ChartBox = ({ data }) => {
    const[selectedValue , setSelectedValue] = useState(' ')
    console.log(data.pairs?.[0]?.baseToken?.symbol)
    // //debugger
    const [tokenAddress, setTokenAddress] = useState();
    const [pairDataAddress, setPairDataAddress] = useState();
    const [name, setName] = useState("BTCUSD");
    const [imageSrc, setImageSrc] = useState(" ");

    const handleClick=(value)=>{
        setSelectedValue(value);
        console.log("selected Value is",value);
    }

    const handleCopy = (address) => {
        switch (address) {
            case "tokenAddress":
                navigator.clipboard.writeText(tokenAddress)
                    .then(() => {
                        toast.success('Successfully copied Token!');
                        console.log("Base token copied successfully");
                    })
                    .catch((error) => console.error("Error copying baseToken:", error));
                break;
            case "pairAddress":
                console.log("Copying pairAddress:", pairDataAddress);
                navigator.clipboard.writeText(pairDataAddress)
                    .then(() => {
                        toast.success('Successfully copied pair address!');
                        console.log("Pair address copied successfully");
                    })
                    .catch((error) => console.error("Error copying pairAddress:", error));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (data?.pairs && data.pairs.length > 0 && data.pairs[0]?.baseToken?.name) {
            console.log("chartbox data is=>>>" ,data.pairs )
            const baseToken = data.pairs[0]?.baseToken.address;
            const pairAddress = data.pairs[0]?.pairAddress;
            setName(data.pairs[0]?.baseToken?.name);
            setImageSrc(data.pairs[0]?.info?.imageUrl);
            setPairDataAddress(pairAddress);
            setTokenAddress(baseToken);
        }
    }, [data]);

    const tradingViewComponent = useMemo(() => (
        <TradingViewWidget data={data.pairs?.[0]?.baseToken.symbol} />
    ), [data.pairs?.[0]?.baseToken.symbol, data.pairs?.[0]?.pairAddress]);


    return (
        <div>
            <div className="chart-box">
                <div className="row">
                    <div className="d-flex align-middle col-4 col-sm-4 align-self-center">
                        <img width={40} style={{borderRadius:"50px"}} src={imageSrc} />
                        <h4 className="mb-0 align-content-center m-1">{name}</h4>
                    </div>
                    <div className="col-4 ">
                        {/* <button className='m-1 bg-def text-white'>1</button> */}
                        
                         <button onClick={()=>handleClick('15M')} className="bg-dark btn-inner-box m-1">15M</button>
                        <button onClick={()=>handleClick('1H')} className="bg-dark btn-inner-box m-1">1H</button>
                        <button onClick={()=>handleClick('6H')} className="bg-dark btn-inner-box m-1">6H</button>
                        <button onClick={()=>handleClick('24H')} className="bg-dark btn-inner-box m-1">24H</button> 
                    </div>
                    <div className="col-4 mt-2 mt-sm-0 col-sm-4 d-flex def-table align-items-center align-self-center">
                        Token
                        <input type="text" className="d-none" value={tokenAddress} id="myInput-token" />
                        <button className="bg-transparent border-0" onClick={() => handleCopy('tokenAddress')}><img src={shortBoxImg} width="15px" alt="" /></button>
                        <div className="vl"></div>
                        Pair
                        <input type="text" className="d-none" value={pairDataAddress} id="myInput-pair" />
                        <button className="bg-transparent border-0" onClick={() => handleCopy('pairAddress')}><img src={shortBoxImg} width="15px" alt="" /></button>
                    </div>
                    <div className="col-lg-12 mt-2 px-0">
                        <div id="candlestick-basic">
                            {tradingViewComponent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;
