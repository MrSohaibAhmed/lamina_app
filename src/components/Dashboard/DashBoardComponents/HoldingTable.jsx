import React, { useEffect, useState } from "react";
import arrowImg from "../../../assets/dashboard/arrows.png";
import solIconImg from "../../../assets/dashboard/sol-icon.png";
import transationTableIconImg from "../../../assets/dashboard/transaction-table-icon.png";
import { setHoldings } from "../../hooks/useTransactions";
import { useContext } from "react";
import KeyContext from "../../../context/walletContext";
import toast from "react-hot-toast";
const HoldingTable = ({ address }) => {
  const { setAllHoldings } = useContext(KeyContext);

  const [holdings, setHoldingsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const holdingsData = await setHoldings(localStorage.getItem("publicKey"));
        setHoldingsData(holdingsData.items);
        setAllHoldings(holdingsData.items)
        console.log(holdingsData.items, " these are holdings");
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, [address]);


  const formatTxHash = (txHash) => {
    if (!txHash) return "";
    const start = txHash.slice(0, 5);
    const end = txHash.slice(-5);
    return `${start}.....${end}`;
  };
  const copyAddress = (tokenAddress) => {
    navigator.clipboard
      .writeText(tokenAddress)
      .then(() => {
        toast.success("Successfully copied Token!");
        console.log("Base token copied successfully");
      })
      .catch((error) => console.error("Error copying baseToken:", error));
  }

  return (
    <>
      <div className="table-responsive def-table">
        <table className="table table-dark">
          <thead>
            <tr className="border-0">
              <th scope="col"> Logo </th>
              <th scope="col"> Name </th>
              <th scope="col"> Symbol </th>
              <th scope="col"> Address</th>
              <th scope="col">Price Usd</th>
              {/* <th scope="col">Mint Address</th> */}
              <th scope="col">Balance</th>
              <th scope="col">Value Usd</th>
              <th scope="col">ChainId</th>
            </tr>
          </thead>
          <tbody className="border-top-0">
            {holdings.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  No holdings available
                </td>
              </tr>
            ) : (
              holdings.map((holding, index) =>
                holding.address !==
                  "So11111111111111111111111111111111111111111" ? (
                  <tr key={index} className="align-items-center">
                    <td style={{ verticalAlign: "middle" }}>
                      <img
                        className="rounded-circle"
                        height="40"
                        width="40"
                        src={holding.logoURI}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{holding.name}</td>
                    <td style={{ verticalAlign: "middle" }}>
                      {holding.symbol}
                    </td>
                    {/* <td>SOL STREET BETS</td> */}
                    {/* <td>{holding.address}</td> */}
                    <td onClick={() => { copyAddress(holding.address) }} style={{ verticalAlign: "middle" , cursor :"pointer" }}>
                      {formatTxHash(holding.address)}
                    </td>
                    {/* <td> 3XUv67...7uU8</td> */}
                    <td style={{ verticalAlign: "middle" }}>
                      ${holding.priceUsd}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      {holding.uiAmount}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      ${holding.valueUsd}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <img src={solIconImg} width="18px" alt="" />{" "}
                      {holding.chainId}
                    </td>
                  </tr>
                ) : null
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HoldingTable;
