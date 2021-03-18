import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled(Link)`
    display: block;
    position: relative;
    width: 100%;
    height: 180px;
    margin-top: 8px;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    & span{
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 8px;
        background-color: rgba(0,0,0,0.8);
    }
`

const RecommendedImage = ({ img }) => {
    return (
        <Container to={`/img/${img.id}`} img={img.download_url}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </Container>
    )
}

export default RecommendedImage