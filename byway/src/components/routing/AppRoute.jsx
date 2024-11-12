import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../screens/home/Home'
import SinglePage from '../screens/home/_components/SinglePage'

export const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/singlepage' element={<SinglePage/>} />
    </Routes>
    </>
  )
}
