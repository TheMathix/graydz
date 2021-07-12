import React, {useState, useEffect} from 'react';
import '../../App.css'
import Footer from '../items/Footer'
import Navbar from '../items/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import {getinfo} from '../../actions/userinfo';
import ClassCards from '../items/ClassCards';

function AccountHome() {


  return (
    <>
      <Navbar />
        <Sidebar>
          
        </Sidebar>
        
        <ClassCards>
            
        </ClassCards>
        <div style={{height:"600px"}}></div>
      <Footer />
    </>
  );
}

export default AccountHome;
