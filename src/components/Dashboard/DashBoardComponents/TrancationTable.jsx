import React, { useEffect, useState } from "react";
import arrowImg from "../../../assets/dashboard/arrows.png";
import solIconImg from "../../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../../assets/dashboard/transaction-table-icon.png";
import { setTransaction } from "../../hooks/useTransactions";
const TransactionTable = ({ address }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTransaction(address)
      .then((responseData) => setData(responseData.data.items))
      .catch((error) =>
        console.error("Error fetching transaction data:", error)
      );
  }, [address]);

  const formatTxHash = (txHash) => {
    if (!txHash) return "";
    const start = txHash.slice(0, 5);
    const end = txHash.slice(-5);
    return `${start}...${end}`;
  };
  const formatPrice = (price) => {
    if (!price || price == "null") return "N/A";
    const priceString = price.toString();
    const truncatedPrice = priceString.substring(0, 9);
    return truncatedPrice;
  };
  const formatTotalUSD = (totalUsd) => {
    // if (!totalUsd) return 'N/A';
    // const priceString = totalUsd.toString();
    // const truncatedPrice = priceString.substring(0, 10);
    // return truncatedPrice;
    if (totalUsd === undefined || totalUsd === null) return "N/A";

    // Convert to string and split into parts before and after the decimal point
    const parts = totalUsd.toString().split(".");

    // If there are no decimal places, return the entire number
    if (parts.length === 1) return totalUsd;

    // Extract the first 5 characters after the decimal point
    const decimalPart = parts[1].substring(0, 5);

    // Combine the parts with the decimal point
    return parts[0] + "." + decimalPart;
  };

  function epochToDateTime(epochTime) {
    // Convert epoch time to milliseconds
    const epochMilliseconds = epochTime * 1000;
    // Create a new Date object
    const date = new Date(epochMilliseconds);
    // Get the components of the date (year, month, day, etc.)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    // Concatenate the components to form the standard time string
    const standardTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return standardTime;
  }

  return (
    <>
      <div className="table-responsive def-table">
        <table className="table table-dark">
          <thead>
            <tr className="border-0">
              <th scope="col">
                Date/Age <img src={arrowImg} width="14px" alt="" />
              </th>
              <th scope="col">Type</th>
              <th scope="col">Price USD</th>
              <th scope="col">Total USD</th>
              {/* <th scope="col">Price SOL</th> */}
              <th scope="col">Amount</th>
              <th scope="col">Total SOL</th>
              <th scope="col">Makers</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="border-top-0">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  No transactions available
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{epochToDateTime(item.blockUnixTime)}</td>
                  <td
                    className={
                      item.side === "sell" ? "text-danger" : "text-success"
                    }
                  >
                    {item.side}
                  </td>
                  <td>{formatPrice(item.base.price)}</td>
                  <td>
                    {formatTotalUSD(item.quote.uiAmount * item.base.uiAmount)}
                  </td>
                  {/* <td><img src={solIconImg} width="18px" alt="" /> 0.08718</td> */}
                  <td>{item.quote.amount / 1000}K</td>
                  <td>
                    <img src={solIconImg} width="18px" alt="" />{" "}
                    {item.quote.uiAmount}
                  </td>
                  <td>{formatTxHash(item.txHash)}</td>
                  <td>
                    <img src={transationTableIconImg} width="20px" alt="" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
