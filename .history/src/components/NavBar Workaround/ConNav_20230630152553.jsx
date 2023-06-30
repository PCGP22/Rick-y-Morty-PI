import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function ConNav() {
  return (
    <Nav/>
    <Outlet/>
  )
}

export default ConNav