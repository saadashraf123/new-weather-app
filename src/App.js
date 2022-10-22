import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DetailPage from './component/DetailPage';
import FullPageDetails from './component/FullPageDetails';
import MainPage from './component/MainPage';
import Weather from './component/Weather';

function App() {
    return (
        <div className='App'>
            <Routes>
                {/* <Weather /> */}
                {/* <DetailPage /> */}
                <Route path="/" element={<MainPage />} />
                <Route path="fullPageDetails" element={<FullPageDetails />} />
            </Routes>

        </div>
    );
}

export default App;