import React from 'react'
import LuminaWallets from './components/LuminaWallet/Index'
import Step2 from './components/LuminaWallet/Step2'
import Step3 from './components/LuminaWallet/Step3'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'


function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="step1" element={ <LuminaWallets/>} />
      <Route path="step2" element={ <Step2/>} />
      <Route path="step3" element={ <Step3/>} />
    </Routes>
    </>
  )
}

export default App
