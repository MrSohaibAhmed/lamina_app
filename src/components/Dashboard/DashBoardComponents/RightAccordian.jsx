import React, { useEffect, useState } from "react";
import "../Dashboard.css";
import { setDataAndSecurity } from "../../hooks/useTransactions";
import toast, { Toaster } from "react-hot-toast";

const RightAccordian = ({ address }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await setDataAndSecurity(
          address.pairs[0].baseToken.address
        );
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [address]);
  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 3)}...${address.slice(-3)}`;
  };
  function epochToDateTime(epochTime) {
    const epochMilliseconds = epochTime * 1000;
    const date = new Date(epochMilliseconds);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const standardTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return standardTime;
  }

  const copyAddress = (value) => {
    navigator.clipboard.writeText(value);
    console.log("address value is=>" , value);
    toast.success("Successfully copied Wallet Address!");
  };

  return (
    <div className="accordion accordion-flush bg-dark" id="accordionFlush">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingtwo">
          <button
            className="accordion-button accordion-button-inner collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsetwo"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Data & security
          </button>
        </h2>
        <div
          id="flush-collapsetwo"
          className="accordion-collapse accordion-body-inner collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlush"
        >
          <div className="accordion-body data-table">
            {" "}
            <table className="table">
              <tbody>
                <tr>
                  <td> Mint Authority</td>
                  <td className="text-end text-danger">
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>{" "}
                    {data?.mintSlot ? "Enabled" : "Disabled"}
                  </td>
                </tr>
                <tr>
                  <td> Freeze Authority</td>
                  <td className="text-end text-success">
                    {data?.freezeAuthority ? data.freezeAuthority : "Disabled"}
                  </td>
                </tr>
                <tr>
                  <td>Total Supply</td>
                  <td className="text-end text-danger">
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>{" "}
                    {data?.totalSupply}
                  </td>
                </tr>

                <tr>
                  <td>Owner Balance</td>
                  <td className="text-end">
                    {data?.ownerBalance ? data.ownerBalance : "0"}
                  </td>
                </tr>
                <tr>
                  <td>Owner Precentage</td>
                  <td className="text-end">
                    {data?.ownerPercentage ? data.ownerPercentage : "0"}
                  </td>
                </tr>
                <tr>
                  <td>Fee Transfer Enable</td>
                  <td className="text-end">
                    {data?.transferFeeEnable ? "true " : "false"}
                  </td>
                </tr>
                <tr>
                  <td>Update Authority</td>
                  <td className="text-end">
                    {data?.metaplexOwnerUpdateAuthority ? "true " : "false"}
                  </td>
                </tr>
                <tr>
                  <td> Is Token 2022</td>
                  <td className="text-end">
                    {data?.isToken2022 ? "true " : "false"}
                  </td>
                </tr>
                <tr>
                  <td> Top 10 Holders</td>
                  <td className="text-end text-danger">
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>{" "}
                    {(data?.top10HolderPercent * 100).toFixed(2)}%
                  </td>
                </tr>
                <tr>
                  <td> Deployer</td>
                  <td className="text-end" onClick={()=>copyAddress(data.creatorAddress)}>
                    <a href="#">{truncateAddress(data.creatorAddress)}</a>
                  </td>
                </tr>
                <tr>
                  <td> Open Trading</td>
                  <td className="text-end">
                    {epochToDateTime(data?.creationTime)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAccordian;
