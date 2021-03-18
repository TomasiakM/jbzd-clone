import React from 'react'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import RecommendedImage from "./RecommendedImage"


//icons
import Logout from "../icons/Logout"
import Chat from "../icons/Chat"
import Image from "../icons/Image"
import Flag from "../icons/Flag"

const Container = styled.div`
    width: 350px;
    background-color: #1f1f1f;
    height: auto;
    margin-bottom: auto;
    padding: 10px;
    border-radius: 4px;

    @media(max-width: 1200px){
        display: none;
    }
`

const UserInfo = styled.div`
    display: flex;
`

const UserImg = styled.span`
    display: block;
    width: 100px;
    height: 100px;
    background-color: #9c2727;
    flex-shrink: 0;
`

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 8px;
    width: 100%;
    font-size: 14px;

    & > div:nth-child(1){
        padding: 8px;
        background-color: #181818;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-radius: 4px;

        & a{
            text-decoration: none;
        }

        & svg{
            cursor: pointer;
        }
    }

    & > div:nth-child(2){

        & svg{
            margin-right: 4px;
        }
    }
`

const ProfileButton = styled.div`
    display: flex;
    margin-top: 4px;

    & a{
        width: 33.3%;
        padding: 8px;
        text-decoration: none;
        background-color: #4a4a4a;
        text-align: center;
        font-size: 14px;

        &:nth-child(1){
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }

        &:nth-child(3){
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
        }

        &:hover{
            background-color: #9c2727;
        }
    }
`

const AsideTags = styled.div`
    margin-top: 10px;

    & h4{
        font-size: 14px;
        color: #6a6a6a;
        margin-bottom: 4px;
    }

    & div{
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;

        & a{
            text-decoration: none;
            margin-right: 6px;
            margin-bottom: 6px;

            &:hover{
                color: #9c2727;
            }
        }
    }
`

const ManageBtn = styled.div`
    display: flex;
    margin: 10px 0;

    & a{
        width: 100%;
        padding: 8px;
        text-align: center;
        background-color: #4a4a4a;
        text-decoration: none;
        border-radius: 4px;

        &:hover{
            background-color: #9c2727;
        }
    }
`

const Recommendations = styled.div`
    & h4{
        padding: 8px;
        border-radius: 4px;
        background-color: #181818;
    }
`

const Aside = () => {
    const images = useSelector(state => state.images)

        return (
        <Container>
            <UserInfo>
                <UserImg></UserImg>
                <UserDetails>
                    <div>
                        <Link to="/">xyz</Link>
                        <Logout />
                    </div>
                    <div>
                        <div><Image />1/2</div>
                        <div><Chat />47</div>
                        <div><Flag />16.05.2020</div>
                    </div>
                </UserDetails>
            </UserInfo>
            <ProfileButton>
                <Link to="/">Mój profil</Link>
                <Link to="/">Ustawienia</Link>
                <Link to="/ulubione">Ulubione</Link>
            </ProfileButton>
            <AsideTags>
                <h4>Polecane tagi</h4>
                <div>
                    <Link to="/">#tag1</Link>
                    <Link to="/">#tag2</Link>
                    <Link to="/">#tag3</Link>
                    <Link to="/">#tag4</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                    <Link to="/">#tag5</Link>
                </div>
            </AsideTags>
            <AsideTags>
                <h4>Obserwowane tagi</h4>
                <div>
                    <Link to="/">#tag1</Link>
                    <Link to="/">#tag2</Link>
                    <Link to="/">#tag3</Link>
                    <Link to="/">#tag4</Link>
                    <Link to="/">#tag5</Link>
                </div>
            </AsideTags>
            <ManageBtn>
                <Link to="/">Zarządzaj tagami i czarnymi listami</Link>
            </ManageBtn>
            <Recommendations>
                    <h4>Polecamy</h4>
                    {images.length > 0 ? <>
                        <RecommendedImage img={images[Math.floor(Math.random()*images.length)]} />
                        <RecommendedImage img={images[Math.floor(Math.random()*images.length)]} />
                        <RecommendedImage img={images[Math.floor(Math.random()*images.length)]} />
                    </> : ""}
            </Recommendations>
        </Container>
    )
}

export default Aside