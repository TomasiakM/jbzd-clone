import React from 'react'
import { useSelector } from 'react-redux'
import Articles from '../Articles/Articles'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const Container = styled.div`
    width: 100%;
    max-width: 750px;

    & a:last-child{
        text-decoration: none;
        padding: 8px 20px;
        background-color: #4a4a4a;
        border-radius: 4px;
        display: block;
        width: fit-content;
        margin: 10px auto;

        &:hover{
            background-color: #9c2727;
        }
    }

    @media (max-width: 1200px){
        min-height: calc(100vh - 145px);
    }
`

const NoFav = styled.h3`
    text-align: center;
`

const Favorite = () => {
    const favoriteImages = useSelector((e) => e.images.filter((e) => e.favorite === true))
    return favoriteImages.length > 0 ?  <Articles images={favoriteImages} /> :
        <Container>
            <Breadcrumbs />
            <NoFav>Brak ulubionych</NoFav>
            <Link to="/">Przejdź na stonę główną</Link>
        </Container>
}

export default Favorite