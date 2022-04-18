import { ThemeProvider } from '@mui/system';
import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TMode } from './models';
import { HomePage, ErrorPage } from './routes';
import { ThemeModeContext } from './services/style/themeContext';
import { lightTheme } from './themes';
import { darkTheme } from './themes/dark';
import { createTheme } from '@mui/material/styles';

function App() {
    const [mode, setMode] = useState<TMode>('dark');

    const theme = useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode]);

    return (
        <ThemeModeContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}

export default App;
