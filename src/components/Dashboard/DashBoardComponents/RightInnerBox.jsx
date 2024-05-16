import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sercureImg from "../../../assets/dashboard/secure.png"
import twitterImg from "../../../assets/dashboard/twitter.png"
import telegramImg from "../../../assets/dashboard/telegram.png"
import alertImg from "../../../assets/dashboard/alert.png"
import solIconImg from "../../../assets/dashboard/sol-icon.png"
import settingImg from "../../../assets/dashboard/setting.png"
import { animateScroll as scroll } from 'react-scroll';
import toast, { Toaster } from 'react-hot-toast';
import { swapTokens, swapTokensOut } from '../../hooks/useWallet'
import "../Dashboard.css"
import { Log } from 'ethers'



const RightInnerBox = ({ data }) => {

  const [Txnsfive, setsetTxnsfive] = useState(0);
  const [Txnsone, setsetTxnsone] = useState(0);
  const [Txnssix, setsetTxnssix] = useState(0);
  const [Txnstwentyfour, setsetTxnstwentyfour] = useState(0);
  const [totaltxns, setTotaltxns] = useState(0)

  const [volume, setVolume] = useState('$0');
  const [makers, setMakers] = useState(0);
  const [selectedValue, setSelectedValue] = useState(" ");
  const [buy, setBuy] = useState(0)
  const [buyVol, setBuyVol] = useState(0)
  const [sell, setsell] = useState(0)

  const [sellVol, setsellVol] = useState(0)
  const [activeButton, setActiveButton] = useState(null)
  const [inputAmountVal, setInputAmountVal] = useState();
  const scrollToTop = () => {
    scroll.scrollToTop();

  };

  const calculateVolumes = (buys, sells, volume) => {
    const totalTransactions = buys + sells;
    const volumeInThousands = Math.round(volume / 1000);

    const buyVolume = Math.round(((buys / totalTransactions) * volume) / 1000);
    const sellVolume = Math.round(((sells / totalTransactions) * volume) / 1000);

    return { buyVolume, sellVolume, totalTransactions, volumeInThousands };
  };
  const updateData = (timeframe) => {
    setSelectedValue(timeframe); // Update selectedValue state
    switch (timeframe) {
      case '5M':
        {
          const { buyVolume, sellVolume, totalTransactions, volumeInThousands } = calculateVolumes(Txnsfive.buys || 0, Txnsfive.sells || 0, data?.pairs[0]?.volume?.m5);
          setBuy(Txnsfive.buys || 0);
          setsell(Txnsfive.sells || 0);
          setTotaltxns(totalTransactions);
          setVolume(volumeInThousands);
          setBuyVol(buyVolume);
          setsellVol(sellVolume);
          break;
        }
      case '1H':
        {
          const { buyVolume, sellVolume, totalTransactions, volumeInThousands } = calculateVolumes(Txnsone.buys || 0, Txnsone.sells || 0, data?.pairs[0]?.volume?.h1);
          setBuy(Txnsone.buys || 0);
          setsell(Txnsone.sells || 0);
          setTotaltxns(totalTransactions);
          setVolume(volumeInThousands);
          setBuyVol(buyVolume);
          setsellVol(sellVolume);
          break;
        }
      case '6H':
        {
          const { buyVolume, sellVolume, totalTransactions, volumeInThousands } = calculateVolumes(Txnssix.buys || 0, Txnssix.sells || 0, data?.pairs[0]?.volume?.h6);
          setBuy(Txnssix.buys || 0);
          setsell(Txnssix.sells || 0);
          setTotaltxns(totalTransactions);
          setVolume(volumeInThousands);
          setBuyVol(buyVolume);
          setsellVol(sellVolume);
          break;
        }
      case '24H':
        {
          const { buyVolume, sellVolume, totalTransactions, volumeInThousands } = calculateVolumes(Txnstwentyfour.buys || 0, Txnstwentyfour.sells || 0, data?.pairs[0]?.volume?.h24);
          setBuy(Txnstwentyfour.buys || 0);
          setsell(Txnstwentyfour.sells || 0);
          setTotaltxns(totalTransactions);
          setVolume(volumeInThousands);
          setBuyVol(buyVolume);
          setsellVol(sellVolume);
          break;
        }
      default:
        {
          const { buyVolume, sellVolume, totalTransactions, volumeInThousands } = calculateVolumes(txns?.m5?.buys || 0, txns?.m5?.sells || 0, data?.pairs[0]?.volume?.m5);
          setBuy(txns?.m5?.buys || 0);
          setsell(txns?.m5?.sells || 0);
          setTotaltxns(totalTransactions);
          setVolume(volumeInThousands);
          setBuyVol(buyVolume);
          setsellVol(sellVolume);
          break;
        }
    }
  }

  const handleQuickBuy = () => {
    if (selectedValue !== null && selectedValue !== 0) { // Check if selectedValue is not null or 0
      const value = {
        amount: selectedValue * 1000000000,
        inputMint: "So11111111111111111111111111111111111111112",
        outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      };

      const buyPromise = swapTokens(value);

      toast.promise(
        buyPromise,
        {
          loading: 'Buying...',
          success: 'Buyed Successfully',
          error: 'Cannot Buy. Try Again',
        }
      );
    } else {
      console.error("No value selected");
      noValueError();
    }
  };
  const handleQuickSell = () => {
    if (selectedValue !== null && selectedValue !== 0) { // Check if selectedValue is not null or 0
      const value = {
        amount: selectedValue * 1000000000,
        inputMint: "So11111111111111111111111111111111111111112",
        outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      };

      const buyPromise = swapTokensOut(value);

      toast.promise(
        buyPromise,
        {
          loading: 'Selling...',
          success: 'Sold Successfully',
          error: 'Cannot Sell. Try Again',
        }
      );
    } else {
      console.error("No value selected");
      noValueError();
    }
  };
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    console.log("selected value is", value);
    setActiveButton(value)
    console.log("Active Button:", activeButton)

  };

  const changeAmountHandler = (event) => {
    setInputAmountVal(event.target.value)
    console.log(event.target.value);
    setSelectedValue(event.target.value)
    setActiveButton('')
  }

  useEffect(() => {
    if (data?.pairs && data.pairs.length > 0 && data.pairs[0]?.txns) {
      setsetTxnsfive(data?.pairs[0]?.txns?.m5)
      setsetTxnsone(data?.pairs[0]?.txns?.h1)
      setsetTxnssix(data?.pairs[0]?.txns?.h6)
      setsetTxnstwentyfour(data?.pairs[0]?.txns?.h24)


    }
  }, [data])

  return (
    <>
      <Toaster position="top-center"
        reverseOrder={false} />
      <div className="right-inner-box">
        <div className="row">
          <div className="col-lg-5 col-md-12 align-self-center d-flex">
            <h5>{data?.pairs?.[0]?.baseToken?.symbol || "BTC"}</h5>&nbsp; <img src={sercureImg} height="25px" width="20px" alt="" />
          </div>
          <div className="col-lg-7 col-md-12 px-0 align-self-center d-flex">
            <p>{data?.pairs?.[0]?.dexId || "raydium V4"}</p>&nbsp; |&nbsp; <p>Profile</p>
          </div>
        </div>
        <div className="row contact-inner">
          <div className="col-md-6 my-3 align-self-center">
            <h6 className="mb-0">From Contract</h6>
          </div>
          <div className="col-md-6 my-3 align-self-center">
            <a target="_blank" href={data?.pairs?.[0]?.info?.socials?.[0]?.url}><img src={twitterImg} alt="" width="15px" /></a>
            <a target="_blank" href={data?.pairs?.[0]?.info?.socials?.[1]?.url}><img src={telegramImg} alt="" width="15px" /></a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="alert alert-info alert-dismissible fade show" role="alert">
            <img src={alertImg} height="22px" width="20px" alt="" />&nbsp; This pair has very
            little liquidity
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert"
              aria-label="Close"></button>
          </div>
        </div>
        <div className="row price-inner">
          <div className="col-lg-4 col">
            <h6>Price USD</h6>
            <h5>{data?.pairs?.[0]?.priceUsd || "0.1980"}</h5>

          </div>
          <div className="col-lg-4  col">
            <h6>Price SOL</h6>
            <h5>{data?.pairs?.[0]?.priceNative || "0.1980"}</h5>
          </div>
          <div className="col-lg-4 col">
            <h6>SUPPLY</h6>
            <h5>100M</h5>
          </div>
        </div>
        <hr />
        <div className="row price-inner">
          <div className="col-lg-4 col">
            <h6>LIQUIDITY</h6>
            <h5>{data?.pairs?.[0]?.liquidity?.usd || "0.1980"}</h5>
          </div>
          <div className="col-lg-4 col">
            <h6>MKT CAP</h6>
            <h5>{(data?.pairs?.[0]?.liquidity?.base || 0) / 1000000}M</h5>

          </div>
          <div className="col-lg-4 col">
          </div>
        </div>
      </div>
      <div className="right-inner-box mt-3">
        <div className="row price-inner text-center">
          <button onClick={() => updateData('5M')} className="col-lg-3 col border-inner bg-transparent text-white">
            <h4>5M</h4>
            <h5 className={data?.pairs?.[0]?.priceChange?.m5 < 0 ? 'text-danger' : ''}>
              {data?.pairs?.[0]?.priceChange?.m5 || 0}
            </h5>

          </button>
          <button onClick={() => updateData('1H')} className="col-lg-3 col border-inner bg-transparent text-white">
            <h4>1H</h4>
            <h5 className={data?.pairs?.[0]?.priceChange?.h1 < 0 ? 'text-danger' : ''}>
              {data?.pairs?.[0]?.priceChange?.h1 || 0}
            </h5>

          </button>
          <button onClick={() => updateData('6H')} className="col-lg-3 col border-inner bg-transparent text-white ">
            <h4>6H</h4>
            <h5 className={data?.pairs?.[0]?.priceChange?.h6 < 0 ? 'text-danger' : ''}>
              {data?.pairs?.[0]?.priceChange?.h6 || 0}
            </h5>

          </button>
          <button onClick={() => updateData('24H')} className="col-lg-3 col bg-transparent text-white">
            <h4>24H</h4>
            <h5 className={data?.pairs?.[0]?.priceChange?.h24 < 0 ? 'text-danger' : ''}>
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
            <h6>MAKERS</h6>
            <h5>{makers}</h5>
          </div>
          <div className="col-lg-8">
            <div className=" mt-5 position-relative">
              <div className="progress-values">
                <div className="progress-value-left">
                  <h6 className="mb-0">BUYS</h6>{buy}
                </div>
                <div className="progress-value-right text-end">
                  <h6 className="mb-0">SELL</h6> {sell}
                </div>
              </div>
              <div className="progress progress-default">
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                  aria-valuemax="100"></div>
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
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
            <div className=" mt-6 position-relative">
              <div className="progress-values">
                <div className="progress-value-left">
                  <h6 className="mb-0">BUYERS</h6> 0
                </div>
                <div className="progress-value-right text-end">
                  <h6 className="mb-0">SELLERS</h6> 0
                </div>
              </div>
              <div className="progress progress-default">
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-inner-box mt-3 p-0">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link fw-semibold active position-relative" id="pills-two-tab" data-bs-toggle="pill"
              data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-two"
              aria-selected="true">BUY</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link fw-semibold position-relative" id="pills-one-tab" data-bs-toggle="pill"
              data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one"
              aria-selected="false">SELL</button>
          </li>
        </ul>
        <div className="tab-content p-4" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-two" role="tabpanel" aria-labelledby="pills-two-tab">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="switch-lable ms-1">Insta buy</span>
            <hr />
            <div className="d-flex flex-wrap">
              <div className="my-3 mx-2">
                <button onClick={() => handleButtonClick(0.25)}
                  className={`bg-dark btn-inner-box ${activeButton == 0.25 ? 'btn1-active' : ''}`}>
                  <img src={solIconImg} width="18px" alt="" />
                  &nbsp; 0.25</button>
              </div>
              <div className="my-3 mx-2">
                <button onClick={() => handleButtonClick(0.5)} className={`bg-dark btn-inner-box ${activeButton == 0.5 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;0.5</button>
              </div>
              <div className="my-3 mx-2">
                <button onClick={() => handleButtonClick(1)}
                  className={`bg-dark btn-inner-box ${activeButton == 1 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;1</button>
              </div>
              <div className="my-3 mx-2">
                <button onClick={() => handleButtonClick(2)} className={`bg-dark btn-inner-box ${activeButton == 2 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;2</button>
              </div>
              <div className="my-3 mx-2">
                <button onClick={() => handleButtonClick(1.5)} className={`bg-dark btn-inner-box ${activeButton == 1.5 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;1.5</button>
              </div>
              <div className="my-3 mx-2">
                <button onClick={() => handleButtonClick(2)} className={`bg-dark btn-inner-box ${activeButton == 2.90 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;2.90</button>
              </div>
            </div>
            <div>
              <div className="input-group mx-2 my-4">
                <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1"><img
                  src={solIconImg} width="18px" alt="" /></span>
                <input type="number" value={inputAmountVal} onChange={changeAmountHandler} className="form-control bg-transparent border border-left-0 text-light"
                  placeholder="Amount to buy in SOL" aria-label="Amount" aria-describedby="basic-addon1" />
              </div>
            </div>
            <hr />
            <div>
              <div className="accordion accordion-flush bg-dark" id="accordionFlush">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button accordion-button-inner collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <img src={settingImg} width="24px" alt="" />&nbsp;&nbsp;Advance Options
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse accordion-body-inner collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlush">
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col mt-2 ">
                          Slippage % <br /><br />
                          <Link className="btn-inner-box mt-3">20.0</Link>
                        </div>
                        <div className="col mt-2 ">
                          Smart-Mev protection
                          <div className="mt-2 form-check">
                            <input type="checkbox" className="form-check-input" id="Check1" />
                            <label className="form-check-label" for="Check1">Enable</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col mt-2 ">
                          Priority Fee <br />
                          <div className="d-flex flex-wrap">
                            <div className="my-3 mx-1">
                              <Link to="#" className="btn-inner-box">Default</Link>
                            </div>
                            <div className="my-3 mx-1">
                              <Link to="#" className="btn-inner-box">2X</Link>
                            </div>
                            <div className="my-3 mx-1">
                              <Link to="#" className="btn-inner-box">3x</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col mt-2 ">
                          Priority Fee <br />
                          <div className="d-flex row flex-wrap">
                            <div className="my-3  align-self-center col-lg-3 mx-1">
                              <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                                value="0.01" aria-label="Amount" aria-describedby="basic-addon1" />
                            </div>
                            <div className="my-3 align-self-center col mx-1">
                              <p className="mb-0"> Priority Fee (SOL)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col mt-2 ">
                          Bribery Amount<br /> <i>Higher success: <span className="text-success"> 0.01+</span>
                          </i>
                          <div className="input-group my-3">
                            <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1">
                              <img src={solIconImg} width="18px" alt="" /></span>
                            <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                              placeholder="0.01 SOL" aria-label="Amount" aria-describedby="basic-addon1" />
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
              <button onClick={handleQuickBuy} className=" btn-buy-quick">Quick Buy {selectedValue}</button>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-one" role="tabpanel" aria-labelledby="pills-one-tab">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="switch-lable ms-1">Insta Sell</span>
            <hr />
            <div className="d-flex flex-wrap">
              <div className="my-3 mx-2">
                <button value="0.25" onClick={() => handleButtonClick(0.25)} className={`bg-dark btn-inner-box ${activeButton == 0.25 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;25%</button>
              </div>
              <div className="my-3 mx-2">
                <button value="0.5" onClick={() => handleButtonClick(0.5)} className={`bg-dark btn-inner-box ${activeButton == 0.5 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;50%</button>
              </div>
              <div className="my-3 mx-2">
                <button value="1" onClick={() => handleButtonClick(1)} className={`bg-dark btn-inner-box ${activeButton == 1 ? 'btn1-active' : ''}`}><img src={solIconImg} width="18px" alt="" />
                  &nbsp;100%</button>
              </div>

            </div>
            <div>
              <div className="input-group mx-2 my-4">
                <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1"><img
                  src={solIconImg} width="18px" alt="" /></span>
                <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                  placeholder="Amount to buy in SOL" aria-label="Amount" aria-describedby="basic-addon1" />
              </div>
            </div>
            <hr />
            <div>
              <div className="accordion accordion-flush bg-dark" id="accordionFlush">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button accordion-button-inner collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <img src={settingImg} width="24px" alt="" />&nbsp;&nbsp;Advance Options
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse accordion-body-inner collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlush">
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col mt-2 ">
                          Slippage % <br /><br />
                          <Link className="btn-inner-box mt-3">20.0</Link>
                        </div>
                        <div className="col mt-2 ">
                          Smart-Mev protection
                          <div className="mt-2 form-check">
                            <input type="checkbox" className="form-check-input" id="Check1" />
                            <label className="form-check-label" for="Check1">Enable</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col mt-2 ">
                          Priority Fee <br />
                          <div className="d-flex flex-wrap">
                            <div className="my-3 mx-1">
                              <Link to="#" className="btn-inner-box">Default</Link>
                            </div>
                            <div className="my-3 mx-1">
                              <Link to="#" className="btn-inner-box">2X</Link>
                            </div>
                            <div className="my-3 mx-1">
                              <Link to="#" className="btn-inner-box">3x</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col mt-2 ">
                          Priority Fee <br />
                          <div className="d-flex row flex-wrap">
                            <div className="my-3  align-self-center col-lg-3 mx-1">
                              <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                                value="0.01" aria-label="Amount" aria-describedby="basic-addon1" />
                            </div>
                            <div className="my-3 align-self-center col mx-1">
                              <p className="mb-0"> Priority Fee (SOL)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col mt-2 ">
                          Bribery Amount<br /> <i>Higher success: <span className="text-success"> 0.01+</span>
                          </i>
                          <div className="input-group my-3">
                            <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1"><img
                              src={solIconImg} width="18px" alt="" /></span>
                            <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                              placeholder="0.01 SOL" aria-label="Amount" aria-describedby="basic-addon1" />
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
              <button onClick={handleQuickSell} className=" btn-buy-quick">Quick Sell</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default RightInnerBox