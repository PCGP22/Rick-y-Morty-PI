import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function ConNav(props) {
  return (
    <>
        <Nav logout={props.logout}/>
        <Outlet/>
    </>

  )
}

export default ConNav