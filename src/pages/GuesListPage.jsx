import React, { useState } from 'react'
import GuestList from '../Components/GuestList/GuestList'
import { Link } from 'react-router-dom'
import {Data} from "../Assets/guests"
import Slider from '../Components/Slider/Slider'

function GuestListPage() {
  const [tableData, setTableData] = useState(Data)

  return (
    <>
        <div>Welcome to the Guest List Management Page</div>
        <Slider/>
        <GuestList tableData={tableData} setTableData={setTableData}/>
        <Link to='/room' state={tableData}><button>Proceed to Room</button></Link>
    </>
  )
}

export default GuestListPage