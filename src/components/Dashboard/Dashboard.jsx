import React, { useContext, useState, useEffect } from "react";
import ChartBox from "./DashBoardComponents/ChartBox";
import TabComp from "./DashBoardComponents/TabComp";
import RightInnerBox from "./DashBoardComponents/RightInnerBox";
import RightAccordian from "./DashBoardComponents/RightAccordian";
import InternalNavbar from "../Navbar/InternalNabvar/InternalNavbar";
import KeyContext from "../../context/walletContext";
import "./Dashboard.css";
import axios from "axios";
const Dashboard = () => {
  const { solBalance, coinsKey, noDetails } = useContext(KeyContext);
  const [key, setKey] = useState(0); // State to manage the key for ChartBox component

  const coinKeyLength = coinsKey.length;
  console.log("coin key length =", coinKeyLength);

  // Function to update key when data prop changes
  const updateKey = () => {
    setKey((prevKey) => prevKey + 1);
  };

  // const checkZoomLevel = () => {
  //   const zoomLevel = Math.round(window.devicePixelRatio * 100);

  //   const elementsToHide = document.querySelectorAll(".hide-on-zoom");
  //   if (zoomLevel >= 175) {
  //     elementsToHide.forEach((element) => {
  //       element.classList.add("hidden");
  //     });
  //   } else {
  //     elementsToHide.forEach((element) => {
  //       element.classList.remove("hidden");
  //     });
  //   }
  // };

  useEffect(() => {
    updateKey();
  }, [coinsKey]);

  // useEffect(() => {
  //   window.addEventListener("resize", checkZoomLevel);
  //   checkZoomLevel(); // Check initially

  //   return () => {
  //     window.removeEventListener("resize", checkZoomLevel);
  //   };
  // }, []);
  return (
    <>
      <InternalNavbar />
      {noDetails === true ? (
        <div
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <center>
            <h3 className=" pt-5">
              Sorry 😥 We Are not Dealing With This Pair Right Now .{" "}
            </h3>
            <h3>Try Searching Another One 😃</h3>
          </center>
        </div>
      ) : (
        <div>
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                {/* Left Side  */}
                <div className="col-lg-9 left-side">
                  <div className="hide-on-zoom">
                    <MemoizedChartBox key={key} data={coinsKey} />
                  </div>
                  <div>
                    <TabComp data={coinsKey} />
                  </div>
                </div>
                {/* Right Side  */}
                <div className="col-lg-3 right-side">
                  <RightInnerBox
                    // checkZoomLevel={checkZoomLevel}
                    data={coinsKey}
                    solBalance={solBalance}
                  />
                  <div className="my-3 hide-on-zoom">
                    <RightAccordian data={coinsKey} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Memoized ChartBox component
const MemoizedChartBox = React.memo(ChartBox, (prevProps, nextProps) => {
  // //debugger
  // Compare the symbols in the previous and next props
  return (
    prevProps.data?.pairs?.[0]?.baseToken.symbol ===
    nextProps.data?.pairs?.[0]?.baseToken.symbol
  );
});

export default Dashboard;
