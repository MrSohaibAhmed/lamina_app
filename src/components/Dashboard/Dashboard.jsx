import React, { useContext, useState, useEffect } from 'react';
import ChartBox from './DashBoardComponents/ChartBox';
import TabComp from './DashBoardComponents/TabComp';
import RightInnerBox from './DashBoardComponents/RightInnerBox';
import RightAccordian from './DashBoardComponents/RightAccordian';
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar';
import KeyContext from '../../context/walletContext';

const Dashboard = () => {
  const { coinsKey, noDetails } = useContext(KeyContext);
  const [key, setKey] = useState(0); // State to manage the key for ChartBox component

  const coinKeyLength = coinsKey.length;
  console.log("coin key length =", coinKeyLength);

  // Function to update key when data prop changes
  const updateKey = () => {
    setKey(prevKey => prevKey + 1);
  }

  useEffect(() => {
    updateKey();
  }, [coinsKey]);

  return (
    <>
      <InternalNavbar />
      {noDetails === true ? (
        <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <center>
            <h3 className=' pt-5'>Sorry 😥 We Are not Dealing With This Pair Right Now . </h3>
            <h3>Try Searching Another One 😃</h3>
          </center>
        </div>
      ) : (
        <div>
          <div className='main'>
            <div className="container-fluid">
              <div className="row">
                {/* Left Side  */}
                <div className="col-lg-8 left-side">
                  <MemoizedChartBox key={key} data={coinsKey} />
                  <TabComp data={coinsKey} />
                </div>
                {/* Right Side  */}
                <div className="col-lg-4 right-side">
                  <RightInnerBox data={coinsKey} />
                  <div className="my-3">
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
}

// Memoized ChartBox component
const MemoizedChartBox = React.memo(ChartBox, (prevProps, nextProps) => {
  // debugger
  // Compare the symbols in the previous and next props
  return prevProps.data?.pairs?.[0]?.baseToken.symbol === nextProps.data?.pairs?.[0]?.baseToken.symbol;
});

export default Dashboard;
