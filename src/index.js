import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Concurrent Mode
const element = document.getElementById("root");
ReactDOM.unstable_createRoot(element).render(<App />);