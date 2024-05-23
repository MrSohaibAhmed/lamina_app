import React from "react";
import { useEffect } from "react";
import solfareImg from "../../../assets/navbarImg/solfareimg.webp";
import phantomImg from "../../../assets/navbarImg/phantom.webp";
import usePhantom from "../../hooks/usePhantom";
import { checkUser } from "../../hooks/useWallet";

const ModalComp = () => {
  const {
    connectToPhantom,
    connected,
    signMessage,
    newUsersignMessage,
    solanaKey,
    connectToSolflare,
    SignMessageWithSolflare,
    newSignMessageWithSolflare,
  } = usePhantom();
  useEffect(() => {
    //debugger;
    if (solanaKey) {
      checkUser(solanaKey)
        .then((res) => {
          // //debugger
          localStorage.setItem("publicKey", res?.data?.data.publicKey);
          console.log("user found");
          if (localStorage.getItem("connectedToSolflare")) {
            SignMessageWithSolflare();
          } else {
            signMessage();
          }
        })
        .catch((error) => {
          if (localStorage.getItem("connectedToSolflare")) {
            newSignMessageWithSolflare();
          } else {
            newUsersignMessage();
          }

          console.log("user not found");
          console.error("Error checking user:", error);
        });
    }
  }, [solanaKey]);
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Connect to Wallet
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div
            className="modal-content"
            style={{ backgroundColor: "#10141f", color: "#ffffff" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Connect to Wallets
              </h5>

              <button
                style={{
                  color: "#ffffff",
                  filter: "invert(1)",
                  WebkitFilter: "invert(1)",
                  MozFilter: "invert(1)",
                  OFilter: "invert(1)",
                  msFilter: "invert(1)",
                }}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                onClick={connectToSolflare}
                className="m-2 d-flex"
                style={{ width: "250px" }}
              >
                <span>
                  <img src={solfareImg} />
                </span>
                <button type="button">Connect to Solfare</button>
              </div>
              <div
                onClick={connectToPhantom}
                className="m-2 "
                style={{ width: "250px", backgroundColor: "green" }}
              >
                <span>
                  <img src={phantomImg} />
                </span>
                <button type="button">Connect to Phantom</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComp;
