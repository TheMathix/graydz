import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import styled from 'styled-components';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const AppContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;




const App = () => (
  
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' exact component={Login}/>
      </Switch>
      </Router>
    </>
  
);
export default App;
