import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin-left: auto;


    & div span{
        height: 45px;
        margin: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const DesctopCategories = styled.div`
    display: flex;

    & > a{
        height: 45px;
        margin: 0 5px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid transparent;
        padding: 0 5px;

        &:hover{
            border-bottom: 1px solid #9c2727;
        }
    }

    @media(max-width: 1200px){
        display: none;
    }
`

export const CategoriesMenu = styled.div`
    width: 230px;
    position: absolute;
    right: 0;
    display: none;
    background-color: #181818;

    & a{
        text-decoration: none;
        display: block;
        padding: 2px 4px;
        margin-left: 60px;
        margin-bottom: 2px;
        border-bottom: 1px solid transparent;
        width: max-content;
        font-size: 15px;

        &:hover{
            border-bottom: 1px solid #9c2727;
        }
    }

    & hr{
        margin: 10px 0 0;
        border: none;
        border-bottom: 1px solid #4a4a4a;
    }

    @media(max-width: 1200px){
        display: ${props => props.isOpen ? "block" : "none"};
        width: 100%;
        left: 0;
    }
`

export const Title = styled.div`
    font-size: 14px;
    margin: 10px 20px;
    color: ${props => props.red ? "#9c2727": "#6a6a6a"};

    @media(max-width: 1200px){
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        padding: 6px;
    }
`

export const CategoryButton = styled.div`
    position: relative;

    & span svg{
        transform: rotate(180deg);
        transition: transform 0.25s ease-in-out;
    }

    &:hover span{
        color: #9c2727;
        cursor: pointer;

        & svg{
            fill: #9c2727;
            transform: rotate(0);
        }
    }

    &:hover ${CategoriesMenu} {
        display: block;
    }

    @media(max-width: 1200px){
        & span{
            display: none !important;
        }
    }
`

export const MobileCategories = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    display: none;
    margin: 20px 0;

    & div{
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;

        & a{
            width: calc(25% - 6px);
            height: 75px;
            margin: 3px;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width: 1200px){
        display: ${props => props.isOpen ? "block" : "none"};
        & div a{
            background-color: #9c2727;
        }
    }

    @media(max-width: 600px){
        & div a{
            font-size: 12px;
            margin: 2px;
            width: calc(25% - 4px);
            height: 60px;
        }
    }
`

export const NavSection = styled.div`

    @media(max-width: 1200px){
        position: absolute;
        top: 45px;
        left: 0;
        width: 100%;
        overflow-y: auto;
        height: ${props => props.isOpen ? "calc(100vh - 45px)" : "auto"};
        background-color: #252525;
    }
`

export const CategoriesSection = styled.div`
    @media(max-width: 1200px){
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 100%;
        max-width: 700px;

        & a{
            height: 60px;
            width: calc(20% - 6px);
            background-color: #4a4a4a;
            margin: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            border: none;

            &:hover{
                border: none;
                background-color: #9c2727;
            }
        }
    }

    @media(max-width: 600px){
        & a{
            width: calc(33.3% - 4px);
            height: 60px;
            margin: 2px;
            font-size: 12px;
        }
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin: 10px auto 0;
    display: none;

    & svg {
        margin-left: 10px;
        cursor: pointer;
    }

    & a{
        text-decoration: none;
    }

    & span{
        display: block;
        width: 30px;
        height: 30px !important;
        border-radius: 50%;
        background-color: #9c2727;
    }

    @media(max-width: 1200px){
        display: ${props => props.isOpen ? "flex" : "none"};
    }
`