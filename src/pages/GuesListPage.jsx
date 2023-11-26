import React from 'react'
import GuestList from '../Components/GuestList/GuestList'
import { Link } from 'react-router-dom'

function GuestListPage() {
  return (
    <>
        <div>Welcome to the Guest List Management Page</div>
        <GuestList />
        <Link to={'/room'}><button>Proceed to Room</button></Link>
    </>
  )
}

export default GuestListPage