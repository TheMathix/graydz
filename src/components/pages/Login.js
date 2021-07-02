import React from 'react';
import '../../App.css'
import Footer from '../items/Footer'
import {AccountBox} from '../accountBox/';
import Navbar from '../items/Navbar';

function Login(){
  return (
    <>
      <Navbar />
      <AccountBox />
      <Footer />
    </>
  );
}

export default Login;
