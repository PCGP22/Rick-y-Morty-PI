import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function ConNav() {
  return (
    <>
        <Nav logout={logout}/>
        <Outlet/>
    </>

  )
}

export default ConNav