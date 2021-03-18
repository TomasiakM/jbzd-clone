import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

import Dice from "../icons/Dice"

const Container = styled.div`

`

const PaginationButtons = styled.div`
    display: flex;
`

const Pages = styled.div`
    display: flex;
    width: calc(100% - 6px);
    overflow: auto;
    margin: 3px;
`

const NextPageLink = styled(Link)`
    width: 100%;
    padding: 12px;
    background-color: #9c2727;
    text-decoration: none;
    border-radius: 4px;
    margin: 4px;
    text-align: center;
    ${props => props.disabled ? "pointer-events: none" : ""};
`

const StyledLink = styled(Link)`
    width: calc(1/${props => props.numofpages}*100% - 2px);
    min-width: calc(1/7*100% - 2px);
    text-decoration: none;
    text-align: center;
    padding: 12px 0;
    border-radius: 4px;
    margin: 1px;
    background-color: ${props => props.primary ? "#6a6a6a" : "transparent"};
    ${props => props.primary ? "pointer-events: none" : ""};

    &:hover{
        background-color: ${props => props.primary ? "#6a6a6a" : "#9c2727"};
    }
`

const RandomLink = styled(Link)`
    padding: 12px 24px;
    background-color: #9c2727;
    text-decoration: none;
    border-radius: 4px;
    margin: 4px;
    display: flex;
    align-items: center;
`


const Paginator = ({ path, page, numofpages }) => {
    let pages = []

    let i = 1
    while(i <= numofpages && i !== page + 4){
        pages.push(i)
        i++
        if(pages.length > 7){
            pages = pages.slice(1, 8)
        }
    }

    while(pages.length < numofpages && pages.length < 7){
        pages.push(i)
        i++
    }

    return (
        <Container>
            <PaginationButtons>
                <NextPageLink disabled={page >= numofpages ? true : false} to={`${path}${page + 1}`}>Następna strona</NextPageLink>
                <RandomLink to="/losowe">
                    <Dice />
                </RandomLink>
            </PaginationButtons>
            <Pages>
                {pages.map((e) =>
                    <StyledLink  numofpages={numofpages} primary={e === page ? 1 : 0} key={`page${e}`} to={`${path}${e}`}>{e}</StyledLink>
                )}
            </Pages>
        </Container>
    );
}

export default Paginator