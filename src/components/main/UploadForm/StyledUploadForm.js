import styled from "styled-components"

export const Container = styled.div`
    background-color: #1f1f1f;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    max-width: 600px;
    margin-left: 50px;
    margin-bottom: 20px;
    height: auto;
    transition: all 0.3s ease;

    @media(max-width: 1200px){
        margin: 0 auto 20px;
    }
`

export const Error = styled.span`
    display: block;
    color: #9c2727;
    font-size: 14px;
    padding: 4px;
    padding-bottom: 0;
`

export const Title = styled.div`
    display: flex;

    & input:nth-child(1){
        width: 100%;
        background-color: #181818;
        border: none;
        padding: 10px;
        outline: none;
        border-radius: 4px;
    }

    & input[type='file']{
        display: none;
    }

    & label{
        display: flex;
        align-items: center;
        background-color: #181818;
        padding: 0 8px;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 4px;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    background-color: #181818;
    border: none;
    padding: 10px;
    outline: none;
    border-radius: 4px;
    margin: 4px 0;
`

export const TextArea = styled.textarea`
    width: 100%;
    background-color: #181818;
    padding: 8px;
    border: none;
    resize: none;
    outline: none;
`
export const MaxSigns = styled.div`
    font-size: 14px;
    color: #6a6a6a;
    width: 100%;
    text-align: right;
`

export const ForAdultButton = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;

    & span {
        text-align: left;
        wdith: 100%;
        position: relative;
        float: left;
        font-size: 14px;
    }
`

export const StyledButton = styled.div`
    border: none;
    background-color: ${props => props.active ? "#9c2727" : "#4a4a4a"};
    outline: none;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 6px;
`

export const TagsContainer = styled.div`
    margin-top: 10px;

    & h4{
        margin: 4px;
        font-weight: normal;
    }

    & > div{
        & h4{
            color: #6a6a6a;
            margin: 4px;
            font-size: 14px;
            font-weight: normal;
        }

        & > div{
            display: flex;
            flex-wrap: wrap;
        }
    }
`

export const Tag = styled.div`
    background-color: #4a4a4a;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;

    &:hover{
        background-color: #9c2727;
    }
`

export const ChoosenTag = styled.div`
    background-color: #4a4a4a;
    padding: 4px;
    margin: 4px 4px 4px 0;
    padding-right: 22px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;

    & div{
        position: absolute;
        right: 4px;
        cursor: pointer;
        width: 16px;
        height: 16px;

        & span{
            position: absolute;
            display: block;
            background-color: black;
            width: 100%;
            height: 2px;
            border-radius: 1px;
            top: 50%;

            &:nth-child(1){
                transform: rotate(45deg);
            }

            &:nth-child(2){
                transform: rotate(-45deg);
            }
        }
    }
`

export const ChoosenTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const HowToAddTag = styled.div`
    font-size: 14px;
    color: #6a6a6a;
    margin: 4px;
`

export const ChooseCatAndSec = styled.div`
    & h4{
        margin: 8px 4px;
        font-weight: normal;

        & span{
            color: #6a6a6a;
        }
    }

    & div{
        display: flex;
        flex-wrap: wrap;

        & div{
            padding: 4px 8px;
            margin-right: 8px;
            margin-bottom: 8px;
            background-color: #4a4a4a;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
    }
`

export const FormActions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4px;

    & button{
        padding: 8px;
        text-align: center;
        background-color: #4a4a4a;
        border-radius: 4px;
        width: 120px;
        margin: 0 10px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    & button:nth-child(1){
        background-color: #9c2727;
    }
`