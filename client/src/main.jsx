import React from 'react'
import ReactDOM from 'react-dom'
import MyRoute from './MyRoute'
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'

ReactDOM.render(
  <React.StrictMode>
       <Router>
    <MyRoute />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
