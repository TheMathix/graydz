import React, {useState, useEffect} from 'react';
import { AppBar, Typography, Toolbar, Avatar } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import { useDispatch } from 'react-redux';
import * as actionType from '../constants/actionTypes';
import decode from 'jwt-decode';

/* let profile_btn = document.getElementById("dropbtn");
if (profile_btn){
  console.log("botrao");

  profile_btn.addEventListener("mouseover", function( event ){

    let li = document.getElementById("dropdown_conta");
    if (li.style.display = "block"){
      li.style.display = "none";
      console.log("none");
    }
    else{
      console.log("block");
      li.style.display = "block";
    }

  }, false);
}
 */
function mouseover(){
  
  let li = document.getElementById("dropdown_conta");
  if (li.style.display == "block"){
    li.style.display = "none";
    
  }
  else{
    li.style.display = "block";
    
  }

};

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = user?.token;

    if (token){
      const decodedToken =  decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, []);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT'});  
    history.push('/');
    setUser(null);
  };

  window.addEventListener('resize', showButton);

  return (  
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Graydz  <i class="fa fa-solid fa-kiwi-bird"></i>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Início
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Serviços
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Produtos
              </Link>
            </li>
            
          </ul>
              {user?.result ? (
                
                  <div id="dropbtn_div">
                  <Button buttonStyle='btn--outline' id="dropbtn_" onMouseOver= {mouseover} onMouseOut={mouseover}>{user?.result.name}</Button>
                  <div>
                    <ul  id="dropdown_conta">
                      <a href="#" onClick={logout} id="dropdown_cont" display="none">Logout</a>
                    </ul>
                    </div>
                  </div>
                
                //
              ):(
                <Button buttonStyle='btn--outline'>REGISTRE-SE</Button>
              )}
        </div>
      </nav>
    </>
  )

}
export default Navbar
