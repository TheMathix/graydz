import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import styled from 'styled-components';
import AccountHome from './components/pages/AccountHome';
import Class from './components/pages/Class';

const AppContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () =>{ 
  


  
  
  return(
  
  <>
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' exact component={Login}/>
        <Route path='/accounthome' exact component={AccountHome}/>
        <Route path='/class' exact component={Class}/>

      </Switch>
    </Router>
  </>
  
)};
export default App;
