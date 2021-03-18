import React from 'react'
import { useSelector } from "react-redux"
import { Redirect, useParams } from "react-router-dom"
import Articles from '../Articles/Articles'

const User = () => {
    const images = useSelector(state => state.images)
    const  { userName } = useParams()

    const userArticles = images.filter((img) => img.author === userName)

    if(userArticles.length === 0) return <Redirect to="/404" />

    return  <Articles images={userArticles} />
}

export default User