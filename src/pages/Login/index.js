import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LoginContainer } from "./styled";
import LoginForm from "../../components/LoginForm";
import { Creators as LoginActions } from '../../store/ducks/login';
import axios from 'axios';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  const loggedUser = useSelector((state) => state.login);

  const dispatch = useDispatch();

  function savePersistData({ name, bio, username, avatar }) {
    localStorage.setItem('loggedUser', JSON.stringify({
      name: name, bio: bio, username: username, avatar: avatar
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url} = response.data;

    dispatch(LoginActions.auth({ name, bio, username, avatar: avatar_url }));
    savePersistData(name, bio, username, avatar_url);

    if (name && bio) {
      history.push(`/main?username=${username}`);
    }
  }

  return (
    <LoginContainer>
      <LoginForm handleSubmit={handleSubmit} handleChange={(e) => setUsername(e.target.value)}/>
    </LoginContainer>
  );
}
