import React, { useContext } from 'react'
import ChartBox from './DashBoardComponents/ChartBox'
import TabComp from './DashBoardComponents/TabComp'
import RightInnerBox from './DashBoardComponents/RightInnerBox'
import RightAccordian from './DashBoardComponents/RightAccordian'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'
import KeyContext from '../../context/walletContext'
const Dashboard = () => {
  const { coinsKey } = useContext(KeyContext);
  return (
    <>
      <InternalNavbar />
      <div className='main'>
        <div class="container-fluid">
          <div class="row">
            {/* Left Side  */}
            <div class="col-lg-8 left-side">
              <ChartBox data={coinsKey} />

              <TabComp data={coinsKey} />
            </div>

            {/* Right Side  */}
            <div class="col-lg-4 right-side">
              <RightInnerBox data={coinsKey} />
              <div class="my-3">
                <RightAccordian data={coinsKey} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard