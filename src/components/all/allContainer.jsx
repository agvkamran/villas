import { connect } from 'react-redux';
import All from './all';
import { filterByPriceAC, setAllAC } from '../../redux/allReducer';

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
        filterByPrice: (price) => {
            dispatch(filterByPriceAC(price))
        }
    }
}

const AllContainer = connect(mapStateToProps, mapDispatchToProps)(All);

export default AllContainer;