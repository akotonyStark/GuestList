export default function Table({tableDetails,label, borderRadius, height, color, image, guest, handleDragEvent, handleAllowDropEvent, handleDropEvent, setIsDragged}) {
    return (
        <div  
            style={{background:color, borderRadius:borderRadius, height: height}}
            //id={guest?.id}
           // onDragStart={(e) => handleDragEvent(e, guest)}
            //onDragOver={(e) => handleAllowDropEvent(e)}
           // onDrop={(e) => handleDropEvent(e, guest)}
            onDragEnd={() => setIsDragged(false)} draggable className='dnd-item'>
            <div>
            <p>{label}</p>
            <p style={{fontSize:10}}>
                {JSON.stringify(tableDetails?.guestsOnTable, null, 2)}
                {/* {tableDetails?.guestsOnTable?.map((guest) => <span style={{color:'red'}}>{guest?.name}</span>)} */}
            </p>
                {/* <img src={image}/>
                <p>{guest?.name}</p> */}
            </div>
        </div>
    )
}