import React, {useState} from 'react';
import styled from 'styled-components';
import {LoginForm} from './loginForm';
import {motion} from 'framer-motion';
import {SignupForm} from './signupForm';
import { AccountContext } from "./accountContext";
import { GoogleLogin } from 'react-google-login';
import { Button} from '@material-ui/core';
import {Marginer} from "../marginer";
//import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import Icon from './icon';
import useStyles from './styles';
import {  useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;

  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  left:50%;
  transform: translateX(-50%);
  margin:20px;
  overflow: hidden;
  z-index: 7;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  z-index: 8;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  /* border-radius: 50%; */
  background: linear-gradient(90deg, rgb(28, 27, 27) 100%, rgb(26, 23, 23) 100%);
  z-index: 9;
`;

const HeaderContainer = styled.h2`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AlternativeText = styled.h2 `
  font-size: 20px;
  color: rgba(15, 15, 15, 0.8);
  width: 100%;
  font-family: sans-serif;
  text-align: center;
  z-index: 3;
`;

const HeaderText = styled.h2 `
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  font-family: sans-serif;
  z-index: 10;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 9;
  margin: 0;
  margin-top:8px;
  font-family: sans-serif;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 0 1.8em;
  z-index: 7;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)"
  },
  collapsed: {
    width:"160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)"
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props){
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {setExpanded(false);}, expandingTransition.duration * 1000 - 1500);
  }

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  }


  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  }

  const contextValue = {switchToSignup, switchToSignin};

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try{
      dispatch({ type: 'AUTH', data: { result, token} });

      history.push('/#');
    }
    catch (error) {
      console.log(error)
    }
    
    console.log("Google login was successful");
  };
  
  const googleFailure = () => {
    console.log("Google login was unsuccessful");
  };

  
  return(
    <AccountContext.Provider value={contextValue}>
   <BoxContainer>
    <TopContainer>
      <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"}
       variants={backdropVariants}
       transition={expandingTransition}
       />

      {active === "signin" && <HeaderContainer>
        <HeaderText>Bem</HeaderText>
        <HeaderText>Vindo</HeaderText>
        <SmallText>Acesse sua conta para continuar</SmallText>
        </HeaderContainer>}

      {active === "signup" && <HeaderContainer>
        <HeaderText>Crie sua</HeaderText>
        <HeaderText>Conta</HeaderText>
        <SmallText>Registre sua conta para continuar</SmallText>
        </HeaderContainer>}

    </TopContainer>
    <InnerContainer>
      {active === "signin" && <LoginForm />}
      {active === "signup" && <SignupForm />}

    </InnerContainer>


    <Marginer direction='vertical' margin={35} />


    <AlternativeText >Ou acesse com</AlternativeText>
    <GoogleLogin
      clientId="61604491664-ltc0dk8bm6flkjcdfgnruvs8q9kh12v6.apps.googleusercontent.com"
      render={(renderProps) => (
        <Button
         className={classes.googleButton} 
         color = "primary" 
         style={{display: "flex", width: "58%", justifyContent: 'center', left:"50%",
         transform: "translateX(-50%)"}}

         onClick={renderProps.onClick} 
         disabled={renderProps.disabled} 
         startIcon={<Icon />} 
         variant="contained"
          >
            Google Sign In
          </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy = "single_host_origin"
    />

  </BoxContainer>
  </AccountContext.Provider>
  );
}

//export default AccountBox;