import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  z-index: 7;
  position: static;
`;

export const FormContainer = styled.form `
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

export const MutedLink = styled.a`
  font-dize: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-dize: 12px;
  color: rgba(15, 15, 15, 0.4);
  font-weight: 500;
  text-decoration: none;

`;

export const NameInput = styled.input `
  text-transform: capitalize;
  z-index: 3;
  height: 42px;
  width: 100%;
  outline: none;
  border: 1px solid rgba(15, 15, 15, 0.03);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  &:placeholder{
    color: rgba(15, 15, 15, 1);

  }

  &:not(:last-of-type){
    border-bottom: 1.5px solid rgba(15, 15, 15, 0.28);
  }

  &:focus{
    outline:none;
    border-bottom: 2px solid rgba(15, 15, 15)
  }
  z-index: 7;
`;

export const Input = styled.input `
  z-index: 3;
  height: 42px;
  width: 100%;
  outline: none;
  border: 1px solid rgba(15, 15, 15, 0.03);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  &:placeholder{
    color: rgba(15, 15, 15, 1);

  }

  &:not(:last-of-type){
    border-bottom: 1.5px solid rgba(15, 15, 15, 0.28);
  }

  &:focus{
    outline:none;
    border-bottom: 2px solid rgba(15, 15, 15)
  }
  z-index: 7;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  background: rgba(15, 15, 15);
  background: linear-gradient(
    58deg,
    rgba(15, 15, 15, 1) 20%,
    rgba(18, 18, 18, 1) 100%
  );

  &:hover{
    filter: brightness(1.03);
  }
`;
