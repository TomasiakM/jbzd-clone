import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components"

import Send from "../../../icons/Send"

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 4px 0 4px;
    padding: 16px;
    background-color: #181818;
    display: ${state => state.isOpen ? "flex" : "none"};

    & span{
        flex: none;
        display: block;
        margin: 0 4px;
        width: 40px;
        height: 40px;
        background-color: #9c2727;
        align-self: start;
    }

    & textarea{
        width: 100%;
        min-height: 36px;
        height: auto;
        padding: 4px;
        background-color: #1f1f1f;
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
        align-self: start;
    }

    @media(max-width: 400px){
        & span{
            display: none;
        }
    }
`

const Reply = ({ isOpen, comment }) => {
    const [textarea, setTextarea] = useState("")
    const textareaRef = useRef()

    const resizeTextarea = (e) =>{
        e.current.style.height= "40px";
        e.current.style.height= textareaRef.current.scrollHeight + "px";
    }


    useEffect(() => {
        if(isOpen === "reply"){
            resizeTextarea(textareaRef)
            setTextarea(`@[${comment.user}] `)
            textareaRef.current.focus()
        } else if(isOpen === "quote"){
            resizeTextarea(textareaRef)
            setTextarea(`@[${comment.user}] "${comment.comment}" \n`)
            textareaRef.current.focus()
        } else {
            setTextarea("")
        }

        // eslint-disable-next-line
    }, [isOpen])

    useEffect(() => {
            textareaRef.current.style.height= "40px";
            textareaRef.current.style.height= textareaRef.current.scrollHeight + "px";
    }, [textarea])

    const handleChange = (e) => {
        setTextarea(e.target.value)
    }

    return (
        <Container isOpen={isOpen}>
            <span></span>
            <textarea ref={textareaRef} placeholder="Wpisz swój komentarz" onChange={handleChange} value={textarea}>{textarea}</textarea>
            <button>
                <Send />
            </button>
        </Container>
    )
}

export default Reply