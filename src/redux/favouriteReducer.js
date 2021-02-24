const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

let initialState = {
    favourites: [],
    selected: false
}

const favouriteReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_FAVOURITES) {
        return {
            ...state,
            favourites: [
                ...state.favourites,
                action.f_id
            ],
            selected: !state.selected
        };
    }
    else if (action.type === REMOVE_FROM_FAVOURITES) {
        return {
            ...state,
            favourites: [
                ...state.favourites.filter((f_id) => f_id !== action.f_id)
            ]
        };
    }
    return state;
}


export const addToFavouritesAC = (f_id) => {
    return {
        type: ADD_TO_FAVOURITES, f_id: f_id
    }
}

export const removeFromFavouritesAC = (f_id) => {
    return {
        type: REMOVE_FROM_FAVOURITES, f_id: f_id
    }
}

export default favouriteReducer;