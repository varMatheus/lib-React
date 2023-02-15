import React from "react";
import styled from "styled-components";

const CampoEmail = styled.div`
  width: 509px;
  height: 72px;

  & p {
    margin-left: 24px;
    color: #002F52;
    font-family: sans-serif;
    font-weight: 700;
  } 
  & input {
    border: 2px solid #002F52;
    border-radius: 16px;
    padding: 10px 24px; 
    width: 60%;
    color: #A4A4A4;
  }
`

export const AbCampoTexto = () => {
  return (
    <CampoEmail>
      <p>E-mail</p>
      <input type="email" placeholder="seuemail@maneiro.com.br"/>
    </CampoEmail>
  );
}