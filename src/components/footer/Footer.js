import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    & span{
        display: inline-block;
        height: 18px;
        margin: 0 8px;
    }

    & a{
        color: #9c2727;
        text-decoration: none;

        &:hover{
            color: white;
        }
    }
`

const Footer = () => {
    return (
        <Container>
            <Link to="/">Kontakt</Link>
            <span>|</span>
            <Link to="/">Polityka prywatności</Link>
        </Container>
    )
}

export default Footer