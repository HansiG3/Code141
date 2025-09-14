import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Set base URL for axios
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
