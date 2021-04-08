const SET_ALL = 'SET_ALL';
const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
const UPDATE_VILLA_PRICE = 'UPDATE_VILLA_PRICE';
const FILTER_BY_ROOMS = 'FILTER_BY_ROOMS';
const CHANGE_VILLA_ROOMS = 'CHANGE_VILLA_ROOMS';
const SET_VIP = 'SET_VIP';
const VIP = 'VIP';
// const STANDARD = 'STANDARD';

const initialState = {
    all: [],
    million: [],
    villaPrice: 0,
    villaRooms: 0
}

const allReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL:
            console.log(action);
            return { ...state, all: action.newApartments }

        // case FILTER_BY_PRICE:
        //     let filteredAppartments = state.all.filter((appartment) => appartment.price < action.price)
        //     return {...state, all: filteredAppartments}

        case FILTER_BY_PRICE:
            let filteredAppartments = state.all.filter(
                (apartment) => apartment.price < state.villaPrice)
            return { ...state, all: filteredAppartments }

        case UPDATE_VILLA_PRICE:
            return { ...state, villaPrice: action.priceee }

        case FILTER_BY_ROOMS:
            let filteredRooms = state.all.filter((apartment) => apartment.rooms == state.villaRooms)
            return { ...state, all: filteredRooms }

        case CHANGE_VILLA_ROOMS:
            return { ...state, villaRooms: action.rooms }
        case SET_VIP:
            let filteredVip = state.all.filter((apartment) => apartment.type == VIP)
            return { ...state, all: filteredVip}
        default:
            return state;
    }
}

export const setAllAC = (newApartments) => ({ type: SET_ALL, newApartments });
export const filterByPriceAC = (price) => ({ type: FILTER_BY_PRICE, price });
export const updateVillaPriceAC = (priceee) => ({ type: UPDATE_VILLA_PRICE, priceee });
export const filterByRoomsAC = (rooms) => ({ type: FILTER_BY_ROOMS, rooms });
export const changeVillaRoomsAC = (rooms) => ({ type: CHANGE_VILLA_ROOMS, rooms });
export const filterVipAC = () => ({type: SET_VIP});

export default allReducer;