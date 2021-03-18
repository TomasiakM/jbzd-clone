import React, { useState } from 'react'

import Tags from "./Tags"

import { Container, Title, StyledInput, TextArea, MaxSigns, ForAdultButton, StyledButton, FormActions, Error } from "./StyledUploadForm"
import Sections from './Sections'
import Categories from "./Categories"

const UploadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
    </svg>

const UploadForm = () => {
    const [isOpen, setOpen]= useState(false)
    const [isAdultClicked, setAdultClicked] = useState(false)
    const [state, setState] = useState({ tags: [] })
    const [error, setError] = useState({})

    const handleClick = () => {
        setState({...state, forAdult: !isAdultClicked})
        setAdultClicked(!isAdultClicked)
    }

    const handleChange = (e) => {
        if(e.target.name === "title"){
            setError({})
        }
        if(e.target.name === "text"){
            if(e.target.value.length <= 4000){
                setState({...state ,[e.target.name]: e.target.value })
            }
        } else {
            setState({...state ,[e.target.name]: e.target.value })
        }
    }

    const validateData = () => {
        let errors = {}
        if(state.title === undefined || state.title === ""){
            errors = {...errors, title: "Pole tytuł jest wymagane!"}
        } else if(state.title.length < 3){
            errors = {...errors, title: "Pole tytuł musi być długie na co najmniej 3 znaki."}
        }

        setError(errors)
        if(Object.keys(errors).length === 0){
            alert(JSON.stringify(state, null, 6));
        }
    }

    return (
        <Container>
            <Title onFocus={() => setOpen(true)}>
                <input type="text" name="title" placeholder="Wpisz tytuł" onChange={handleChange} value={state.title || ''} />
                <label htmlFor="file-upload">
                    <span><UploadIcon /></span>
                </label>
                <input type="file" id="file-upload" name="file" onChange={handleChange}/>
            </Title>
            {error.title !== undefined ? <Error>{error.title}</Error> : ""}
            {isOpen ?
                <div>
                    <StyledInput type="text" placeholder="Wklej link filmu do YouTube" name="ytlink" onChange={handleChange} value={state.ytlink || ''} />
                    <TextArea placeholder="Tekst (opcjonalnie)" rows={6} cols="auto" name="text" onChange={handleChange} value={state.text || ''}></TextArea>
                    <MaxSigns>Ilość znaków {(state.text && state.text.length) || 0}/4000</MaxSigns>
                    <ForAdultButton>
                                <StyledButton onClick={handleClick} active={isAdultClicked}>+18</StyledButton>
                                <span>oznacz treść erotyczną, hard itp. brak oznaczenia będzie skutkować banem.</span>
                    </ForAdultButton>
                    <Tags state={state} setState={setState} />
                    <Categories state={state} setState={setState}/>
                    <Sections state={state} setState={setState}/>
                    <FormActions>
                        <button onClick={validateData}>Dodaj</button>
                        <button onClick={() => setOpen(false)}>Anuluj</button>
                    </FormActions>
                </div>
            :""}
        </Container>
    )
}

export default UploadForm