import { connect } from 'react-redux';
import All from './all';
import { changeVillaRoomsAC, filterByPriceAC, filterByRoomsAC, setAllAC, updateVillaPriceAC, filterVipAC } from '../../redux/allReducer';

const mapStateToProps = (state) => {
    return {
        allPage: state.allPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAll: (newApartments) => {
            dispatch(setAllAC(newApartments));
        },
        filterByPrice: (priceee) => {
            dispatch(filterByPriceAC(priceee))
        },
        updateVillaPrice: (priceee) => {
            dispatch(updateVillaPriceAC(priceee))
        },
        filterByRooms: (rooms) => {
            dispatch(filterByRoomsAC(rooms));
        },
        changeVillaRooms: (rooms) => {
            dispatch(changeVillaRoomsAC(rooms))
        },
        filterVip: () => {
            dispatch(filterVipAC());
        }
    }
}

const AllContainer = connect(mapStateToProps, mapDispatchToProps)(All);

export default AllContainer;