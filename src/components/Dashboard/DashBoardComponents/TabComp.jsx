import React, { useEffect } from "react";
import transcationImg from "../../../assets/dashboard/transaction.png";
import holdingImg from "../../../assets/dashboard/holding.png";
import arrowImg from "../../../assets/dashboard/arrows.png";
import solIconImg from "../../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../../assets/dashboard/transaction-table-icon.png";
import TransactionTable from "./TrancationTable";
import HoldingTable from "./HoldingTable";
// import { getTokenAccounts } from '../../hooks/useTransactions';
const TabComp = ({ data }) => {
  debugger;

  return (
    <div className="mt-3 tab-box">
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fw-semibold active position-relative"
            id="pills-transaction-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-transaction"
            type="button"
            role="tab"
            aria-controls="pills-transaction"
            aria-selected="true"
          >
            <img src={transcationImg} width="12px" alt="" /> &nbsp; Transaction
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fw-semibold position-relative"
            id="pills-holding-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-holding"
            type="button"
            role="tab"
            aria-controls="pills-holding"
            aria-selected="false"
          >
            <img src={holdingImg} width="12px" alt="" /> &nbsp;My Holding
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-transaction"
          role="tabpanel"
          aria-labelledby="pills-transaction-tab"
        >
          <TransactionTable address={data?.pairs?.[0]?.baseToken?.address} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-holding"
          role="tabpanel"
          aria-labelledby="pills-holding-tab"
        >
          <div
            className="tab-pane fade show active"
            id="pills-transaction"
            role="tabpanel"
            aria-labelledby="pills-transaction-tab"
          >
            <HoldingTable address={data?.pairs?.[0]?.pairAddress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComp;
