import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc( 100vh - 45px - 100px);
    justify-content: center;
    align-items: center;

    & h4 {
        margin-bottom: 6px;
        font-size: 20px;
        color: #9c2727;
    }

    & a{
        background-color: #4a4a4a;
        padding: 8px 12px;
        border-radius: 4px;
        text-decoration: none;

        &:hover{
            background-color: #9c2727;
        }
    }

`

const Error = () => {
    return (
        <Container>
            <h4>Ups...</h4>
            <h4>Wygląda na to, że zabłądziłeś.</h4>
            <Link to="/">Wróć na stronę główną</Link>
        </Container>
    );
};

export default Error