import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header from '../../components/Header';

export default function Main({ history }) {
  const loggedUser = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <Header />
  );
}
