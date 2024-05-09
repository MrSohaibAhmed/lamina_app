import React from 'react'
import '../Dashboard.css'

const RightAccordian = () => {
    return (
        <div className="accordion accordion-flush bg-dark" id="accordionFlush">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingtwo">
                    <button className="accordion-button accordion-button-inner collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapseOne">
                        Data & security
                    </button>
                </h2>
                <div id="flush-collapsetwo" className="accordion-collapse accordion-body-inner collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlush">
                    <div className="accordion-body data-table"> <table className="table">
                        <tbody>
                            <tr>
                                <td> Mint Authority
                                </td>
                                <td className="text-end text-danger"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> Enabled
                                </td>
                            </tr>
                            <tr>
                                <td> Freeze Authority
                                </td>
                                <td className="text-end text-success">Disabled

                                </td>
                            </tr>
                            <tr>
                                <td> Pooled Ansem Dog
                                </td>
                                <td className="text-end text-danger"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> 0.00%
                                </td>
                            </tr>
                            <tr>
                                <td>  LP Burned
                                </td>
                                <td className="text-end"> $0.0₄
                                </td>
                            </tr>
                            <tr>
                                <td>   Pooled SOL
                                </td>
                                <td className="text-end"> $0.17
                                </td>
                            </tr>
                            <tr>
                                <td>  Top 10 Holders
                                </td>
                                <td className="text-end text-danger"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> 99.47%
                                </td>
                            </tr>
                            <tr>
                                <td>  Deployer
                                </td>
                                <td className="text-end"><a href="#"> Bq7..CnPm</a>
                                </td>
                            </tr>
                            <tr>
                                <td> Open Trading
                                </td>
                                <td className="text-end"> May 7 15:44:25
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightAccordian