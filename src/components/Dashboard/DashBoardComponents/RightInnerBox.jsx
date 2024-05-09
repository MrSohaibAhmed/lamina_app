import React from 'react'
import { Link } from 'react-router-dom'
import sercureImg from "../../../assets/dashboard/secure.png"
import twitterImg from "../../../assets/dashboard/twitter.png"
import telegramImg from "../../../assets/dashboard/telegram.png"
import alertImg from "../../../assets/dashboard/alert.png"
import solIconImg from "../../../assets/dashboard/sol-icon.png"
import settingImg from "../../../assets/dashboard/setting.png"
import {animateScroll as scroll } from 'react-scroll';
import "../Dashboard.css"
const RightInnerBox = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
    
  };
  return (
    <>
         <div className="right-inner-box">
            <div className="row">
              <div className="col-lg-5 col-md-12 align-self-center d-flex">
                <h5>SHIT</h5>&nbsp; <img src={sercureImg} height="25px" width="20px" alt=""/>
              </div>
              <div className="col-lg-7 col-md-12 px-0 align-self-center d-flex">
                <p>Raydium V4</p>&nbsp; |&nbsp; <p>Profile</p>
              </div>
            </div>
            <div className="row contact-inner">
              <div className="col-md-6 my-3 align-self-center">
                <h6 className="mb-0">From Contract</h6>
              </div>
              <div className="col-md-6 my-3 align-self-center">
                <Link to="#"><img src={twitterImg} alt="" width="15px"/></Link>
                <Link to="#"><img src={telegramImg} alt="" width="15px"/></Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="alert alert-info alert-dismissible fade show" role="alert">
                <img src={alertImg} height="22px" width="20px" alt=""/>&nbsp; This pair has very
                little liquidity
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert"
                  aria-label="Close"></button>
              </div>
            </div>
            <div className="row price-inner">
              <div className="col-lg-4 col">
                <h6>Price USD</h6>
                <h5>$0.051140</h5>
              </div>
              <div className="col-lg-4  col">
                <h6>Price SOL</h6>
                <h5>0.087185</h5>
              </div>
              <div className="col-lg-4 col">
                <h6>SUPPLY</h6>
                <h5>100M</h5>
              </div>
            </div>
            <hr/>
            <div className="row price-inner">
              <div className="col-lg-4 col">
                <h6>LIQUIDITY</h6>
                <h5>$191.4</h5>
              </div>
              <div className="col-lg-4 col">
                <h6>MKT CAP</h6>
                <h5>$114.01</h5>
              </div>
              <div className="col-lg-4 col">
              </div>
            </div>
          </div>
          <div className="right-inner-box mt-3">
            <div className="row price-inner text-center">
              <div className="col-lg-3 col">
                <h6>5M</h6>
                <h5>N/A</h5>
              </div>
              <div className="col-lg-3 col border-inner">
                <h6>1H</h6>
                <h5>N/A</h5>
              </div>
              <div className="col-lg-3 col border-inner">
                <h6>6H</h6>
                <h5>N/A</h5>
              </div>
              <div className="col-lg-3 col">
                <h6>24H</h6>
                <h5 className="text-danger">-98.57%</h5>
              </div>
            </div>
            <hr/>
            <div className="row price-inner">
              <div className="col-lg-3 border-bottom-inner">
                <h6>TXNS</h6>
                <h5>0</h5>
                <br/>
                <h6>VOLUME</h6>
                <h5>$0</h5>
                <br/>
                <h6>MAKERS</h6>
                <h5>0</h5>
              </div>
              <div className="col-lg-8">
                <div className=" mt-5 position-relative">
                  <div className="progress-values">
                    <div className="progress-value-left">
                      <h6 className="mb-0">BUYS</h6> 0
                    </div>
                    <div className="progress-value-right text-end">
                      <h6 className="mb-0">SELL</h6> 0
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
                      <h6 className="mb-0">BUYS VOL</h6> $0
                    </div>
                    <div className="progress-value-right text-end">
                      <h6 className="mb-0">SELL VOL</h6> 0
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
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
                <span className="switch-lable ms-1">Insta buy</span>
                <hr/>
                <div className="d-flex flex-wrap">
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp; 0.25</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;0.5</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;1</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;2</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;1</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;2</Link>
                  </div>
                </div>
                <div>
                  <div className="input-group mx-2 my-4">
                    <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1"><img
                        src={solIconImg} width="18px" alt=""/></span>
                    <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                      placeholder="Amount to buy in SOL" aria-label="Amount" aria-describedby="basic-addon1"/>
                  </div>
                </div>
                <hr/>
                <div>
                  <div className="accordion accordion-flush bg-dark" id="accordionFlush">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button accordion-button-inner collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <img src={settingImg} width="24px" alt=""/>&nbsp;&nbsp;Advance Options
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse accordion-body-inner collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlush">
                        <div className="accordion-body"> 
                          <div className="row">
                            <div className="col mt-2 ">
                              Slippage % <br/><br/>
                              <Link className="btn-inner-box mt-3">20.0</Link>
                            </div>
                            <div className="col mt-2 ">
                              Smart-Mev protection
                              <div className="mt-2 form-check">
                                <input type="checkbox" className="form-check-input" id="Check1"/>
                                <label className="form-check-label" for="Check1">Enable</label>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col mt-2 ">
                              Priority Fee <br/>
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
                              Priority Fee <br/>
                              <div className="d-flex row flex-wrap">
                                <div className="my-3  align-self-center col-lg-3 mx-1">
                                  <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                                  value="0.01" aria-label="Amount" aria-describedby="basic-addon1"/>
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
                              Bribery Amount<br/> <i>Higher success: <span className="text-success"> 0.01+</span>
                              </i>
                              <div className="input-group my-3">
                                <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1">
                                    <img src={solIconImg} width="18px" alt=""/></span>
                                <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                                  placeholder="0.01 SOL" aria-label="Amount" aria-describedby="basic-addon1"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="mt-5 mb-3">
                  <Link onClick={scrollToTop} className=" btn-buy-quick">Quick Buy</Link>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-one" role="tabpanel" aria-labelledby="pills-one-tab">
                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                </label>
                <span className="switch-lable ms-1">Insta Sell</span>
                <hr/>
                <div className="d-flex flex-wrap">
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp; 0.25</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;0.5</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;1</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;2</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;1</Link>
                  </div>
                  <div className="my-3 mx-2">
                    <Link to="#" className="btn-inner-box"><img src={solIconImg} width="18px" alt=""/>
                      &nbsp;2</Link>
                  </div>
                </div>
                <div>
                  <div className="input-group mx-2 my-4">
                    <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1"><img
                        src={solIconImg} width="18px" alt=""/></span>
                    <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                      placeholder="Amount to buy in SOL" aria-label="Amount" aria-describedby="basic-addon1"/>
                  </div>
                </div>
                <hr/>
                <div>
                  <div className="accordion accordion-flush bg-dark" id="accordionFlush">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button accordion-button-inner collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <img src={settingImg} width="24px" alt=""/>&nbsp;&nbsp;Advance Options
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse accordion-body-inner collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlush">
                        <div className="accordion-body"> 
                          <div className="row">
                            <div className="col mt-2 ">
                              Slippage % <br/><br/>
                              <Link className="btn-inner-box mt-3">20.0</Link>
                            </div>
                            <div className="col mt-2 ">
                              Smart-Mev protection
                              <div className="mt-2 form-check">
                                <input type="checkbox" className="form-check-input" id="Check1"/>
                                <label className="form-check-label" for="Check1">Enable</label>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col mt-2 ">
                              Priority Fee <br/>
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
                              Priority Fee <br/>
                              <div className="d-flex row flex-wrap">
                                <div className="my-3  align-self-center col-lg-3 mx-1">
                                  <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                                  value="0.01" aria-label="Amount" aria-describedby="basic-addon1"/>
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
                              Bribery Amount<br/> <i>Higher success: <span className="text-success"> 0.01+</span>
                              </i>
                              <div className="input-group my-3">
                                <span className="input-group-text bg-transparent border border-right-0" id="basic-addon1"><img
                                    src={solIconImg} width="18px" alt=""/></span>
                                <input type="text" className="form-control bg-transparent border border-left-0 text-light"
                                  placeholder="0.01 SOL" aria-label="Amount" aria-describedby="basic-addon1"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="mt-5 mb-3">
                  <Link onClick={scrollToTop} className=" btn-buy-quick">Quick Sell</Link>
                </div>
              </div>
            </div>
          </div>
    
    </>
  )
}

export default RightInnerBox