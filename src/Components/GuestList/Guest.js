export default function Guest({
    tableGuest,
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
    guestIndex,
    tableIndex,
    isDragging,
    changeStyleOnDrag
}) {
    return (
        <div
            id={tableIndex + '' + guestIndex}
            draggable
            onDragStart={(e) => handleDragStart(e, { tableIndex, guestIndex })}
            onDragEnd={(e) => handleDragEnd(e)}
            onDrop={isDragging ? (e) => {
                handleDragEnter(e, { tableIndex, guestIndex })
            } : null}
            onDragOver={(e) => e.preventDefault()}
            className={isDragging ? changeStyleOnDrag({ tableIndex, guestIndex }) : 'dnd-item-person'}>
            <div>
                <p>{tableGuest}</p>
            </div>
        </div>
    )
}