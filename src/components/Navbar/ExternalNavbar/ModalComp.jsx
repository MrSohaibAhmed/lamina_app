import React from "react";
import { useEffect } from "react";
import solfareImg from "../../../assets/navbarImg/solfareimg.webp";
import phantomImg from "../../../assets/navbarImg/phantom.webp";
import usePhantom from "../../hooks/usePhantom";
import { checkUser } from "../../hooks/useWallet";
import './Navbar.css'

const ModalComp = ({ connectToPhantom, connectToSolflare }) => {

  const handleConnect = (value) => {

    if(value==='solfare'){

      connectToSolflare();
    }
    if(value==='phantom'){
      connectToPhantom()
    }
    const modalElement = document.getElementById('staticBackdrop');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    document.body.classList.add('overflow-auto');

    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
    if (modalBackdrop) {
      modalBackdrop.remove();
    }
  };



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
        data-bs-backdrop="false"
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
            <div className="modal-header background-transparent" >
              <h5 className="modal-title" id="staticBackdropLabel" >
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
              <div onClick={()=>handleConnect('solfare')} className="m-2 d-flex align-items-center px-2" data-bs-dismiss="modal" style={{ width: "260px" , backgroundColor:"#2e2e55" , borderRadius:"5px"}}>
                <span>
                  <img src={solfareImg} />
                </span>
                <button type="button" className=" bg-transparent text-white modalbtn" >
                  Connect to Solfare
                </button>
              </div>
              <div onClick={()=>handleConnect('phantom')} className="m-2 d-flex align-items-center px-2 " data-bs-dismiss style={{ width: "260px" , backgroundColor:"#2e2e55" , borderRadius:"5px"}}>
                <span>
                  <img src={phantomImg} />
                </span>
                <button type="button" className=" bg-transparent text-white modalbtn" >
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
