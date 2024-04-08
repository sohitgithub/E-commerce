import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/Service">Service page</Link>
      <Link to="/About">About page</Link>
      <Link to="/Contact">Contact page</Link>
      <Link to="*">mat chuu page</Link>


    </div>
  )
}
