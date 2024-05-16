import React, { useEffect } from 'react'
import transcationImg from '../../../assets/dashboard/transaction.png';
import holdingImg from '../../../assets/dashboard/holding.png';
import arrowImg from '../../../assets/dashboard/arrows.png';
import solIconImg from '../../../assets/dashboard/sol-icon.png';
import transationTableIconImg from '../../../assets/dashboard/transaction-table-icon.png'
// import { getTokenAccounts } from '../../hooks/useTransactions';
const TabComp = ({ data }) => {
    const walletToQuery = 'FvjW8SdGgfFHJ5Q9XSni9g8GwnuY69RUQ5eEQxSYMeB2';
    useEffect(() => {
        // getTokenAccounts(walletToQuery)
    })
    return (

        <div className="mt-3 tab-box">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-semibold active position-relative" id="pills-transaction-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-transaction" type="button" role="tab"
                        aria-controls="pills-transaction" aria-selected="true"><img src={transcationImg}
                            width="12px" alt="" /> &nbsp; Transaction</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-semibold position-relative" id="pills-holding-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-holding" type="button" role="tab" aria-controls="pills-holding"
                        aria-selected="false"><img src={holdingImg} width="12px" alt="" /> &nbsp;My
                        Holding</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-transaction" role="tabpanel"
                    aria-labelledby="pills-transaction-tab">
                    <div className="table-responsive">
                        <table className="table table-dark">
                            <thead>
                                <tr className="border-0">
                                    <th scope="col">Date/Age <img src={arrowImg} width="14px" alt="" /></th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Price USD</th>
                                    <th scope="col">Total USD</th>
                                    <th scope="col">Price SOL</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Total SOL</th>
                                    <th scope="col">Makers</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="border-top-0">
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Apr 23 11:19:34</td>
                                    <td>Sell</td>
                                    <td>$0.05114</td>
                                    <td>$0.49</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td>
                                    <td>433k</td>
                                    <td><img src={solIconImg} width="18px" alt="" /> 0.00311</td>
                                    <td>3XUv67...7uU8</td>
                                    <td><img src={transationTableIconImg} width="20px" alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-holding" role="tabpanel" aria-labelledby="pills-holding-tab">
                    <h2 className="pt-3">My Holding</h2>
                </div>
            </div>
        </div>


    )
}

export default TabComp