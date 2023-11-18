export default function Guest({color, image, guest, handleDragEvent, handleAllowDropEvent, handleDropEvent, setIsDragged}) {
    return (
        <div  
            style={{background:color}}
            id={guest?.id}
            onDragStart={(e) => handleDragEvent(e, guest)}
            onDragOver={(e) => handleAllowDropEvent(e)}
            onDrop={(e) => handleDropEvent(e, guest)}
            onDragEnd={() => setIsDragged(false)} draggable className='dnd-item'>
            <div>
                <img src={image}/>
                <p>{guest?.name}</p>
            </div>
        </div>
    )
}