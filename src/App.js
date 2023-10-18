import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
// import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import {Card} from './features/card/Card';
// import { Card } from './features/card/Card'
import Home from './pages/Home';
import Grid from './features/grid/Grid';
import GridUser from './features/gridUser/GridUser';
import GridPriority from './features/gridPriority/GridPriority';
import GridUserpage from './pages/GridUserpage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
]);

function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
