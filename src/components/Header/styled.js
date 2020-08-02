import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const HeaderBar = styled(Toolbar)`
    width: 100%;
    background-color: ${props => props.theme.form};
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 120px;

    img {
        height: 120px;
    }

    .avatar-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 120px;
    }

    .avatar {
        height: 50px;
        border-radius: 25px;
        margin: 10px;
    }

    .name {
        font-weight: 700;
        color: ${props => props.theme.tertiary};
    }
`;