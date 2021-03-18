import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

//Style
import { Container, UserProfileImg, ArticleAction, ArticleDescription, ArticleHeader, ArticleInfo, ArticleSection, Tags, LikeButton, Comments, ArticelInfoDetails, UserInfo, TagAction, Tag } from "./StyledArticle"

//icons
import Chat from "../../icons/Chat"
import FavoriteIcon from "./FavoriteIcon"

const Article = ({ data }) => {
    const isLiked = useSelector((e) => e.images.find((e) => e.id === data.id).liked) || false
    const isFavorite = useSelector((e) => e.images.find((e) => e.id === data.id).favorite) || false
    const dispatch = useDispatch()

    return (
        <Container>
            <UserProfileImg><span></span></UserProfileImg>
            <ArticleSection>
                <ArticleHeader>
                    <Link to={`/img/${data.id}`}>Image id: {data.id}</Link>
                    <div onClick={() => dispatch({ type: "CHANGE_FAVORITE", payload: data.id })}>
                        <FavoriteIcon isFavorite={isFavorite} />
                    </div>
                </ArticleHeader>
                <ArticleInfo>
                    <ArticelInfoDetails>
                        <UserInfo>
                            <Link to={`/user/${data.author}`} >{data.author}</Link>
                            <span>10 godzin temu</span>
                        </UserInfo>
                        <Tags>
                            <Tag>
                                <Link to="/">#tag1</Link>
                                <TagAction>
                                    <button>Obserwuj</button>
                                    <button>Czarna lista</button>
                                </TagAction>
                            </Tag>
                            <Tag>
                                <Link to="/">#tag2</Link>
                                <TagAction>
                                    <button>Obserwuj</button>
                                    <button>Czarna lista</button>
                                </TagAction>
                            </Tag>
                            <Tag>
                                <Link to="/">#tag3</Link>
                                <TagAction>
                                    <button>Obserwuj</button>
                                    <button>Czarna lista</button>
                                </TagAction>
                            </Tag>
                        </Tags>
                    </ArticelInfoDetails>
                    <Comments><Chat /><span>999</span></Comments>
                </ArticleInfo>
                <ArticleDescription><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, explicabo odit! Ipsum ab placeat maxime natus eveniet numquam et pariatur. Ut itaque illum perferendis! Amet quis delectus dolores illum iure?</p></ArticleDescription>
                <Link to={`/img/${data.id}`}>
                    <img src={data.download_url} alt={data.id}/>
                </Link>
            </ArticleSection>
            <ArticleAction>
                <LikeButton isLiked={isLiked} onClick={() => dispatch({ type: "CHANGE_LIKE", payload: data.id })}>+99999</LikeButton>
                <button>SPAM</button>
            </ArticleAction>
        </Container>
    )
}

export default Article