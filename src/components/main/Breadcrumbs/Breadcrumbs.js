import React from 'react'
import styled from "styled-components"
import { Switch, Route, Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #6a6a6a;
    margin: 0 auto 20px;
    padding: 0 5px;

    & p{
        color: #6a6a6a;
        word-wrap: break-word;
        max-width:
        min-width: 0;
        max-width: 100%;
    }

    & span{
        margin: 0 6px;
        color: #6a6a6a;
    }

    & a{
        text-decoration: none;

        &: hover{
            color: #9c2727;
        }
    }

    @media(max-width: 1200px){
        width: 100%;
        max-width: 600px;
    }
`


const Breadcrumbs = () => {
    const images = useSelector(state => state.images)

    return (
        <Container>
            <Switch>
                <Route exact path={["/", "/str/1"]} render={() =>
                    <p>Strona główna</p>
                } />

                <Route path="/str/:page" render={({ match }) =>
                    <>
                        <Link to="/">Strona główna</Link>
                        <span>{">"}</span>
                        <p>Strona {match.params.page}</p>
                    </>
                } />
                <Route path="/img/:id" render={({ match }) =>
                    <>
                        <Link to="/">Strona główna</Link>
                        <span>{">"}</span>
                        {images.length > 0 ? <p>{images.find(img => img.id === match.params.id).url}</p> : ""}
                    </>
                } />
                <Route exact path={["/user/:user", "/user/:user/str/1"]} render={({ match }) =>
                    <>
                        <Link to="/">Strona główna</Link>
                        <span>{">"}</span>
                        <p>{match.params.user}</p>
                    </>
                } />
                <Route path="/user/:user/str/:page" render={({ match }) =>
                    <>
                        <Link to="/">Strona główna</Link>
                        <span>{">"}</span>
                        <Link to={`/user/${match.params.user}`}>{match.params.user}</Link>
                        <span>{">"}</span>
                        <p>Strona {match.params.page}</p>
                    </>
                } />
                <Route exact path={["/ulubione", "/ulubione/str/1"]} render={() =>
                    <>
                        <Link to="/">Strona główna</Link>
                        <span>{">"}</span>
                        <p>Ulubione</p>
                    </>
                } />
                <Route path="/ulubione/str/:page" render={({ match }) =>
                    <>
                        <Link to="/">Strona główna</Link>
                        <span>{">"}</span>
                        <Link to="/ulubione">Ulubione</Link>
                        <span>{">"}</span>
                        <p>Strona {match.params.page}</p>
                    </>
                } />
            </Switch>
        </Container>
    )
}

export default Breadcrumbs