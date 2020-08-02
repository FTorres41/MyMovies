import React, { useState } from "react";
import { LoginButton, LoginForm, LoginIcon, LoginInput } from "./styled";
import logo from "../../assets/logo.png";

export default function Login() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginIcon to="/">
        <img src={logo} alt="My Movies" />
      </LoginIcon>
      <LoginInput
        variant="filled"
        label="Digite seu usuário no Github"
      ></LoginInput>
      <LoginButton type="submit">Enviar</LoginButton>
    </LoginForm>
  );
}
