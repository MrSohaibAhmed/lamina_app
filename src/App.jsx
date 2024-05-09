import React from 'react'
import LuminaWallets from './components/LuminaWallet/Index'
import Step2 from './components/LuminaWallet/Step2'
import Step3 from './components/LuminaWallet/Step3'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import InternalNavbar from './components/Navbar/InternalNabvar/InternalNavbar'
import Dashboard from './components/Dashboard/Dashboard'
import { KeyProvider } from './context/KeyProvider'


function App() {


  return (

    <KeyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="step1" element={<LuminaWallets />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </KeyProvider>
  )
}

export default App
