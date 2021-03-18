import React, { useEffect } from 'react'
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const Container = styled.div`
    height: 45px;
    width: 100%;
    margin-bottom: 20px;
`

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return <Container />
}

export default ScrollToTop