import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import FullPageDetails from './component/FullPageDetails';
import MainPage from './component/MainPage';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path="new-weather-app" element={<MainPage />} />
                <Route path="new-weather-app/fullPageDetails" element={<FullPageDetails />} />
            </Routes>

        </div>
    );
}

export default App;
