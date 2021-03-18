import React from 'react'
import styled from "styled-components"
import { Switch, Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

import Articles from "./Articles/Articles"
import Aside from './Aside/Aside'
import Error from "./Error/Error"
import ArticleSide from "./Articles/ArticleSide/ArticleSide"
import ScrollToTop from './ScrollToTop'
import Favorite from "./Favorite/Favorite"
import Random from './Random/Random'
import User from "./User/User"

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(max-width: 1200px){
        justify-content: center;
    }
`

const Main = () => {
    const images = useSelector(state => state.images)

    return (
        <Container>
            {images.length > 0 ?
                <Switch>
                    <Route exact path={["/", "/str/:page"]} >
                        <ScrollToTop />
                        <Articles images={images} />
                        <Aside />
                    </Route>
                    <Route path="/img/:id">
                        <ScrollToTop />
                        <ArticleSide />
                        <Aside />
                    </Route>
                    <Route exact path={["/user/:userName", "/user/:userName/str/:page"]}>
                        <ScrollToTop />
                        <User />
                        <Aside />
                    </Route>
                    <Route exact path={["/ulubione", "/ulubione/str/:page"]}>
                        <ScrollToTop />
                        <Favorite />
                        <Aside />
                    </Route>
                    <Route path="/losowe">
                        <Random />
                    </Route>
                    <Route path="/404">
                        <ScrollToTop />
                        <Error />
                    </Route>
                    <Route path="/">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            : ""}
        </Container>
    )
}

export default Main