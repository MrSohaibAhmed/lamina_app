import React from 'react'
import shortBoxImg from '../../../assets/dashboard/short-box.png'
import '../Dashboard.css'
import ApexChartComponent from './ApexChartComp'

const ChartBox = () => {
    return (
        <div>
            <div className="chart-box">
                <div className="row">
                    <div className="col-6 col-sm-4 align-self-center">
                        <h4 className="mb-0">The First Shitcoin</h4>
                    </div>
                    <div className="col-12 mt-2 mt-sm-0 col-sm-4 d-flex align-self-center">
                        Token
                        <input type="text" className="d-none" value="Text-put-for-token" id="myInput-token" />
                        <button className="bg-transparent border-0" onclick="myFunction()"><img src={shortBoxImg} width="20px" alt="" /></button>
                        <div className="vl"></div>
                        Pair
                        <input type="text" className="d-none" value="Text-put-for-pair" id="myInput-pair" />
                        <button className="bg-transparent border-0" onclick="myFunction1()"><img src={shortBoxImg} width="20px" alt="" /></button>
                    </div>
                    <div className="col-12 col-sm-4 mt-2 mt-sm-0 justify-content-lg-end d-flex align-self-center ms-lg-auto">
                        <label className="switch">
                            <input  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <span className="slider round"></span>
                        </label>
                        <span className="switch-lable ms-1">Outlier</span>
                    </div>
          
                    <div className="col-lg-12 mt-2 px-0">
                        <div id="candlestick-basic">
                        <ApexChartComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ChartBox