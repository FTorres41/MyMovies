import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderBar } from './styled';
import logo from '../../assets/logo.png';

const Header = () => {
    const user = useSelector((state) => state.login)
    return (
        <HeaderBar>
            <Link to="/">
                <img src={logo} alt="My Movies"/>
            </Link>

            <div className="avatar-container">
                <img className="avatar" src={user.avatar} alt={user.name} />
                <p className="name">{user.name}</p>
            </div>
       </HeaderBar>
    );
}

export default Header;