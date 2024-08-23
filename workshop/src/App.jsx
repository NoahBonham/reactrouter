import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Blue from './conponents/blue'
import Red from './conponents/red'
import './App.css'
import Home from './conponents/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">

    <Link to="/blue">Blue</Link>
    <Link to='/'>Home</Link>
    <Link to='/red'>Red</Link>

      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/red' element={<Red />}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
