import React, { useState } from 'react';

import { TagsContainer, Tag, StyledInput, ChoosenTags, ChoosenTag, HowToAddTag } from "./StyledUploadForm"

const tagsArray = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10", "tag11", "tag12"]

const Tags = ({ state, setState }) => {
    const [tagInput, setTagInput] = useState("")

    const addTag = (e) => {
        if(e.keyCode === 9 || e.keyCode === 13){
            e.preventDefault()
            const isSetTag = state.tags.find((e)=> e === tagInput)
            if(state.tags.length < 5 && isSetTag === undefined && tagInput !== ""){
                setState({...state, tags: [...state.tags, tagInput]})
                setTagInput("")
            }
        }
    }

    const addTagFromRecommendations = (tag) => {
        const isSetTag = state.tags.find((e)=> e === tag)
        if(state.tags.length < 5 && isSetTag === undefined){
            setState({...state, tags: [...state.tags, tag]})
        }
    }

    const deleteTag = (tag) => {
        setState({...state, tags: state.tags.filter((e) => e !== tag)})
    }

    const handleChange = (e) => {
        if(e.target.value.length < 20){
            setTagInput(e.target.value)
        }
    }

    return (
        <TagsContainer>
            <h4>Wybierz tagi:</h4>
            <div>
                <h4>Sugerowane</h4>
                <div>
                    {tagsArray.map((tag) => {
                        const isSetTag = state.tags.find((e) => e === tag)
                        return isSetTag === undefined ?
                            <Tag key={tag} onClick={() => addTagFromRecommendations(tag)}>#{tag}</Tag> : ""
                    })}
                </div>
            </div>
            <StyledInput type="text" name="addTagInput" placeholder="Wpisz tag" onChange={handleChange} onKeyDown={addTag} value={tagInput}/>
            <ChoosenTags>
                {state.tags.length > 0 ? state.tags.map((tag) =>
                    <ChoosenTag key={tag}>#{tag}
                        <div onClick={() => deleteTag(tag)}>
                            <span></span>
                            <span></span>
                        </div>
                    </ChoosenTag>) :
                    <HowToAddTag>Aby dodać kolejny tag należy dodać przecinek albo nacisnąć Tab lub Enter.</HowToAddTag>}
            </ChoosenTags>
        </TagsContainer>
    );
};

export default Tags;