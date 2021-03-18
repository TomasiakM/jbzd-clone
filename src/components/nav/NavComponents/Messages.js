import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 34px;
    width: 300px;
    cursor: default !important;
    background-color: #1d1d1d;
    display: ${props => props.isMessagesOpen ? "block" : "none"};
    border 1px solid black;
    border-top: none;

    @media(max-width: 1200px){
        top: 45px;
        width: 100%;
    }
`

const Message = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #3a3a3a;
`

const ProfileImage = styled.div`
    padding: 10px;

    & span{
        display: block;
        width: 30px;
        height: 30px;
        background-color: #9c2727;
    }
`

const Information = styled.div`
    font-size: 14px;
    padding: 10px 10px 10px 0;

    & a, & div{
        display: block;
        text-decoration: none;
        color: #6a6a6a;
    }
`

const MessageAction = styled.div`
    display: flex;
    font-size: 12px;

    & div{
        width: 100%;
        padding: 6px;
        text-align: center;
        cursor: pointer;
        color: #6a6a6a;
    }
`

const Messages = ({ isMessagesOpen, setMessagesOpen }) => {


    return (
        <Container isMessagesOpen={isMessagesOpen}>
            <Message>
                <ProfileImage>
                    <span></span>
                </ProfileImage>
                <Information>
                    <Link to="/" onClick={() => setMessagesOpen(!isMessagesOpen)}>Nie wiem jak to ma wyglądać</Link>
                    <div>2020-02-02 19:03</div>
                </Information>
            </Message>
            <Message>
                <ProfileImage>
                    <span></span>
                </ProfileImage>
                <Information>
                    <Link to="/" onClick={() => setMessagesOpen(!isMessagesOpen)}>nikt do mnie nie pisze sadPepe.jpg</Link>
                    <div>2020-02-02 19:03</div>
                </Information>
            </Message>
            <MessageAction>
                <div>Zobacz wszystkie</div>
            </MessageAction>
        </Container>
    )
}

export default Messages