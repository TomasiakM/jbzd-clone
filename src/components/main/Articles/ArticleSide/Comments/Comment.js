import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

import Reply from "./Reply"

const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    & > span{
        width: 40px;
        height: 40px;
        background-color: #9c2727;
        margin: 0 5px;
        flex: none;
    }
`

const CommentDetails = styled.div`
    flex: 1;
    min-width: 0;
    font-size: 13px;

    & a{
        text-decoration: none;
        color: #9c2727;
        word-wrap: break-word;
    }

    & span{
        display: block;
        color: #6a6a6a;
    }
`

const CommentAction = styled.div`
    flex: none;
    display: flex;
    align-items: center;
    align-self: start;

    & > button{
        border: none;
        border-radius: 4px;
        background-color: #4a4a4a;
        width: 30px;
        height: 24px;
        outline: none;
        margin: 0 4px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    & button:nth-child(1){
        ${state => state.commentAction === "upVote" ?
            "background-color: #94b425;" : ""
        }
    }

    & button:nth-child(3){
        ${state => state.commentAction === "downVote" ?
            "background-color: #9c2727;" : ""
        }
    }
`

const Text = styled.div`
    margin-left: 50px;
    word-wrap: break-word;

    @media(max-width: 600px){
        margin-left: 5px;
    }
`

const ReplayAction = styled.div`
    display: flex;
    align-self: flex-end;

    & button{
        border: none;
        background-color: transparent;
        color: #6a6a6a;
        outline: none;
        cursor: pointer;
        margin-left: 8px;
        font-size: 15px;

        &:hover{
            color: #9c2727;
        }
    }
`





const Comment = ({ comment }) => {
    const [commentAction, setCommentAction] = useState(false)

    const handleClickAction = (e) => {
        if(e !== commentAction){
            setCommentAction(e)
        } else if( e === commentAction){
            setCommentAction(false)
        }
    }

    const [isOpen, setIsOpen] = useState(false)

    const handleClickReply = (e) => {
        if(e === isOpen){
            setIsOpen(false)
        } else {
            setIsOpen(e)
        }
    }

    return (
        <Container>
            <CommentInfo>
                <span></span>
                <CommentDetails>
                    <Link to={`/user/${comment.user}`}>{comment.user}</Link>
                    <span>2 godziny temu</span>
                </CommentDetails>
                <CommentAction  commentAction={commentAction}>
                    <button onClick={() => handleClickAction("upVote")}>+</button>
                    <span>{comment.likes}</span>
                    <button onClick={() => handleClickAction("downVote")}>-</button>
                </CommentAction>
            </CommentInfo>
            <Text>
                {comment.comment}
            </Text>
            <ReplayAction>
                <button onClick={() => handleClickReply("reply")}>odpowiedz</button>
                <button onClick={() => handleClickReply("quote")}>zacytuj</button>
            </ReplayAction>
            <Reply isOpen={isOpen} comment={comment}/>
        </Container>
    )
}

export default Comment