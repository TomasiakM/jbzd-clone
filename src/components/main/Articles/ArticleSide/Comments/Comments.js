import React from 'react'
import styled from "styled-components"

import Comment from "./Comment"

const Container = styled.div`
    padding: 16px;
    width: 100%;
    max-width: 600px;
    background-color: #1f1f1f;
    margin-left: 50px;
    border-radius: 4px;

    @media(max-width: 1200px){
        margin-left: auto;
        margin-right: auto;
    }
`

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Replays = styled.div`
    margin-left: 25px;
    margin-bottom: 30px;
    padding-top: 10px;
    padding-left: 5px;
    border-left: 2px solid #6a6a6a;

    & div:last-child{
        margin-bottom: 0;
    }

    @media(max-width: 400px){
        margin-left: 10px;
    }
`

const Comments = ({ comments}) => {
    return (
        <Container>
            {comments.map((comment) =>
                <CommentsContainer key={comment.id}>
                    <Comment comment={comment}/>
                    {comment.replays.length > 0 ?
                        <Replays>
                            {comment.replays.map((replay) =>
                                <Comment key={replay.id} comment={replay}>

                                </Comment>
                            )}
                        </Replays> : ""}
                </CommentsContainer>
            )}
        </Container>
    )
}

export default Comments