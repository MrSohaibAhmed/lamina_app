import React, { useEffect, useState, useMemo } from "react";
import shortBoxImg from "../../../assets/dashboard/short-box.png";
import "../Dashboard.css";
import TradingViewWidget from "./ApexChartComp";
import toast from "react-hot-toast";
const ChartBox = ({ data }) => {
  ////debugger
  const baseUrl = window.location.origin;
  const [selectedValue, setSelectedValue] = useState("15m");
  console.log(data.pairs?.[0]?.baseToken?.symbol);
  // ////////debugger
  const [tokenAddress, setTokenAddress] = useState();
  const [pairDataAddress, setPairDataAddress] = useState();
  const [name, setName] = useState("BTCUSD");
  const [imageSrc, setImageSrc] = useState(" ");
  const handleClick = (value) => {
    //////debugger
    setSelectedValue(value);
    console.log("selected Value is", value);
    log;
  };
  const handleCopy = (address) => {
    switch (address) {
      case "tokenAddress":
        navigator.clipboard
          .writeText(tokenAddress)
          .then(() => {
            toast.success("Successfully copied Token!");
            console.log("Base token copied successfully");
          })
          .catch((error) => console.error("Error copying baseToken:", error));
        break;
      case "pairAddress":
        console.log("Copying pairAddress:", pairDataAddress);
        navigator.clipboard
          .writeText(pairDataAddress)
          .then(() => {
            toast.success("Successfully copied pair address!");
            console.log("Pair address copied successfully");
          })
          .catch((error) => console.error("Error copying pairAddress:", error));
        break;
      case "Link":
        navigator.clipboard
          .writeText(`${baseUrl}/token/${pairDataAddress}`)
          .then(() => {
            toast.success("Successfully copied Dashboard Address!");

          })
          .catch((error) => console.error("Error copying pairAddress:", error));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (
      data?.pairs &&
      data.pairs.length > 0 &&
      data.pairs[0]?.baseToken?.name
    ) {
      console.log("chartbox data is=>>>", data.pairs);
      const baseToken = data.pairs[0]?.baseToken.address;
      const pairAddress = data.pairs[0]?.pairAddress;
      setName(data.pairs[0]?.baseToken?.name);
      setImageSrc(data.pairs[0]?.info?.imageUrl);
      setPairDataAddress(pairAddress);
      setTokenAddress(baseToken);
    }
  }, [data]);
  useEffect(() => {
    setSelectedValue("1H");
  }, []);
  const tradingViewComponent = useMemo(
    () => (
      <TradingViewWidget
        value={data.pairs?.[0]?.priceUsd}
        data={data.pairs?.[0]?.baseToken.symbol}
        token={data.pairs?.[0]?.baseToken?.address}
        candlesSpan={selectedValue}
      />
    ),
    [
      data.pairs?.[0]?.baseToken.symbol,
      data.pairs?.[0]?.pairAddress,
      selectedValue,
    ]
  );
  return (
    <div>
      <div className="chart-box">
        <div className="row d-flex s-sm-block justify-content-center">
          <div className="d-flex justify-content-center justify-content-md-start align-middle col-sm-6 align-self-center">
            <img width={40} style={{ borderRadius: "50px" }} src={imageSrc} />
            <h4 className="mb-0 align-content-center m-1">{name}</h4>
            <button
              onClick={() => handleClick("1m")}
              className={`btn-inner-box m-1 border-0 btnChartBox ${selectedValue === "1m" ? "activeBtn" : ""
                }`}
            >
              1m
            </button>{" "}
            <button
              onClick={() => handleClick("5m")}
              className={`btn-inner-box m-1 border-0 btnChartBox ${selectedValue === "5m" ? "activeBtn" : ""
                }`}
            >
              5m
            </button>
            {/* <button className='m-1 bg-def text-white'>1</button> */}
            {/* <button onClick={() => handleClick('15m')} className=" btn-inner-box m-1 border-0 btnChartBox">15M</button> */}
            <button
              onClick={() => handleClick("15m")}
              className={`btn-inner-box m-1 border-0 btnChartBox ${selectedValue === "15m" ? "activeBtn" : ""
                }`}
            >
              15m
            </button>
            {/* <button onClick={() => handleClick('15m')} className={`bg-dark btn-inner-box m-1 ${selectedValue === "15m" ? "active" : ""
                            }`}>15M</button> */}
            <button
              onClick={() => handleClick("1H")}
              className={`btn-inner-box m-1 border-0 btnChartBox ${selectedValue === "1H" ? "activeBtn" : ""
                }`}
            >
              1H
            </button>
            <button
              onClick={() => handleClick("6H")}
              className={`btn-inner-box m-1 border-0 btnChartBox ${selectedValue === "6H" ? "activeBtn" : ""
                }`}
            >
              6H
            </button>
            <button
              onClick={() => handleClick("1D")}
              className={`btn-inner-box m-1 border-0 btnChartBox ${selectedValue === "1D" ? "activeBtn" : ""
                }`}
            >
              24H
            </button>
          </div>

          <div className="col-sm-2 d-flex align-middle align-items-center">
            <span>Shareable URL</span>
            <button
              className="bg-transparent border-0"
              onClick={() => handleCopy("Link")}
            >
              <img src={shortBoxImg} width="15px" alt="" />
            </button>
          </div>

          <div className="col-sm-4 mt-2 mt-sm-0 col-sm-4 d-flex justify-content-center def-table align-items-center align-self-center">
            Token
            <input
              type="text"
              className="d-none"
              value={tokenAddress}
              id="myInput-token"
            />
            <button
              className="bg-transparent border-0"
              onClick={() => handleCopy("tokenAddress")}
            >
              <img src={shortBoxImg} width="15px" alt="" />
            </button>
            <div className="vl"></div>
            Pair
            <input
              type="text"
              className="d-none"
              value={pairDataAddress}
              id="myInput-pair"
            />
            <button
              className="bg-transparent border-0"
              onClick={() => handleCopy("pairAddress")}
            >
              <img src={shortBoxImg} width="15px" alt="" />
            </button>
          </div>
          <div className="col-lg-12 mt-2 px-0">
            <div id="candlestick-basic">{tradingViewComponent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartBox;