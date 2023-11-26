import React, { useEffect, useRef, useState } from 'react'
import TableList from '../TableList/TableList'

import Guest from './Guest';

function GuestList({tableData, setTableData}) {

  const [isDragging, setIsDragging] = useState(false)
  const draggedCoordinates = useRef()
  const draggedNode = useRef()

  useEffect(() => {
    //console.log("TD", tableData)
  }, [tableData])
  const handleDragStart = (e, params) => {
    draggedNode.current = e.target
    draggedCoordinates.current = params
    setTimeout(() => {
      setIsDragging(prevState => {
        if (!prevState) {
          return true
        }
      })
    }, 0)
  }

  const handleDragEnd = (e) => {
    draggedNode.current = null
    draggedCoordinates.current = null
    setIsDragging(prevState => {
      if (prevState) {
        return false
      }
    })

  }

  const handleDragEnter = (e, params) => {
    const currGuest = draggedCoordinates.current
    if (draggedNode.current !== e.target) {
      setTableData(prevState => {
        let newState = JSON.parse(JSON.stringify(prevState))
        newState[params.tableIndex].Guests.splice(params.guestIndex, 0, newState[currGuest.tableIndex].Guests.splice(currGuest.guestIndex, 1)[0])
        draggedCoordinates.current = params
        return newState
      })
    }
  }

  const changeStyleOnDrag = (params) => {
    const currentDraggedItem = draggedCoordinates.current
    if (currentDraggedItem.guestIndex === params.guestIndex && currentDraggedItem.tableIndex === params.tableIndex) {
      return 'dnd-item-person current'
    }
    return 'dnd-item-person'
  }

  return (
    <div>
      <div className='drag-n-drop-guest-list'
        onDragOver={(e) => e.preventDefault()}
      >
        {tableData.map((table, tableIndex) =>
          <TableList
            key={tableIndex}
            {...table}
            tableIndex={tableIndex}
            isDragging={isDragging}
            handleDragEnterTable={handleDragEnter}

          >
            {table.Guests.map((tableGuest, tableGuestIndex) =>
            (
              <Guest
                id={tableIndex + '' + tableGuestIndex}
                key={tableIndex + '' + tableGuestIndex}
                tableGuest={tableGuest}
                handleDragStart={handleDragStart}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
                guestIndex={tableGuestIndex}
                tableIndex={tableIndex}
                isDragging={isDragging}
                changeStyleOnDrag={changeStyleOnDrag}
              />
            )
            )
            }
          </TableList>
        )
        }
      </div>
    </div>
  )
}

export default GuestList