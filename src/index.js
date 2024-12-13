import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from "react-router-dom";
import movieRouter from './components/Movirdb';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={movieRouter} />);


