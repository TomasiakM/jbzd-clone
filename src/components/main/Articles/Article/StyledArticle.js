import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin: 0 0 50px 0;

    @media(max-width: 1200px){
        flex-direction: column;
    }
`

export const UserProfileImg = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 5px;

    & span {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #9c2727;
    }

    @media(max-width: 1200px){
        display: none;
        width: 100%;
    }
`

export const ArticleSection = styled.div`
    max-width: 600px;
    width: 100%;

    & a img{
        width: 100%;
    }

    @media(max-width: 1200px){
        margin: 0 auto;
    }
`

export const ArticleAction = styled.div`
    width: 90px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    & button{
        border-radius: 4px;
        border: none;
        outline: none;
        margin-bottom: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    & button:nth-child(2){
        background-color: #929292;
        padding: 6px 0;
    }

    @media(max-width: 1200px){
        align-self: flex-start;
        max-width: 600px;
        width: 100%;
        margin: 0;
        padding: 0 4px;
        margin: 0 auto;
        flex-direction: row;

        & button:nth-child(1){
            margin: 5px 2px 0 0;
            width: 50%;
        }

        & button:nth-child(2){
            margin: 5px 0 0 2px;
            width: 50%;
        }
    }
`

export const LikeButton = styled.button`
    background-color: ${props => props.isLiked ? "#94b425" : "#9c2727"};
    padding: 10px 0;
`

const ArticleStyle = {
    display: "flex",
    padding: "8px",
    marginBottom: "4px",
    backgroundColor: "#1f1f1f",
    borderRadius: "4px",
}

export const ArticleHeader = styled.div`
    ${ArticleStyle}
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;

    & a{
        width: 100%;
        font-size: 20px;
        text-decoration: none;
        word-wrap: break-word;
        min-width: 0;
    }

    & svg{
        margin: 0 4px;
    }
`

export const ArticleInfo = styled.div`
    ${ArticleStyle}
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
`

export const ArticelInfoDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    min-width: 0;

    @media(max-width: 700px){
        flex-direction: column;
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 6px;
    min-width: 0;

    & a{
        word-wrap: break-word;
        max-width: 100%;
        min-width: 0;
        color: #9c2727;
        text-decoration: none;
        margin-right: 6px;
    }

    & span{
        color: #6a6a6a;
        margin-right: 6px;
    }
`

export const Tags = styled.div`
    display: flex;

    & a{
        text-decoration: none;
        margin-right: 4px;

        &:hover{
            color: #9c2727;
        }
    }

    @media(max-width: 700px){
        margin-top: 2px;
    }
`

export const TagAction = styled.div`
    display: none;
    padding: 12px;
    position: absolute;
    border-radius: 4px;
    background-color: #313131;
    top: 14px;
    width: 240px;

    & button{
        padding: 12px 0;
        border: none;
        border-radius: 4px;
        display: block;
        width: 50%;
        cursor: pointer;
        font-size: 15px;
        outline: none;

        &:nth-child(1){
            background-color: #9c2727;
            margin-right: 4px;
        }

        &:nth-child(2){
            background-color: #000;
        }
    }
`

export const Tag = styled.div`
    position: relative;

    &:hover{
        ${TagAction}{
            display: flex;
        }

        & a{
            color: #9c2727;
        }
    }
`

export const Comments = styled.div`
    display: flex;

    & svg{
        margin-right: 4px;
    }

    & span{
        font-size: 14px;
    }
`

export const ArticleDescription = styled.div`
    ${ArticleStyle}

    & p{
        word-wrap: break-word;
        min-width: 0;
    }
`