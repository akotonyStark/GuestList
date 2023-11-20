import './App.css';
import Table from "./Components/Room/Room";
import {Data} from "./Assets/data";
import { useEffect, useState } from 'react';
import Room from './Components/Room/Room';

function App() {
    const [rows, setRows] = useState(3)
    const [columns, setColumns] = useState(3)
    const [borderRadius, setBorderRadius] = useState('2%')
    const [height, setHeight] = useState(150)
    const [data, setData] = useState([])

    useEffect(() => {
        //let arr = new Array(rows).fill(new Array(columns).fill({name:''}))
        
        setData(new Array(rows * columns).fill({name:'', id: 0}))
    }, [rows, columns])



    useEffect(() => {
        console.log("DATA:", data)
    }, [data])
    return (
        <div className="App">
            
             
            <header className='App-header'>
            <div className='row'>
                <label>How many rows and columns do you want in the hall? </label>
                <input type='text' value={rows} onChange={(e) => setRows(e.target.value)}  style={{height:40, width: 40, textAlign:'center', fontSize:19, borderRadius:50, padding:5}}/>
                {' '} <input type='text' value={columns} onChange={(e) => setColumns(e.target.value)}  style={{height:40, width: 40, textAlign:'center', fontSize:19, borderRadius:50, padding:5}}/>
            </div>
            <div className='row' style={{marginTop: 10}}>
                <label>What type of tables do you prefer? </label>
                <button style={{width:200, height:50}} onClick={(e) => { 
                    setBorderRadius('2%'); setHeight(150)
                }}>Rectangular</button>
                <button style={{width:200, height:50}} onClick={(e) => {setBorderRadius('100%'); setHeight(150)}}>Oval</button>
            </div>
                <div className='drag-n-drop'>
                    <Room tables = {data} rows={rows} columns={columns} borderRadius={borderRadius} height={height}/>
                   
                    {/* {data?.map((table, tableIndex) =>
                        <Table key={tableIndex} table = {table} rows={rows} columns={columns}/>
                         )
                    } */}
                   
                   
                </div>

            </header>
        </div>
    );
}

export default App;
