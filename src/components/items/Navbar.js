import React, {useState, useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';



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

  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch({ type: 'LOGOUT'});  
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token){
      const decodedToken =  decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
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
                  <Button buttonStyle='btn--outline' buttonSize='btn--profile' onClick= {mouseover}>{user?.result.name.split(" ")[0].charAt(0).toUpperCase() +user?.result.name.split(" ")[0].slice(1)}</Button>

                  <div id="dropdown_conta" style={{display:"none", position: "fixed", width: "150px"}}>
                  
                    <Button  buttonStyle='btn--primary' buttonSize='btn--profile' onClick= {logout} >Logout</Button>
                    <Button  buttonStyle='btn--primary' buttonSize='btn--profile' linkTo = 'accounthome'>Minha conta</Button>

                  </div>

                </div>
                
              ):(
                <Button buttonStyle='btn--outline' linkTo='sign-up'>REGISTRE-SE</Button>
              )}
        </div>
      </nav>
    </>
  )

}
export default Navbar
