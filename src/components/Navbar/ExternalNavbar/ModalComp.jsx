import React from "react";
import { useEffect } from "react";
import solfareImg from "../../../assets/navbarImg/solfareimg.webp";
import phantomImg from "../../../assets/navbarImg/phantom.webp";
import usePhantom from "../../hooks/usePhantom";
import { checkUser } from "../../hooks/useWallet";

const ModalComp = ({ connectToPhantom, connectToSolflare }) => {
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
            <div className="modal-header background-transparent">
              <h5 className="modal-title" id="staticBackdropLabel">
               Choose Any Wallet
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
                className="m-2 d-flex align-items-center px-2"
                style={{
                  width: "260px",
                  backgroundColor: "#2e2e55",
                  borderRadius: "5px",
                }}
              >
                <span>
                  <img src={solfareImg} />
                </span>
                <button type="button" className=" bg-transparent">
                  Connect to Solfare
                </button>
              </div>
              <div
                onClick={connectToPhantom}
                className="m-2 d-flex align-items-center px-2 "
                style={{
                  width: "260px",
                  backgroundColor: "#2e2e55",
                  borderRadius: "5px",
                }}
              >
                <span>
                  <img src={phantomImg} />
                </span>
                <button type="button" className=" bg-transparent ">
                  Connect to Phantom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComp;
