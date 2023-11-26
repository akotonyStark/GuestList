import Guest from "../Table/Table";
import { useEffect, useState } from "react";
import man from '../../Assets/man.png'
import woman from '../../Assets/woman.png'
import Table from "../Table/Table";


export default function Room({ tables, rows, columns, borderRadius, height }) {
  const [tableData, setTableData] = useState([])
  const [, setIsDragged] = useState(false)
  const [orgin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)

  const handleAllowDropEvent = (e) => {
    e.preventDefault();
  };

  const handleDragEvent = (e, startItem) => {
    // setOriginId(e.target.id);
    setOrigin(startItem)
    console.log('Origin A', startItem)
  };

  const handleDropEvent = (e, endItem) => {
    // setDestinationId(e.target.id);
    setDestination(endItem)
    console.log('Destination B', endItem)

  };

  useEffect(() => {
    let startIndex= tableData.findIndex((item) => item.tableID === orgin?.tableID)
    let endIndex = tableData.findIndex((item) => item.tableID === destination?.tableID)
    console.log(startIndex, endIndex)

    //swap Items
    tableData[startIndex] =  destination
    tableData[endIndex] = orgin

    console.log(tableData, 'Table Data')
    let copy = [...tableData]
    console.log(copy, "Copy")
    setTableData(copy)
  }, [destination])

  useEffect(() => {
    setTableData(tables)
    //console.log(tableData, 'TD')
  }, [tables])


  return (
    <div
      className='dnd-table-group'
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>

      {tableData?.map((tableDetails, idx) => 
        <Table 
          key={idx}
          tableDetails={tableDetails} 
          handleDragEvent={(e) => handleDragEvent(e, tableDetails)}
          handleDropEvent={(e) => handleDropEvent(e, tableDetails)}
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