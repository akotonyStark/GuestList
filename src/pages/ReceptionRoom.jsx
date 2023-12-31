import React, { useEffect, useState } from 'react'
import { Data as Guests } from "../Assets/data";
import Room from '../Components/Room/Room';
import { useLocation } from 'react-router-dom';

function ReceptionRoom({}) {


    const {state} = useLocation()
    // console.log("State", state)

    const [rows, setRows] = useState(3)
    const [columns, setColumns] = useState(3)
    const [borderRadius, setBorderRadius] = useState('2%')
    const [height, setHeight] = useState(150)
    const [tableData, setData] = useState([])
    const [guestList, setGuestList] = useState([])
    const [guestArrangements, setGuestsArrangements] = useState([])

    useEffect(() => {
        let flatData = state.flat()
        let mapped = flatData.map((values) => {
            return {
                tableID: values.table,
                guestsOnTable: values.Guests
            }
        })
        console.log(mapped, 'Flat Data')

        setGuestList(flatData)
        //setGuestList(Guests)
        //setGuestList([...mapped, ...Guests])
      }, [])
    

    useEffect(() => {
        let arr = (new Array(rows * columns).fill(null).map((u, i) => {
            return {
                tableID: i + 1,
                guestsOnTable: []
            }
        }))
        setData(arr)
        setGuestsArrangements(arr)
    }, [rows, columns])

    useEffect(() => {
        // console.log("Tables:", tableData)
        // console.log("Guests:", guestList)

        let mappedData
        let copy = [...tableData]
        mappedData = copy.map((table) => {
            return {
                ...table,
                guestsOnTable: [...table.guestsOnTable, ...guestList.filter((guest) => guest.table == table.tableID)]
            }
        })
    
        console.log(mappedData)
        setGuestsArrangements(mappedData)


    }, [ tableData])

 

    return (
        <div>
            <div className='row'>
                <label>How many rows and columns do you want in the hall? </label>
                <input type='text' value={rows} onChange={(e) => setRows(e.target.value)} style={{ height: 40, width: 40, textAlign: 'center', fontSize: 19, borderRadius: 50, padding: 5 }} />
                {' '} <input type='text' value={columns} onChange={(e) => setColumns(e.target.value)} style={{ height: 40, width: 40, textAlign: 'center', fontSize: 19, borderRadius: 50, padding: 5 }} />
            </div>
            <div className='row' style={{ marginTop: 10 }}>
                <label>What type of tables do you prefer? </label>
                <button style={{ width: 200, height: 50 }} onClick={(e) => {
                    setBorderRadius('2%'); setHeight(150)
                }}>Rectangular</button>
                <button style={{ width: 200, height: 50 }} onClick={(e) => { setBorderRadius('100%'); setHeight(150) }}>Oval</button>
            </div>
            <div className='drag-n-drop'>
                <Room tables={guestArrangements} rows={rows} columns={columns} borderRadius={borderRadius} height={height} />
            </div>
        </div>
    )
}

export default ReceptionRoom