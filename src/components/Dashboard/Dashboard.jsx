import React from 'react'
import ChartBox from './DashBoardComponents/ChartBox'
import TabComp from './DashBoardComponents/TabComp'
import RightInnerBox from './DashBoardComponents/RightInnerBox'
import RightAccordian from './DashBoardComponents/RightAccordian'
import InternalNavbar from '../Navbar/InternalNabvar/InternalNavbar'

const Dashboard = () => {
  return (
    <>
    <InternalNavbar/>
    <div className='main'>
      <div class="container-fluid">
        <div class="row">
          {/* Left Side  */}
        <div class="col-lg-8 left-side">
          <ChartBox/>

          <TabComp/>
        </div>

        {/* Right Side  */}
        <div class="col-lg-4 right-side">
          <RightInnerBox/>
          <div class="my-3">
            <RightAccordian/>
          </div>
        </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Dashboard