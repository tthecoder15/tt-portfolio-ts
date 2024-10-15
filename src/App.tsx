// import React from 'react'
// import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/projects" Component={Projects}/>
      </Routes>
    </>
  )
}

export default App