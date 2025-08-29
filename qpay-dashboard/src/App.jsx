import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import './index.css'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { ProfilePage } from './pages/ProfilePage'
import { QRPage } from './pages/QRPage'

const App = () => {
  return (
    <div className="font-gilroy">
      <Router>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 md:pr-12  m-2 md:m-0 md:mt-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qr" element={<QRPage />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>

  )
}

export default App

