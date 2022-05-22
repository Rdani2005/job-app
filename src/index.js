// ------------------- Libraries -------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
// ------------------- Components ------------------------
import App from './App';
// ----------------- CSS ---------------------------
import './css/App.css';
import ContextProvider from './context/ContextProvider';
// --------------------- RENDER ---------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
