// import './apartmentsc.css';
import { connect } from 'react-redux';
import {setAllAC, filterVipAC} from '../../redux/allReducer';
import Apartments from './apartments';

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
        filterVip: (vip) => {
            dispatch(filterVipAC(vip));
        }
    }
}

const ApartmentsContainer = connect(mapStateToProps, mapDispatchToProps)(Apartments);

export default ApartmentsContainer;
