import Guest from "../Guest/Guest";
import {useEffect, useState} from "react";
import man from '../../Assets/man.png'
import woman from '../../Assets/woman.png'


export default function Table({table,numOfTables}) {
    const [tableData, setTableData] = useState(table)
    const [,setIsDragged] = useState(false)
    const [orginGuest, setOriginGuest] = useState(null)
    const [destinationGuest, setDestinationGuest] = useState(null)
 
console.log(numOfTables)


  const handleAllowDropEvent = (e) => {
    e.preventDefault();
  };

  const handleDragEvent = (e, startItem) => {
   // setOriginId(e.target.id);
    setOriginGuest(startItem)
   // console.log('Guest A', startItem)
  };

  const handleDropEvent = (e, endItem) => {
   // setDestinationId(e.target.id);
    setDestinationGuest(endItem)
   // console.log('Guest B', endItem)

  };

  useEffect(() => {
    let startIndex= tableData.Guests.findIndex((item) => item.id === orginGuest?.id)
    let endIndex = tableData.Guests.findIndex((item) => item.id === destinationGuest?.id)
    //console.log(startIndex, endIndex)
        
    //swap Items
    tableData.Guests[startIndex] =  destinationGuest 
    tableData.Guests[endIndex] = orginGuest

    let copy = {...tableData}
    setTableData(copy)
  }, [destinationGuest])

  useEffect(() => {
    console.log(tableData) 
  }, [tableData])

 
    return (
        <div className='dnd-table-group' style={{gridTemplateColumns: `repeat(${numOfTables}, 1fr)`}}>
            { tableData.Guests.slice(0,numOfTables).map((tableGuest, tableGuestIndex) =>
             <div className='group-title' style={{textAlign:'center'}}> Table {tableGuestIndex+1}</div> 
            )
            }
            { tableData.Guests.map((tableGuest, tableGuestIndex) =>
                <Guest 
                    color= {tableGuest.table == 1 ? '#282c34' : tableGuest.table == 2 ? '#EE700D' : tableGuest.table == 3  ? '#008179' : 'white'}
                    image={tableGuest.Sex == 'M' ? man : woman}
                    key={tableGuestIndex} 
                    guest={tableGuest}
                    handleDragEvent = {(e) => handleDragEvent(e, tableGuest)}
                    handleDropEvent = {(e) => handleDropEvent(e, tableGuest)}
                    handleAllowDropEvent = {handleAllowDropEvent}
                    setIsDragged={setIsDragged}/>
            )
            }
        </div>
    )
}