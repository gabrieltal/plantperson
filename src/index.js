import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Art from './pages/Art';
import Sad from './pages/Sad';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: '/art',
    element: <Art />,
  },
  {
    path: '/sad',
    element: <Sad />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
