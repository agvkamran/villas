const SET_ALL = 'SET_ALL';
const FILTER_BY_PRICE = 'FILTER_BY_PRICE';

const initialState = {
    all: [],
    million: []
}

const allReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL:
            return { ...state, all: action.newApartments }
        case FILTER_BY_PRICE:
            let filteredAppartments = state.all.filter((appartment) => appartment.price < action.price)
            return {...state, all: filteredAppartments}
        default:
            return state;
    }
}

export const setAllAC = (newApartments) => ({ type: SET_ALL, newApartments });
export const filterByPriceAC = (price) => ({ type: FILTER_BY_PRICE, price });

export default allReducer;