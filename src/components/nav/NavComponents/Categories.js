import React from 'react'
import { Link } from "react-router-dom"


//Styles
import { Container, CategoryButton, CategoriesMenu, Title, DesctopCategories, MobileCategories, NavSection, CategoriesSection, User } from "./StyledCategories"

//Icons
import CaretUp from "./icons/CaretUp"
import Logout from "./icons/Logout"

const Categories = ({ isOpen, setOpen }) => {
    return (
        <Container>
            <DesctopCategories>
                <Link onClick={() => setOpen(false)} to="/">Mikroblog</Link>
                <Link onClick={() => setOpen(false)} to="/">Najnowsze</Link>
                <Link onClick={() => setOpen(false)} to="/">Video</Link>
                <Link onClick={() => setOpen(false)} to="/">Oczekujące</Link>
                <Link onClick={() => setOpen(false)} to="/losowe">Losowe</Link>
                <Link onClick={() => setOpen(false)} to="/">Top</Link>
                <Link onClick={() => setOpen(false)} to="/">Upl</Link>
            </DesctopCategories>
            <NavSection isOpen={isOpen}>
                <User isOpen={isOpen}>
                    <span></span>
                    <Link onClick={() => setOpen(false)} to="/">xyz</Link>
                    <Logout />
                </User>
                <MobileCategories isOpen={isOpen}>
                    <div>
                        <Link onClick={() => setOpen(false)} to="/">Mikroblog</Link>
                        <Link onClick={() => setOpen(false)} to="/">Posty</Link>
                        <Link onClick={() => setOpen(false)} to="/">Oczekujące</Link>
                        <Link onClick={() => setOpen(false)} to="/ulubione">Ulubione</Link>
                        <Link onClick={() => setOpen(false)} to="/losowe">Losowe</Link>
                        <Link onClick={() => setOpen(false)} to="/">Top</Link>
                        <Link onClick={() => setOpen(false)} to="/">Upload</Link>
                        <Link onClick={() => setOpen(false)} to="/">Ustawienia</Link>
                    </div>
                </MobileCategories>
                <CategoryButton>
                    <span>Kategorie <CaretUp /></span>
                    <CategoriesMenu isOpen={isOpen}>
                        <Title>Publiczne:</Title>
                        <CategoriesSection>
                            <Link onClick={() => setOpen(false)} to="/">Motoryzacja</Link>
                            <Link onClick={() => setOpen(false)} to="/">Wiedza</Link>
                            <Link onClick={() => setOpen(false)} to="/">Humor</Link>
                            <Link onClick={() => setOpen(false)} to="/">Polityka</Link>
                            <Link onClick={() => setOpen(false)} to="/">Dowcipy</Link>
                            <Link onClick={() => setOpen(false)} to="/">Pasty</Link>
                            <Link onClick={() => setOpen(false)} to="/">Czarny humor</Link>
                            <Link onClick={() => setOpen(false)} to="/">Gry</Link>
                            <Link onClick={() => setOpen(false)} to="/">Pytania</Link>
                            <Link onClick={() => setOpen(false)} to="/">Sport</Link>
                            <Link onClick={() => setOpen(false)} to="/">Hobby</Link>
                            <Link onClick={() => setOpen(false)} to="/">Filmy</Link>
                            <Link onClick={() => setOpen(false)} to="/">Ciekawoski</Link>
                        </CategoriesSection>
                        <hr />
                        <Title red>Zamknięte:</Title>
                        <CategoriesSection>
                            <Link onClick={() => setOpen(false)} to="/">Hard</Link>
                            <Link onClick={() => setOpen(false)} to="/">Witam</Link>
                            <Link onClick={() => setOpen(false)} to="/">Anime</Link>
                            <Link onClick={() => setOpen(false)} to="/">Stopy</Link>
                            <Link onClick={() => setOpen(false)} to="/">Furry</Link>
                            <Link onClick={() => setOpen(false)} to="/">Inne NSFW</Link>
                            <Link onClick={() => setOpen(false)} to="/">Cosplay</Link>
                            <Link onClick={() => setOpen(false)} to="/">Hard memy</Link>
                            <Link onClick={() => setOpen(false)} to="/">Własne F</Link>
                            <Link onClick={() => setOpen(false)} to="/">Własne M</Link>
                            <Link onClick={() => setOpen(false)} to="/">Metale</Link>
                            <Link onClick={() => setOpen(false)} to="/">Templatki</Link>
                        </CategoriesSection>
                    </CategoriesMenu>
                </CategoryButton>
            </NavSection>
        </Container>
    )
}

export default Categories