import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Table from "../pages/Table.jsx";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/Table' element={<Table/>}/>
      </Switch>
    </Router>
  )
}

export default App;