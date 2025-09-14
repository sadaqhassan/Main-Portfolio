import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'

const App = () => {
  return (
   <>
   <Nav/>
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </>
   </>
  )
}

export default App