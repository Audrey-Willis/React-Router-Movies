import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router} from 'react-router-dom'  //imported browser router as the router 
import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
    <App/>
    </Router> , document.getElementById('root'));   //refactored code to wrap the app in the router.
