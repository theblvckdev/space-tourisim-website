import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Destination from './pages/destination/destination'

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
          <Route exact path='/destination' element={<Destination />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App