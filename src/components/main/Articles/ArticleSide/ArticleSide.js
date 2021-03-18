import React, { useRef, useState } from 'react'
import styled from "styled-components"
import { useSelector } from "react-redux"
import { Link, Redirect, useParams } from "react-router-dom"

import Article from "../Article/Article"
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs'
import Comments from "./Comments/Comments"

import Dice from "../../icons/Dice"
import Send from "../../icons/Send"
import Chat from "../../icons/Chat"

const Container = styled.div`
    widht: 100%;
    min-width: 0;
`

const Buttons =styled.div`
    max-width: 100%;
    display: flex;
    margin-left: 50px;

    & a{
        text-decoration: none;
        padding: 12px;
        background-color: #9c2727;
        margin: 0 4px;
        border-radius: 4px;
        text-align: center;
    }

    & a:nth-child(1){
        width: 100%;
        margin-left: 0;
    }

    & a:nth-child(2){
        margin-right: 0;
        display: flex;
        align-items: center;
    }

    @media(max-width: 1200px){
        margin: 0 4px;
    }
`

const AddComment = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0 4px;
    padding: 16px;
    background-color: #1f1f1f;
    max-width: 600px;
    margin-left: 50px;
    border-radius: 4px;

    & span{
        flex: none;
        display: block;
        margin: 0 4px;
        width: 40px;
        height: 40px;
        background-color: #9c2727;
        align-self: flex-start;
    }

    & textarea{
        width: 100%;
        padding: 4px;
        background-color: #181818;
        border: none;
        outline: none;
        resize: none;
    }

    & button {
        flex: none;
        width: 40px;
        padding: 8px;
        margin: 0 4px;
        display: flex;
        align-items: center;
        background-color: #4a4a4a;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        align-self: flex-start;
    }

    @media(max-width: 1200px){
        margin-left: auto;
        margin-right: auto;
    }
`

const AboutComments = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin-left: 50px;
    padding: 16px;
    background-color: #1f1f1f;
    margin-bottom: 4px;
    font-size: 14px;
    border-radius: 4px;

    & > span {
        display: flex;
        alig-items: center;

        & svg{
            fill: white;
            margin-right: 4px;
        }
    }

    @media(max-width: 1200px){
        margin-left: auto;
        margin-right: auto;
    }
`

const CommentsAction = styled.div`
    display: block;

    & > span:nth-child(1){
        ${props => props.sort === "best" ?
            "cursor: auto; color: #9c2727;" :
            "cursor: pointer; color: #6a6a6a;"
        }
    }

    & > span:nth-child(2){
        margin-left: 20px;
        color: #6a6a6a;
        ${props => props.sort === "latest" ?
            "cursor: auto; color: #9c2727;" :
            "cursor: pointer; color: #6a6a6a;"
        }
    }

    @media(max-width: 400px){
        & span:nth-child(2){
            margin-left: 10px;
        }
    }
`

const comments = [
        {
            id: 111,
            user: "Alejandro Escamilla",
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.",
            likes: 10,
            replays: [
                {
                    id: 115,
                    user: "Danielle MacInnes",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur est, deserunt voluptatem quod dignissimos exercitationem incidunt amet?",
                    likes: -10,
                },
                {
                    id: 153,
                    user: "Alejandro Escamilla",
                    comment: "Lorem ipsum dolor sit amet consectetur.",
                    likes: 30
                }
            ]
        },
        {
            id: 121,
            user: "Christopher Campbell",
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.",
            likes: 30,
            replays: []
        },
        {
            id: 124,
            user: "Tina Rataj",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa facilis suscipit molestiae, eius perspiciatis ab provident, iure velit mollitia, explicabo reiciendis rerum! Voluptate nulla dolore veritatis veniam maxime beatae iste.",
            likes: 2,
            replays: []
        },
        {
            id: 32,
            user: "Danielle MacInnes",
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi.",
            likes: -10,
            replays: []
        },
    ]

const ArticleSide = () => {
    const [sort, setSort] = useState("best")
    const [textarea, setTextarea] = useState("")

    if(sort === "latest"){
        comments.sort((a, b) => b.id - a.id)
    } else {
        comments.sort((a, b) => b.likes - a.likes)
    }

    const textareaRef = useRef()

    let { id } = useParams()
    const image = useSelector(state => state.images).find((e) => e.id === id)
    if(image === undefined)
        return <Redirect to="/404" />

    const handleClick = (e) => {
        setSort(e)
    }

    const handleChange = (e) => {
        resizeTextarea(textareaRef)
        setTextarea(e.target.value)
    }

    const resizeTextarea = (e) =>{
        e.current.style.height= "40px";
        e.current.style.height= textareaRef.current.scrollHeight + "px";
    }


    let commentsSum = 0
    comments.forEach((e) => commentsSum += e.replays.length + 1)

    return (
        <Container>
            <Breadcrumbs />
            <Article data={image}/>
            <Buttons>
                <Link to="/">Przejdź na stronę główną</Link>
                <Link to="/losowe">
                    <Dice />
                </Link>
            </Buttons>
            <AddComment>
                <span></span>
                <textarea ref={textareaRef} onChange={handleChange} placeholder="Wpisz swój komentarz" value={textarea}>{textarea}</textarea>
                <button>
                    <Send />
                </button>
            </AddComment>
            <AboutComments>
                <span><Chat />{commentsSum} komentarzy</span>
                <CommentsAction sort={sort}>
                    <span onClick={() => handleClick("best")}>najlepsze</span>
                    <span onClick={() => handleClick("latest")}>najnowsze</span>
                </CommentsAction>
            </AboutComments>
            <Comments comments={comments} />
        </Container>
    )
}

export default ArticleSide