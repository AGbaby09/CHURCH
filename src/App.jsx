
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import {useState, useRef} from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'
import Ministries from './components/Ministries/Ministries'
import Donate from './components/Donate/Donate'
import Contact from './components/Contact/Contact'
import NewHome from './components/NewHome/NewHome'
import NewNavbar from './components/NewNavbar/NewNavbar'
import About from './components/About/About'
import NewAbout from "./components/NewAbout/NewAbout";

function App() {
  const [count, setCount] = useState(0)

  const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

  return (
    <Router>
      <motion.main ref={ref} id='App' className='trans scrollable' style={{width: window.innerWidth, height: window.innerHeight}}>
      <motion.div className="scrolling" style={{ scaleX }}/>
      <NewNavbar blur={true} />
        <div className="outlets full">
          <Routes>
            <Route path='/' element={<NewHome />} />
            <Route path='/about' element={<NewAbout />} />
            <Route path='/events' element={<Events />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/ministries' element={<Ministries />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> 
        </div>
      </motion.main>
    </Router>
  )
}

export default App
