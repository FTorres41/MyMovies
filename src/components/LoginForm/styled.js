import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

export const LoginIcon = styled(Link)`
  text-decoration: none;
  font-family: Pacifico, sans-serif;
  font-size: 20px;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.form};
  padding: 10px;
  box-shadow: 0px 3px 6px #0000004d;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  background-color: ${(props) => props.theme.primary} !important;
  color: ${(props) => props.theme.clear} !important;
  font-weight: 700 !important;
  margin-top: 10px !important;
`;

export const LoginInput = styled(TextField)`
  background-color: ${(props) => props.theme.white} !important;

  .MuiFormLabel-root .Mui-focused {
    color: ${(props) => props.theme.form} !important;
  }

  .MuiFilledInput-underline:after {
    color: ${(props) => props.theme.form} !important;
  }
`;
