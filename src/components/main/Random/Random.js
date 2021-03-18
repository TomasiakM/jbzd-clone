import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from "react-redux"

const Random = () => {
    const images = useSelector(state => state.images)

    const image = images[Math.floor(Math.random() * images.length)]
    return (
        <Redirect to={`/img/${image.id}`} />
    )
}

export default Random