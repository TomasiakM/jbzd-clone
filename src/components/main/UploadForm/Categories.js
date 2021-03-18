import React from 'react'

import { ChooseCatAndSec } from "./StyledUploadForm"

const Categories = ({ state, setState }) => {
    const categories = ["Motoryzacja", "Wiedza", "Humor", "Polityka", "Dowcipy", "Pasty", "Czarny humor", "Gry", "Pytania", "Sport", "Hobby", "Filmy", "Ciekawoski"]

    const handleClick = (cat) =>{
        setState({...state, category: cat})
    }

    const deleteCategory = () => {
        setState({...state, category: false})
    }

    return (
        <ChooseCatAndSec>
            <h4>Wybierz kategorię: <span>(opcjonalnie)</span></h4>
            <div>
                {categories.map((cat) => {
                    return cat === state.category ? <div key={cat} style={{ backgroundColor: "#9c2727"}} onClick={deleteCategory}>{cat}</div> :
                    <div key={cat} onClick={() => handleClick(cat)}>{cat}</div>
                })}
            </div>
        </ChooseCatAndSec>
    )
}

export default Categories