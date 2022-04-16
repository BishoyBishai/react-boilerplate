import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ErrorPage } from './routes';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
