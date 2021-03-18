import React, { useRef, useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useClickAway } from "ahooks"

//Components
import Categories from "./NavComponents/Categories"
import Hamburger from "./NavComponents/Hamburger"
import Messages from "./NavComponents/Messages"
import Notifikations from "./NavComponents/Notifikations"

//Icons
import Envelope from "./NavComponents/icons/Envelope"
import Bell from "./NavComponents/icons/Bell"

//Logo
import logo from "./logo.png"

const NavBar = styled.div`
    display: flex;
    height: 45px;
    max-width: 1200px;
    margin: 0 auto;

    & a img{
        padding: 5px;
        height: 45px;
    }
`
const Container = styled.div`
    background-color: #181818;
    position: fixed;
    width: 100%;
    z-index: 111;
    top: 0;
`

const Icons = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div{
        position: relative;
        cursor: pointer;
        padding: 2px;
        margin: 0 8px;
    }

    @media(max-width: 1200px){
        & > div{
            position: static;
        }
    }
`


const Nav = () => {
    const [isOpen, setOpen] = useState(false)
    const [isMessagesOpen, setMessagesOpen] = useState(false)
    const [isNotificationOpen, setNotificationOpen] = useState(false)

    const MessagesRef = useRef()
    const NotificationRef = useRef()

    useClickAway(() => {
        setMessagesOpen(false)
    }, [MessagesRef])

    useClickAway(() => {
        setNotificationOpen(false)
    }, [NotificationRef])

    return (
        <Container>
            <NavBar>
                <Link to="/" onClick={() => {window.scrollTo(0,0)}}><img src={logo} alt="logo"/></Link>
                <Categories isOpen={isOpen} setOpen={setOpen} />
                <Icons>
                    <div ref={MessagesRef}>
                        <div onClick={() => setMessagesOpen(!isMessagesOpen)}>
                            <Envelope isMessagesOpen={isMessagesOpen} />
                        </div>
                        <Messages isMessagesOpen={isMessagesOpen} setMessagesOpen={setMessagesOpen} />
                    </div>
                    <div ref={NotificationRef}>
                        <div onClick={() => setNotificationOpen(!isNotificationOpen)}>
                            <Bell isNotificationOpen={isNotificationOpen} />
                        </div>
                        <Notifikations isNotificationOpen={isNotificationOpen} setNotificationOpen={setNotificationOpen} />
                    </div>
                </Icons>
                <Hamburger isOpen={isOpen} setOpen={setOpen} />
            </NavBar>
        </Container>
    )
}

export default Nav