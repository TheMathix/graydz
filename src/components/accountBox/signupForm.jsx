import React, { useContext } from 'react';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import {Marginer} from "../marginer";
import { AccountContext } from './accountContext';

export function SignupForm(props){

  const { switchToSignin } = useContext(AccountContext);

  return (
  <BoxContainer>
    <FormContainer>
      <Input type='text' placeholder='Nome Completo' />
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Senha' />
      <Input type='password' placeholder='Confirmar senha' />


      <Marginer direction='vertical' margin='1em' />

      <SubmitButton type='submit'>Criar</SubmitButton>

    </FormContainer>
    <Marginer direction='vertical' margin={15} />
    <MutedLink href='#'><BoldLink href='#' onClick={switchToSignin}>Já possui uma conta?</BoldLink></MutedLink>
  </BoxContainer>
);
}
