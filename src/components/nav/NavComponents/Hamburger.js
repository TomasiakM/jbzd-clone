import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 28px;
    height: 45px;
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    display: none;

    & span{
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        left: 0;
        background-color: white;
        transition: all .2s ease-in-out;
        transform-origin: left center;
    }

    & span:nth-child(1){
        ${props => props.isOpen ? "transform: rotate(45deg); left: 5px; top: 12px;" : "top: 12px;"}
    }

    & span:nth-child(2){
        top: 22px;
        ${props => props.isOpen ? "background-color: transparent;" : ""}
    }

    & span:nth-child(3){

        ${props => props.isOpen ? "transform: rotate(-45deg); left: 5px; top: 32px;" : "top: 32px;"}
    }

    @media(max-width: 1200px){
        display: block;
    }
`

const Hamburger = ({ isOpen, setOpen }) => {
    return (
        <Container isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </Container>
    )
}

export default Hamburger