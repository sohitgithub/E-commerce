import React from 'react'
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import Nav from './Nav'
import Jewelry from './Jwelary'

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Jwellary" element={<Jewelry></Jewelry>}></Route>
        <Route path="/electronic" element={<About></About>}></Route>
        <Route path="/Mens" element={<Contact></Contact>}></Route>
        <Route path="/Womens" element={<PageNotFound></PageNotFound>}></Route>

       </Routes>
      </BrowserRouter>
    </div>
  )
}

