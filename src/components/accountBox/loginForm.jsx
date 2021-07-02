import React, { useContext } from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "../marginer";
import { AccountContext } from './accountContext';
import { useState } from 'react';
import { signin } from '../../actions/auth';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';


const intialState = { email: '', password: ''};

export function LoginForm(props){

  const { switchToSignup } = useContext(AccountContext);

  const [form, setForm] = useState(intialState);

  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(signin(form, history));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
  <BoxContainer>
    <FormContainer onSubmit={handleSubmit}>

      <Input name = "email" type='email' placeholder='Email' onChange={handleChange}/>
      <Input name = "password" type='password' placeholder='Password' onChange={handleChange}/>

      <Marginer direction='vertical' margin={15} />
      <MutedLink href='#'>Esqueceu sua senha?</MutedLink>
      <Marginer direction='vertical' margin='1em' />

      <SubmitButton type='submit'>Entrar</SubmitButton>

    </FormContainer>
    <Marginer direction='vertical' margin={15} />


    
    <MutedLink href='#'><BoldLink href='#' onClick={switchToSignup}>Não possui uma conta?</BoldLink></MutedLink>
  </BoxContainer>
);
}
