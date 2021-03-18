import React from 'react'
import styled from "styled-components"
import { useParams, Redirect, useLocation } from "react-router-dom"

import Article from "./Article/Article"
import Paginator from "../Paginator/Paginator"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import UploadForm from "../UploadForm/UploadForm"
import UserInfo from '../User/UserInfo/UserInfo'

const Container = styled.div`
    width: 100%;
    max-width: 750px;
`

const Articles = ({ images }) => {
    let { page, userName } = useParams()
    const location = useLocation()

    if(page === undefined){
        page = 1
    } else {
        page = parseInt(page)
    }

    let path
    if(location.pathname === `/` || location.pathname === `/str/${page}`){
        path = "/str/"
    } else if(location.pathname === `/user/${userName}` || location.pathname === `/user/${userName}/str/${page}`){
        path = `/user/${userName}/str/`
    } else if(location.pathname === `/ulubione` || location.pathname === `/ulubione/str/${page}`){
        path = `/ulubione/str/`
    }

    const articlePerSide = 5
    const numberOfPages = Math.ceil(images.length / articlePerSide)

    if(page < 1 || page > numberOfPages || isNaN(page)) return <Redirect to={`/404`} />

    const startIndex = (page-1)*articlePerSide
    const endIndex = page*articlePerSide

    return (
        <Container>
            <Breadcrumbs />
            {location.pathname.includes("/user") && <UserInfo />}
            {location.pathname.includes("/ulubione") || location.pathname.includes("/user")  ? "" : <UploadForm />}
            {images.slice(startIndex, endIndex).map((data) => <Article key={data.id} data={data} />)}
            {numberOfPages === 1 ? "" : <Paginator page={page} path={path} images={images.length} numofpages={numberOfPages} />}
        </Container>
    )
}

export default Articles