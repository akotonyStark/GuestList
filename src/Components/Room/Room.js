import Guest from "../Table/Table";
import { useEffect, useState } from "react";
import man from '../../Assets/man.png'
import woman from '../../Assets/woman.png'
import Table from "../Table/Table";


export default function Room({ tables, rows, columns, borderRadius, height }) {
  const [tableData, setTableData] = useState([])
  const [, setIsDragged] = useState(false)
  const [orginGuest, setOriginGuest] = useState(null)
  const [destinationGuest, setDestinationGuest] = useState(null)

  const handleAllowDropEvent = (e) => {
    e.preventDefault();
  };

  const handleDragEvent = (e, startItem) => {
    // setOriginId(e.target.id);
    setOriginGuest(startItem)
    console.log('Origin A', startItem)
  };

  const handleDropEvent = (e, endItem) => {
    // setDestinationId(e.target.id);
    setDestinationGuest(endItem)
    console.log('Destination B', endItem)

  };

  // useEffect(() => {
  //   let startIndex= tableData.findIndex((item) => item.id === orginGuest?.id)
  //   let endIndex = tableData.findIndex((item) => item.id === destinationGuest?.id)
  //   //console.log(startIndex, endIndex)

  //   //swap Items
  //   tableData.Guests[startIndex] =  destinationGuest 
  //   tableData.Guests[endIndex] = orginGuest

  //   let copy = {...tableData}
  //   setTableData(copy)
  // }, [destinationGuest])

  useEffect(() => {
    setTableData(tables)
  }, [tables])


  return (
    <div
      className='dnd-table-group'
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
      {/* { tableData.Guests.slice(0,numOfTables).map((tableGuest, tableGuestIndex) =>
             <div className='group-title' style={{textAlign:'center'}}> Table {tableGuestIndex+1}</div> 
            )
            } */}
      {/* { tableData.Guests.map((tableGuest, tableGuestIndex) =>
                <Guest 
                    // color= {tableGuest.table == 1 ? '#282c34' : tableGuest.table == 2 ? '#EE700D' : tableGuest.table == 3  ? '#008179' : 'white'}
                    // image={tableGuest.Sex == 'M' ? man : woman}
                    // key={tableGuestIndex} 
                    // guest={tableGuest}
                    handleDragEvent = {(e) => handleDragEvent(e, tableGuest)}
                    handleDropEvent = {(e) => handleDropEvent(e, tableGuest)}
                    handleAllowDropEvent = {handleAllowDropEvent}
                    setIsDragged={setIsDragged}/>
            )
            } */}
      {tableData?.map((table, idx) => 
      <Table 
        key={idx}
        table={table} 
        handleDragEvent={(e) => handleDragEvent(e, table)}
        handleDropEvent={(e) => handleDropEvent(e, table)}
        handleAllowDropEvent={handleAllowDropEvent}
        setIsDragged={setIsDragged} 
        color= {'#282c34'}
        borderRadius={borderRadius}
        height = {height}
        label={`Table ${idx+1}`}
        />)}
    </div>
  )
}