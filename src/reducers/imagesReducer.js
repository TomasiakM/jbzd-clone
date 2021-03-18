
const initialState = []



const imagesReducer = (state = initialState, action) => {
    let stateCopy = []
    let imgIndex

    switch (action.type) {
        case "SET_STORE":
            return action.payload
        case "CHANGE_LIKE":
            stateCopy = state
            imgIndex = stateCopy.findIndex((e) => e.id === action.payload)
            stateCopy[imgIndex].liked = !stateCopy[imgIndex].liked || false
            return stateCopy
        case "CHANGE_FAVORITE":
            stateCopy = state
            imgIndex = stateCopy.findIndex((e) => e.id === action.payload)
            stateCopy[imgIndex].favorite = !stateCopy[imgIndex].favorite || false
            return stateCopy
        default:
            return state;
    }
}

export default imagesReducer