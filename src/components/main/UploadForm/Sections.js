import React from 'react'

import { ChooseCatAndSec } from "./StyledUploadForm"

const Sections = ({ state, setState }) => {
    const sections = ["Hard", "Witam", "Anime", "Stopy", "Furry", "Inne NSFW", "Cosplay", "Hard memy", "Własne F", "Własne M", "Metale", "Templatki"]

    const handleClick = (sec) =>{
        setState({...state, section: sec})
    }

    const deleteSection = () => {
        setState({...state, section: false})
    }

    return (
        <ChooseCatAndSec>
            <h4>Wybierz dział: <span>(erotyka itp. = witam, brak oznaczenia = ban)</span></h4>
            <div>
                {sections.map((sec) => sec === state.section ?
                    <div key={sec} style={{ backgroundColor: "#9c2727"}} onClick={deleteSection}>{sec}</div>
                    : <div key={sec} onClick={() => handleClick(sec)}>{sec}</div>
                )}
            </div>
        </ChooseCatAndSec>
    )
}

export default Sections