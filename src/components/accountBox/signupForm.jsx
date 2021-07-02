import React, { useContext } from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, NameInput} from "./common";
import {Marginer} from "../marginer";
import { AccountContext } from './accountContext';
import { useState } from 'react';
import { signup } from '../../actions/auth';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';


const intialState = {name: '', email: '', password: '', conf_password: ''};

export function SignupForm(props){

  

  const { switchToSignin } = useContext(AccountContext);

  const [form, setForm] = useState(intialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    dispatch(signup(form, history));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
  <BoxContainer>
    <FormContainer onSubmit={handleSubmit}>
      <NameInput name= "name" type='text' placeholder='Nome Completo' onChange={handleChange}/>
      <Input name= "email" type='email' placeholder='Email' onChange={handleChange}/>
      <Input name= "password" type='password' placeholder='Senha' onChange={handleChange}/>
      <Input name= "conf_password" type='password' placeholder='Confirmar senha' onChange={handleChange}/>

      <Marginer direction='vertical' margin='1em' />

      <SubmitButton type='submit'>Criar</SubmitButton>

    </FormContainer>
    <Marginer direction='vertical' margin={15} />
    <MutedLink href='#'><BoldLink href='#' onClick={switchToSignin}>Já possui uma conta?</BoldLink></MutedLink>
  </BoxContainer>
);
}
