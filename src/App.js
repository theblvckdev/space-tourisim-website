import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='font-barlow'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App