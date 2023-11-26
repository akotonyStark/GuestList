import './App.css';
import Table from "./Components/Room/Room";

import { useEffect, useState } from 'react';
import Room from './Components/Room/Room';
import GuestList from './Components/GuestList/GuestList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuestListPage from './pages/GuesListPage';
import ReceptionRoom from './pages/ReceptionRoom';

function App() {
   
    return (
        <div className="App">


               
            <header className='App-header'>
                <BrowserRouter basename="/app">
                    <Routes>
                        <Route exact path="/" /> {/* 👈 Renders at /app/ */}
                        <Route path="/guest-list" element={<GuestListPage />}/>
                        <Route exact path="/room" element={<ReceptionRoom />}/> 
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
