import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path ='/projects' element={<Project/>}/>
      <Route path ='/employees' element={<Employees/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
