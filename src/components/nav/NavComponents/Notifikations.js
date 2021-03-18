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
    display: ${props => props.isNotificationOpen ? "block" : "none"};
    border 1px solid black;
    border-top: none;

    @media(max-width: 1200px){
        top: 45px;
        width: 100%;
    }
`

const Notification = styled.div`
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
        color: #6a6a6a;
        text-decoration: none;
    }
`

const NotificationAction = styled.div`
    display: flex;
    font-size: 12px;

    & div{
        padding: 6px;
        width: 50%;
        text-align: center;
        cursor: pointer;
        color: #6a6a6a;
    }

    & div:nth-child(1){
        border-right: 1px solid #3a3a3a;
    }
`

const Notifikations = ({ isNotificationOpen, setNotificationOpen }) => {


    return (
        <Container isNotificationOpen={isNotificationOpen}>
            <Notification>
                <ProfileImage>
                    <span></span>
                </ProfileImage>
                <Information>
                    <Link to="/" onClick={() => setNotificationOpen(!isNotificationOpen)}>Zostałeś wpomniany przez xyz</Link>
                    <div>2020-02-02 19:03</div>
                </Information>
            </Notification>
            <Notification>
                <ProfileImage>
                    <span></span>
                </ProfileImage>
                <Information>
                    <Link to="/" onClick={() => setNotificationOpen(!isNotificationOpen)}>Zostałeś wpomniany przez xyz</Link>
                    <div>2020-02-02 19:03</div>
                </Information>
            </Notification>
            <NotificationAction>
                <div>Zobacz wszystkie</div>
                <div>Odznacz wszystkie</div>
            </NotificationAction>
        </Container>
    )
}

export default Notifikations