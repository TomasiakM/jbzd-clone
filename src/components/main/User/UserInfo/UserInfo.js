import React from 'react'
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Image from '../../icons/Image'
import Chat from '../../icons/Chat'
import Flag from '../../icons/Flag'

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 40px;
    background-color: #1f1f1f;
    padding: 10px;
    border-radius: 4px;

    & span{
        margin: 5px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background-color: #9c2727;
    }

    @media(max-width: 1200px){
        margin: 0 auto 20px;
    }

    @media(max-width: 500px){
        & h3{
            margin-top: 10px;
        }

        & span{
            width: 75px;
            height: 75px;
        }
    }
`

const UserAbout = styled.div`
    padding-left: 10px;
    min-width: 0;

    & h3{
        word-wrap: break-word;
    }

    & > div{
        margin-top: 4px;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;

        & p{
            color: #6a6a6a;
            margin-right: 8px;
            display: flex;
            align-items: center;

            & svg{
                margin-right: 4px;
            }
        }
    }
    }
`

const UserInfo = () => {
    const { userName } = useParams()
    return (
        <Container>
            <span></span>
            <UserAbout>
                <h3>{userName}</h3>
                <div>
                    <p><Image />32/100</p>
                    <p><Chat />251</p>
                    <p><Flag />29.06.2020</p>
                </div>
            </UserAbout>
        </Container>
    )
}

export default UserInfo