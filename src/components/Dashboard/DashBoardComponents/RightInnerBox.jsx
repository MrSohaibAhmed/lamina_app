import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sercureImg from "../../../assets/dashboard/secure.png";
import twitterImg from "../../../assets/dashboard/twitter.png";
import telegramImg from "../../../assets/dashboard/telegram.png";
import alertImg from "../../../assets/dashboard/alert.png";
import solIconImg from "../../../assets/dashboard/sol-icon.png";
import settingImg from "../../../assets/dashboard/setting.png";
import TryAgain from "../../../assets/dashboard/icons8-reset-24.png";
import { animateScroll as scroll } from "react-scroll";
import toast, { Toaster } from "react-hot-toast";
import { swapTokens, swapTokensOut } from "../../hooks/useWallet";
import "../Dashboard.css";
import { Log } from "ethers";
import { pairData } from "../../hooks/useWallet";
import arrowImg from "../../../assets/dashboard/arrow.webp";
import { useContext } from "react";
import KeyContext from "../../../context/walletContext";
import { useParams } from "react-router-dom";
const RightInnerBox = ({ data, solBalance }) => {
  const { tokenid } = useParams();
  const shouldShowButton = !tokenid;
  // const shouldShowButton = tokenid !== "3eoU8s1WtRcgwfy1CWf732fT2HCuFL7HD7j29c6iHnBc";
  // //debugger
  const [supply, setSupply] = useState(0);

  const [allData, setAllData] = useState([]);
  const [mktValueData, setMktValue] = useState(0);
  useEffect(() => {
    setAllData(data);
  }, [data]);



  const formatMarketCap = (marketCap) => {
    // //debugger
    const mktCapStr = marketCap.toString();
    const numberBeforeDotMkt = mktCapStr.split(".")[0];
    console.log("number before dot in MKT", numberBeforeDotMkt);

    if (numberBeforeDotMkt.length >= 9) {
      const convertToBillion = (marketCap / 1000000000).toFixed(2);
      console.log("Convert to billion MKT", convertToBillion);
      return convertToBillion + "B";
    } else if (numberBeforeDotMkt.length >= 7) {
      const convertToMillion = (marketCap / 1000000).toFixed(2);
      console.log("Convert to million MKT", convertToMillion + "M");
      return convertToMillion + "M";
    } else if (numberBeforeDotMkt.length >= 4) {
      const convertToThousand = (marketCap / 1000).toFixed(2);
      console.log("Convert to thousand", convertToThousand + "K");
      return convertToThousand + "K";
    } else {
      return marketCap.toString();
    }
  };

  const formatSupply = (supply) => {
    const supplyValue = supply.toString();
    const numberBeforeDot = supplyValue.split(".")[0];

    if (numberBeforeDot.length >= 9) {
      const convertToBillion = (supply / 1000000000).toFixed(2);
      console.log("Convert to billion", convertToBillion);
      return convertToBillion + "B";
    } else if (numberBeforeDot.length >= 7) {
      const convertToMillion = (supply / 1000000).toFixed(2);
      console.log("Convert to million", convertToMillion + "M");
      return convertToMillion + "M";
    } else {
      return supplyValue;
    }
  };

  // useEffect(() => {
  //   // ////debugger
  //   if (data && data.pairs && data.pairs[0] && data.pairs[0].baseToken && data.pairs[0].baseToken.address) {
  //     const tokenAddress = data.pairs[0].baseToken.address;
  //     const options = {
  //       method: 'GET',
  //       headers: { 'X-API-KEY': '1a6f67ecb3d540b984f8fc694cfb364c' }
  //     };

  //     fetch(`https://public-api.birdeye.so/defi/token_overview?address=${tokenAddress}`, options)
  //       .then(response => response.json())
  //       .then(response => {
  //         console.log(response.data, "I am token overview");
  //         const supplyvalue = response?.data?.supply.toString();

  //         const numberBeforeDot = supplyvalue.split(".")[0];

  //         if (numberBeforeDot.length >= 9) {
  //           const value = response?.data?.supply;
  //           const convertToBillion = (value / 1000000000).toFixed(2);
  //           console.log("Convert to billion", convertToBillion);
  //           setSupply(convertToBillion + "B")
  //         }
  //         else if (numberBeforeDot.length >= 7) {
  //           const value = response?.data?.supply;
  //           const convertToMillion = (value / 1000000).toFixed(2);
  //           console.log("Convert to million", convertToMillion + "M");
  //           setSupply(convertToMillion + "M")
  //         }

  //         // setSupply(response?.data?.supply)
  //         console.log("supply data is =>", response?.data?.supply);

  //         // setTokenOverview(response);
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }, [data]);


  useEffect(() => {
    // ////debugger
    if (data && data.pairs && data.pairs[0] && data.pairs[0].baseToken && data.pairs[0].baseToken.address) {
      const tokenAddress = data.pairs[0].baseToken.address;
      const options = {
        method: 'GET',
        headers: { 'X-API-KEY': '1a6f67ecb3d540b984f8fc694cfb364c' }
      };

      fetch(`https://public-api.birdeye.so/defi/token_overview?address=${tokenAddress}`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response.data, "I am token overview");

          const mktCap = response?.data?.mc;

          const formattedMarketCap = formatMarketCap(mktCap);
          setMktValue(formattedMarketCap);

          // setSupply(response?.data?.supply)
          console.log("MKT  data is =>", response?.data?.mc);

          const supplyValue = response?.data?.supply;
          const formattedSupply = formatSupply(supplyValue);
          setSupply(formattedSupply);
          // console.log("Supply data is =>", supplyValue);

          // setTokenOverview(response);
        })
        .catch(err => console.error(err));
    }
  }, [data]);

  const [Txnsfive, setsetTxnsfive] = useState(0);
  const [Txnsone, setsetTxnsone] = useState(0);
  const [Txnssix, setsetTxnssix] = useState(0);
  const [Txnstwentyfour, setsetTxnstwentyfour] = useState(0);
  const [totaltxns, setTotaltxns] = useState(0);

  const [volume, setVolume] = useState("$0");
  const [makers, setMakers] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [sellSelectedValue, setSellSelectedValue] = useState(null);
  const [buy, setBuy] = useState(0);
  const [buyVol, setBuyVol] = useState(0);
  const [sell, setsell] = useState(0);

  const [sellVol, setsellVol] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [inputAmountVal, setInputAmountVal] = useState();
  const [inputSellAmount, setInputSellAmount] = useState();
  const [sellButtonValue, setSellButtonValue] = useState(null);
  const [buttonValue, setButtonValue] = useState(null);
  const [slippage, setSlippage] = useState(10.0);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const calculateVolumes = (buys, sells, volume) => {
    const totalTransactions = buys + sells;
    const volumeInThousands = Math.round(volume / 1000);

    const buyVolume = Math.round(((buys / totalTransactions) * volume) / 1000);
    const sellVolume = Math.round(
      ((sells / totalTransactions) * volume) / 1000
    );

    return { buyVolume, sellVolume, totalTransactions, volumeInThousands };
  };
  const updateData = (timeframe) => {
    // setSelectedValue(timeframe); // Update selectedValue state
    switch (timeframe) {
      case "5M": {
        const { buyVolume, sellVolume, totalTransactions, volumeInThousands } =
          calculateVolumes(
            Txnsfive.buys || 0,
            Txnsfive.sells || 0,
            data?.pairs?.[0]?.volume?.m5
          );
        setBuy(Txnsfive.buys || 0);
        setsell(Txnsfive.sells || 0);
        setTotaltxns(totalTransactions);
        setVolume(volumeInThousands);
        setBuyVol(buyVolume);
        setsellVol(sellVolume);
        break;
      }
      case "1H": {
        const { buyVolume, sellVolume, totalTransactions, volumeInThousands } =
          calculateVolumes(
            Txnsone.buys || 0,
            Txnsone.sells || 0,
            data?.pairs?.[0]?.volume?.h1
          );
        setBuy(Txnsone.buys || 0);
        setsell(Txnsone.sells || 0);
        setTotaltxns(totalTransactions);
        setVolume(volumeInThousands);
        setBuyVol(buyVolume);
        setsellVol(sellVolume);
        break;
      }
      case "6H": {
        const { buyVolume, sellVolume, totalTransactions, volumeInThousands } =
          calculateVolumes(
            Txnssix.buys || 0,
            Txnssix.sells || 0,
            data?.pairs?.[0]?.volume?.h6
          );
        setBuy(Txnssix.buys || 0);
        setsell(Txnssix.sells || 0);
        setTotaltxns(totalTransactions);
        setVolume(volumeInThousands);
        setBuyVol(buyVolume);
        setsellVol(sellVolume);
        break;
      }
      case "24H": {
        const { buyVolume, sellVolume, totalTransactions, volumeInThousands } =
          calculateVolumes(
            Txnstwentyfour.buys || 0,
            Txnstwentyfour.sells || 0,
            data?.pairs?.[0]?.volume?.h24
          );
        setBuy(Txnstwentyfour.buys || 0);
        setsell(Txnstwentyfour.sells || 0);
        setTotaltxns(totalTransactions);
        setVolume(volumeInThousands);
        setBuyVol(buyVolume);
        setsellVol(sellVolume);
        break;
      }
      default: {
        const { buyVolume, sellVolume, totalTransactions, volumeInThousands } =
          calculateVolumes(
            txns?.m5?.buys || 0,
            txns?.m5?.sells || 0,
            data?.pairs[0]?.volume?.m5
          );
        setBuy(txns?.m5?.buys || 0);
        setsell(txns?.m5?.sells || 0);
        setTotaltxns(totalTransactions);
        setVolume(volumeInThousands);
        setBuyVol(buyVolume);
        setsellVol(sellVolume);
        break;
      }
    }
  };
  const [buyResult, setBuyResult] = useState("");
  const copy = (address) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        toast.success("Successfully copied Token!");
        console.log("Base token copied successfully");
      })
      .catch((error) => console.error("Error copying baseToken:", error));
  };



















  const handleQuickBuy = () => {
    console.log("solona balance is =>>", solBalance);
    if (selectedValue !== null && selectedValue !== 0) {

      if (solBalance !== 0) {
        const value = {
          address: localStorage.getItem("publicKey"),
          amount: selectedValue * 1000000000,
          inputMint: "So11111111111111111111111111111111111111112",
          outputMint: data?.pairs?.[0]?.baseToken?.address,
          slippageBps: slippage * 100,
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
























  const { setAllHoldings, AllHoldings } = useContext(KeyContext);
  // const handleQuickSell = () => {
  //   if (!sellSelectedValue) {
  //     toast.error("Please select a Value");
  //   }
  //   if (sellSelectedValue !== null && sellSelectedValue !== 0) {
  //     console.log("slected value is =>>", sellSelectedValue);
  //     // Check if selectedValue is not null or 0
  //     if (solBalance !== 0) {
  //       const value = {
  //         address: localStorage.getItem("publicKey"),
  //         amount: sellButtonValue * 1000000000,
  //         inputMint: data?.pairs?.[0]?.baseToken?.address,
  //         outputMint: "So11111111111111111111111111111111111111112",
  //         slippageBps: slippage,
  //       };

  //       const buyPromise = swapTokensOut(value);
  //       buyPromise
  //         .then((result) => {
  //           const transactionResult =
  //             result?.data?.swapResponse?.transactionResult;
  //           setBuyResult(transactionResult);
  //           console.log("Buy Promise Result:", transactionResult);
  //           const t = (
  //             <div
  //               style={{ cursor: "pointer" }}
  //               onClick={() => copy(transactionResult)}
  //             >
  //               Your Transaction is Sent . Click On Arrow To Check your
  //               Transaction Hash{" "}
  //               <a href={transactionResult} target="blanked">
  //                 <img width={20} src={arrowImg} />
  //               </a>
  //             </div>
  //           );
  //           // toast.success(`Sold Successfully. Your Transaction is Sent`);
  //           toast.success(t, {
  //             duration: 10000,
  //           });
  //         })
  //         .catch((error) => {
  //           console.error("Buy Promise Error:", error);
  //           toast.error("Cannot Buy. Try Again");
  //         });
  //       toast.promise(buyPromise, {
  //         loading: "Waiting For Transaction...",
  //         success: "Sold Successfully",
  //         error: "Transaction Failed. Try Again",
  //       });
  //     } else {
  //       toast.error("you donot have enough balance to sell");
  //     }
  //   } else {
  //     console.error("No value selected");
  //     noValueError();
  //   }
  // };
  const handleQuickSell = () => {
    if (!sellSelectedValue) {
      toast.error("Please select a Value");
      return;
    }

    if (sellSelectedValue !== null && sellSelectedValue !== 0) {
      console.log("selected value is =>>", sellSelectedValue);

      // Check if selectedValue is not null or 0
      if (solBalance !== 0) {
        const baseTokenAddress = data?.pairs?.[0]?.baseToken?.address;

        // Find the holding in Allholdings with the same address as baseTokenAddress
        const holding = AllHoldings.find(item => item.address === baseTokenAddress);

        if (holding) {
          const amount = holding.balance * sellSelectedValue;
          const value = {
            address: localStorage.getItem("publicKey"),
            amount: amount,
            inputMint: baseTokenAddress,
            outputMint: "So11111111111111111111111111111111111111112",
            slippageBps: slippage * 100,
            tip: 500000,
          };

          const buyPromise = swapTokensOut(value);
          buyPromise
            .then((result) => {
              const transactionResult = result?.data?.swapResponse?.transactionResult;
              setBuyResult(transactionResult);
              console.log("Buy Promise Result:", transactionResult);
              const t = (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => copy(transactionResult)}
                >
                  Your Transaction is Sent. Click On Arrow To Check your
                  Transaction Hash{" "}
                  <a href={transactionResult} target="blank">
                    <img width={20} src={arrowImg} alt="arrow" />
                  </a>
                </div>
              );
              toast.success(t, {
                duration: 10000,
              });
            })
            .catch((error) => {
              console.error("Buy Promise Error:", error);
              toast.error("Cannot Sell. Try Again");
            });

          toast.promise(buyPromise, {
            loading: "Waiting For Transaction...",
            success: "Sold Successfully",
            error: "Transaction Failed. Try Again",
          });
        } else {
          toast.error("You don't have enough balance to sell");
        }
      } else {
        toast.error("You don't have enough balance to sell");
      }
    } else {
      console.error("No value selected");
      noValueError();
    }
  };

  const handleButtonClickSell = (value) => {
    // Remove the percentage sign (%) from the value
    console.log("clicked on quick sell", value);
    setSellSelectedValue(value);
    setActiveButton(value);
    const valueWithoutPercent = value.slice(0, -1);
    console.log("Sell button is", valueWithoutPercent);

    try {
      const sellValue = parseFloat(valueWithoutPercent) / 100;
      setSellButtonValue(sellValue);
      console.log("Selected value (decimal):", sellValue);
    } catch (error) {
      console.error("Error converting value:", error.message);
      // Handle invalid input (optional)
      // You can display an error message to the user here
    }

    setActiveButton(value);
    console.log("Active Button:", activeButton);
  };

  const handleButtonClick = (value) => {
    setSelectedValue(value);

    console.log("selected value is", value);
    setActiveButton(value);
    console.log("Active Button:", activeButton);
  };

  const changeAmountHandler = (event) => {
    setInputAmountVal(event.target.value);
    console.log(event.target.value);
    setSelectedValue(event.target.value);
    setActiveButton("");
  };
  const changeSellAmountHandler = (event) => {
    setInputSellAmount(event.target.value);
    console.log(event.target.value);
    setSellSelectedValue(event.target.value);
    setActiveButton("");
  };
  const handleSlippageChange = (event) => {
    let newValue = parseInt(event.target.value);
    newValue = newValue > 100 ? 100 : newValue; // Restrict value to maximum of 100
    setSlippage(newValue);
  };

  useEffect(() => {
    if (data?.pairs && data.pairs.length > 0 && data.pairs[0]?.txns) {
      setsetTxnsfive(data?.pairs[0]?.txns?.m5);
      setsetTxnsone(data?.pairs[0]?.txns?.h1);
      setsetTxnssix(data?.pairs[0]?.txns?.h6);
      setsetTxnstwentyfour(data?.pairs[0]?.txns?.h24);
    }
  }, [data]);
  useEffect(() => {
    if (Txnsfive) {
      const timer = setTimeout(() => {
        updateData("24H");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [Txnsfive]);
  useEffect(() => {
    // ////////debugger
    let intervalId;
    // Define a function to make the API call
    const fetchData = () => {
      // Check if the required data is available
      if (data?.pairs?.[0]?.priceUsd) {
        //debugger
        // Make the API call with the required parameter
        pairData(data.pairs?.[0]?.pairAddress)
          .then((response) => {
            setAllData(response.data);
            // Process the response as needed
            // console.log("API call response:", response.data);
          })
          .catch((error) => {
            // Handle errors
            // console.error("API call error:", error);
          });
      }
    };

    // Schedule the first API call when component mounts
    fetchData();

    // Set interval to make API call every 5 seconds
    intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [data]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="right-inner-box">
        <div className="row">
          <div className="col-sm-5 col-5 sm-font align-self-center d-flex">
            <h5>{data?.pairs?.[0]?.baseToken?.symbol || "BTC"}</h5>&nbsp;{" "}
            <img src={sercureImg} height="15px" width="10px" alt="" />
          </div>
          <div className="col-sm-7 col-7 px-0 sm-font align-self-center d-flex">
            <p>{data?.pairs?.[0]?.dexId || "raydium V4"}</p>&nbsp; |&nbsp;{" "}
            <p>Profile</p>
          </div>
        </div>
        <div className="row contact-inner">
          <div className="col-md-6 my-3 align-self-center">
            <h6 className="mb-0">From Contract</h6>
          </div>
          <div className="col-md-6 my-3 align-self-center">
            <a target="_blank" href={data?.pairs?.[0]?.info?.socials?.[0]?.url}>
              <img src={twitterImg} alt="" width="15px" />
            </a>
            <a target="_blank" href={data?.pairs?.[0]?.info?.socials?.[1]?.url}>
              <img src={telegramImg} alt="" width="15px" />
            </a>
          </div>
        </div>
        {Math.floor((allData?.pairs?.[0]?.liquidity?.usd || 16400) / 100)

          <
          150 ? (
          <div className="row mt-4">
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <img src={alertImg} height="22px" width="20px" alt="" />
              &nbsp; This pair has very little liquidity
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        ) : null}
        <div className="row price-inner mt-4">
          <div className="col-lg-4 col">
            <h6>Price USD</h6>
            <h5>{allData?.pairs?.[0]?.priceUsd || "0.1980"}</h5>
          </div>
          <div className="col-lg-4  col">
            <h6>Price SOL</h6>
            <h5>{allData?.pairs?.[0]?.priceNative || "0.1980"}</h5>
          </div>
          <div className="col-lg-4 col">
            <h6>SUPPLY</h6>
            <h5>{supply}</h5>
          </div>
        </div>
        <hr />
        <div className="row price-inner">
          <div className="col-lg-4 col">
            <h6>LIQUIDITY</h6>
            <h5>
              $
              {/* {Math.floor((allData?.pairs?.[0]?.liquidity?.usd || 16400) / 1000)} */}
              {(allData?.pairs?.[0]?.liquidity?.usd / 1000).toFixed(1)}


              K
            </h5>
          </div>
          <div className="col-lg-4 col">

            <h6>MKT CAP</h6>
            <h5>${mktValueData}</h5>
          </div>
          <div className="col-lg-4 col"></div>
        </div>
      </div>
      <div className="right-inner-box mt-3 hide-on-zoom">
        <div className="row price-inner text-center">
          <button
            onClick={() => updateData("5M")}
            className="col-lg-3 col border-inner bg-transparent text-white"
          >
            <h4>5M</h4>
            <h5
              className={
                data?.pairs?.[0]?.priceChange?.m5 < 0 ? "text-danger" : "text-success"
              }
            >
              {data?.pairs?.[0]?.priceChange?.m5 || 0}
            </h5>
          </button>
          <button
            onClick={() => updateData("1H")}
            className="col-lg-3 col border-inner bg-transparent text-white"
          >
            <h4>1H</h4>
            <h5
              className={
                data?.pairs?.[0]?.priceChange?.h1 < 0 ? "text-danger" : "text-success"
              }
            >
              {data?.pairs?.[0]?.priceChange?.h1 || 0}
            </h5>
          </button>
          <button
            onClick={() => updateData("6H")}
            className="col-lg-3 col border-inner bg-transparent text-white "
          >
            <h4>6H</h4>
            <h5
              className={
                data?.pairs?.[0]?.priceChange?.h6 < 0 ? "text-danger" : "text-success"
              }
            >
              {data?.pairs?.[0]?.priceChange?.h6 || 0}
            </h5>
          </button>
          <button
            onClick={() => updateData("24H")}
            className="col-lg-3 col bg-transparent text-white"
          >
            <h4>24H</h4>
            <h5
              className={
                data?.pairs?.[0]?.priceChange?.h24 < 0 ? "text-danger" : "text-success"
              }
            >
              {data?.pairs?.[0]?.priceChange?.h24 || 0}
            </h5>
          </button>
        </div>
        <hr />
        <div className="row price-inner">
          <div className="col-lg-3 border-bottom-inner">
            <h6>TXNS</h6>
            <h5>{totaltxns}</h5>
            <br />
            <h6>VOLUME</h6>
            <h5>{volume}</h5>
            <br />
            {/* <h6>MAKERS</h6>
            <h5>{totaltxns}</h5> */}
          </div>
          <div className="col-lg-8">
            <div className=" mt-5 position-relative">
              <div className="progress-values mt-3">
                <div className="progress-value-left">
                  <h6 className="mb-0">BUYS</h6>
                  {buy}
                </div>
                <div className="progress-value-right text-end">
                  <h6 className="mb-0">SELL</h6> {sell}
                </div>
              </div>
              <div className="progress progress-default">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className=" mt-6 position-relative">
              <div className="progress-values">
                <div className="progress-value-left">
                  <h6 className="mb-0">BUYS VOL</h6> ${buyVol}
                </div>
                <div className="progress-value-right text-end">
                  <h6 className="mb-0">SELL VOL</h6> ${sellVol}
                </div>
              </div>
              <div className="progress progress-default">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            {/* <div className=" mt-6 position-relative">
              <div className="progress-values">
                <div className="progress-value-left">
                  <h6 className="mb-0">BUYERS</h6> {buy}
                </div>
                <div className="progress-value-right text-end">
                  <h6 className="mb-0">SELLERS</h6>
                  {sell}
                </div>
              </div>
              <div className="progress progress-default">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {
        shouldShowButton && (
          <div className="right-inner-box mt-3 p-0">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-semibold active position-relative"
                  id="pills-two-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-two"
                  type="button"
                  role="tab"
                  aria-controls="pills-two"
                  aria-selected="true"
                >
                  BUY
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-semibold position-relative"
                  id="pills-one-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-one"
                  type="button"
                  role="tab"
                  aria-controls="pills-one"
                  aria-selected="false"
                >
                  SELL
                </button>
              </li>
            </ul>
            <div className="tab-content p-4" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-two"
                role="tabpanel"
                aria-labelledby="pills-two-tab"
              >
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="switch-lable ms-1">Insta buy</span>
                <hr />
                <div className="d-flex flex-wrap">
                  <div className="my-3 mx-2">
                    <button
                      onClick={() => handleButtonClick(0.25)}
                      className={`bg-dark btn-inner-box ${activeButton == 0.25 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp; 0.25
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      onClick={() => handleButtonClick(0.5)}
                      className={`bg-dark btn-inner-box ${activeButton == 0.5 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;0.5
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      onClick={() => handleButtonClick(1)}
                      className={`bg-dark btn-inner-box ${activeButton == 1 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;1
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      onClick={() => handleButtonClick(2)}
                      className={`bg-dark btn-inner-box ${activeButton == 2 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;2
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      onClick={() => handleButtonClick(1.5)}
                      className={`bg-dark btn-inner-box ${activeButton == 1.5 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;1.5
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      onClick={() => handleButtonClick(2.90)}
                      className={`bg-dark btn-inner-box ${activeButton == 2.9 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;2.90
                    </button>
                  </div>
                </div>
                <div>
                  <div className="input-group mx-2 my-4">
                    <span
                      className="input-group-text bg-transparent border border-right-0"
                      id="basic-addon1"
                    >
                      <img src={solIconImg} width="14px" alt="" />
                    </span>
                    <input
                      type="number"
                      // value={inputAmountVal}
                      value={selectedValue}
                      onChange={changeAmountHandler}
                      className="form-control bg-transparent border border-left-0 text-light"
                      placeholder="Amount to buy in SOL"
                      aria-label="Amount"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <hr />
                <div>
                  <div
                    className="accordion accordion-flush bg-dark"
                    id="accordionFlush"
                  >
                    <div className="accordion-item ">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button accordion-button-inner collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          <img src={settingImg} width="24px" alt="" />
                          &nbsp;&nbsp;Advance Options
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse accordion-body-inner collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="accordion-body">
                          <div className="row">
                            <div className="col mt-2">
                              Slippage % <br />
                              <input
                                className="form-control bg-transparent border border-left-0 text-light"
                                type="number"
                                // className="btn-inner-box mt-3"
                                value={slippage}
                                onChange={handleSlippageChange} // Call handleSlippageChange on input change
                                min={1}
                                max={100}
                              />
                            </div>

                            {/* <div className="col mt-2 ">
                                    Smart-Mev protection
                                    <div className="mt-2 form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Check1"
                                      />
                                      <label className="form-check-label" for="Check1">
                                        Enable
                                      </label>
                                    </div>
                                  </div> */}
                          </div>
                          <div className="row mt-3">
                            {/* <div className="col mt-2 ">
                                    Priority Fee <br />
                                    <div className="d-flex flex-wrap">
                                      <div className="my-3 mx-1">
                                        <Link to="#" className="btn-inner-box">
                                          Default
                                        </Link>
                                      </div>
                                      <div className="my-3 mx-1">
                                        <Link to="#" className="btn-inner-box">
                                          2X
                                        </Link>
                                      </div>
                                      <div className="my-3 mx-1">
                                        <Link to="#" className="btn-inner-box">
                                          3x
                                        </Link>
                                      </div>
                                    </div>
                                  </div> */}
                          </div>
                          <div className="row mt-3">
                            {/* <div className="col mt-2 ">
                                    Priority Fee <br />
                                    <div className="d-flex row flex-wrap">
                                      <div className="my-3  align-self-center col-lg-3 mx-1">
                                        <input
                                          type="text"
                                          className="form-control bg-transparent border border-left-0 text-light"
                                          value="0.01"
                                          aria-label="Amount"
                                          aria-describedby="basic-addon1"
                                        />
                                      </div>
                                      <div className="my-3 align-self-center col mx-1">
                                        <p className="mb-0"> Priority Fee (SOL)</p>
                                      </div>
                                    </div>
                                  </div> */}
                          </div>
                          <div className="row">
                            <div className="col mt-2 ">
                              Bribery Amount
                              <br />{" "}
                              <i>
                                Higher success:{" "}
                                <span className="text-success"> 0.01+</span>
                              </i>
                              <div className="input-group my-3">
                                <span
                                  className="input-group-text bg-transparent border border-right-0"
                                  id="basic-addon1"
                                >
                                  <img src={solIconImg} width="14px" alt="" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control bg-transparent border border-left-0 text-light"
                                  placeholder="0.01 SOL"
                                  aria-label="Amount"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mt-5 mb-3">
                  <button onClick={handleQuickBuy} className=" btn-buy-quick">
                    Quick Buy {selectedValue}
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-one"
                role="tabpanel"
                aria-labelledby="pills-one-tab"
              >
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="switch-lable ms-1">Insta Sell</span>
                <hr />
                <div className="d-flex flex-wrap">
                  <div className="my-3 mx-2">
                    <button
                      value="0.25"
                      onClick={() => handleButtonClickSell(0.25)}
                      className={`bg-dark btn-inner-box ${activeButton == 0.25 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;25%
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      value="50%"
                      onClick={() => handleButtonClickSell(0.5)}
                      className={`bg-dark btn-inner-box ${activeButton == 0.5 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;50%
                    </button>
                  </div>
                  <div className="my-3 mx-2">
                    <button
                      value="100%"
                      onClick={() => handleButtonClickSell(1)}
                      className={`bg-dark btn-inner-box ${activeButton == 1 ? "btn1-active" : ""
                        }`}
                    >
                      <img src={solIconImg} width="14px" alt="" />
                      &nbsp;100%
                    </button>
                  </div>
                </div>
                <div>
                  <div className="input-group mx-2 my-4">
                    <span
                      className="input-group-text bg-transparent border border-right-0"
                      id="basic-addon1"
                    >
                      <img src={solIconImg} width="14px" alt="" />
                    </span>
                    <input
                      type="text"
                      // value={inputSellAmount}
                      value={sellSelectedValue}
                      onChange={changeSellAmountHandler}
                      className="form-control bg-transparent border border-left-0 text-light"
                      placeholder="Amount to sell in SOL"
                      aria-label="Amount"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <hr />
                <div>
                  <div
                    className="accordion accordion-flush bg-dark"
                    id="accordionFlush"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button accordion-button-inner collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          <img src={settingImg} width="24px" alt="" />
                          &nbsp;&nbsp;Advance Options
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse accordion-body-inner collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="accordion-body">
                          <div className="row">
                            <div className="col mt-2">
                              Slippage % <br />
                              <input
                                className="form-control bg-transparent border border-left-0 text-light"
                                type="number"
                                // className="btn-inner-box mt-3"
                                value={slippage}
                                onChange={handleSlippageChange} // Call handleSlippageChange on input change
                                min={1}
                                max={100}
                              />
                            </div>
                            {/* <div className="col mt-2 ">
                                    Smart-Mev protection
                                    <div className="mt-2 form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Check1"
                                      />
                                      <label className="form-check-label" for="Check1">
                                        Enable
                                      </label>
                                    </div>
                                  </div> */}
                          </div>
                          <div className="row mt-3">
                            {/* <div className="col mt-2 ">
                                    Priority Fee <br />
                                    <div className="d-flex flex-wrap">
                                      <div className="my-3 mx-1">
                                        <Link to="#" className="btn-inner-box">
                                          Default
                                        </Link>
                                      </div>
                                      <div className="my-3 mx-1">
                                        <Link to="#" className="btn-inner-box">
                                          2X
                                        </Link>
                                      </div>
                                      <div className="my-3 mx-1">
                                        <Link to="#" className="btn-inner-box">
                                          3x
                                        </Link>
                                      </div>
                                    </div>
                                  </div> */}
                          </div>
                          {/* <div className="row mt-3">
                                  <div className="col mt-2 ">
                                    Priority Fee <br />
                                    <div className="d-flex row flex-wrap">
                                      <div className="my-3  align-self-center col-lg-3 mx-1">
                                        <input
                                          type="text"
                                          className="form-control bg-transparent border border-left-0 text-light"
                                          value="0.01"
                                          aria-label="Amount"
                                          aria-describedby="basic-addon1"
                                        />
                                      </div>
                                      <div className="my-3 align-self-center col mx-1">
                                        <p className="mb-0"> Priority Fee (SOL)</p>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                          <div className="row">
                            <div className="col mt-2 ">
                              Bribery Amount
                              <br />{" "}
                              <i>
                                Higher success:{" "}
                                <span className="text-success"> 0.01+</span>
                              </i>
                              <div className="input-group my-3">
                                <span
                                  className="input-group-text bg-transparent border border-right-0"
                                  id="basic-addon1"
                                >
                                  <img src={solIconImg} width="14px" alt="" />
                                </span>
                                <input
                                  type="text"
                                  value={inputSellAmount}
                                  onChange={changeSellAmountHandler}
                                  className="form-control bg-transparent border border-left-0 text-light"
                                  placeholder="0.01 SOL"
                                  aria-label="Amount"
                                  aria-describedby="basic-addon1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mt-5 mb-3">
                  <button onClick={handleQuickSell} className=" btn-buy-quick">
                    Quick Sell {sellSelectedValue}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  );
};

export default RightInnerBox;
