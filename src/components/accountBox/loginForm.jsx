import React, { useContext } from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "../marginer";
import { AccountContext } from './accountContext';


export function LoginForm(props){

  const { switchToSignup } = useContext(AccountContext);

  return (
  <BoxContainer>
    <FormContainer>

      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Password' />

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
