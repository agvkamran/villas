import { connect } from 'react-redux';
// import { addToFavouritesAC, removeFromFavouritesAC } from '../../redux/favouriteReducer';
import Favourite from './favourite';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        villaPage: state.villaPage,
        favouritePage: state.favouritePage
    }
}

const mapDispatchToProps = () => {
    return {
        
    }
}

const FavouriteContainer = connect(mapStateToProps, mapDispatchToProps)(Favourite);

export default FavouriteContainer;
