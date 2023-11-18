import './App.css';
import Table from "./Components/Table/Table";
import {Data} from "./Assets/data";
import { useState } from 'react';

function App() {
    const [numOfTables, setNumOfTables] = useState(3)
    return (
        <div className="App">
            
             
            <header className='App-header'>
            <div className='row'>
            <label>How many tables do you want? </label><input type='text' value={numOfTables} onChange={(e) => setNumOfTables(e.target.value)}  style={{height:40, width: 40, textAlign:'center', fontSize:19, borderRadius:50, padding:5}}/>
            </div>
                <div className='drag-n-drop'>

                   
                    {Data.map((table, tableIndex) =>
                        <Table key={tableIndex} table = {table} numOfTables={numOfTables}/>
                    )
                    }
                    {/*<Table/>*/}
                    {/*<Table />*/}
                </div>

            </header>
        </div>
    );
}

export default App;
