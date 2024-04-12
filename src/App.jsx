import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'
import Ministries from './components/Ministries/Ministries'
import Donate from './components/Donate/Donate'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <main id='App' className='' style={{width: window.innerWidth, height: window.innerHeight}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/ministries' element={<Ministries />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> 
      </main>
    </Router>
  )
}

export default App
