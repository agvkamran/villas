import { addCommentAC, onChangeCommitAC, likeCommentAC } from '../../redux/villaReducer';
import Villa from './villa';
import { connect } from 'react-redux';
import { addToFavouritesAC, removeFromFavouritesAC } from '../../redux/favouriteReducer';

// class VillaContainer extends React.Component {

    // state = {};

    // componentDidMount() {
    //     let villaId = this.props.match.params.villaId;
    //     axios.get('http://localhost:3000/db.json')
    //         .then(data => {
    //             this.setState(data.data.apartments[villaId]);
    //         })
    // }

    // addComment = () => {
    //     // this.props.dispatch({type: 'ADD-COMMENT'});
    //     this.props.dispatch(addCommentAC());
    //     this.forceUpdate();
    // }

    // onChangeComment = (e) => {
    //     let cmnt = e.target.value;
    //     // this.props.dispatch({type: 'UPDATE-NEW-COMMENT', newComment: cmnt});
    //     this.props.dispatch(onChangeCommitAC(cmnt));
    // }

    // likeComment = () => {
    //     // this.props.dispatch({type: 'LIKE-COMMENT'});
    //     this.props.dispatch(likeCommentAC());
    //     this.forceUpdate();
    // }

    // addToFavourites = (e) => {
    //     const f = e.clientX;
    //     console.log(f)
    //     if (this.props.store.getState().favouritePage.selected) {
    //         this.props.dispatch({ type: 'ADD_TO_FAVOURITES', newF: f });
    //         this.forceUpdate();
    //         console.log(this.props.store.getState());
    //     }
    //     else{
    //         this.props.dispatch({ type: 'REMOVE_FROM_FAVOURITES'});
    //         this.forceUpdate(); 
    //         console.log(this.props.store.getState());
    //     }
    //     console.log(this.props.store.getState())
    // }

    // addToFavourites = () => {
    //     if (this.props.store.getState().favouritePage.selected) {
    //         this.props.dispatch({ type: 'ADD_TO_FAVOURITES', newF: this.state });
    //         this.forceUpdate();
    //         console.log(this.props.store.getState());
    //     }
    //     else {
    //         this.props.dispatch({ type: 'REMOVE_FROM_FAVOURITES' });
    //         this.forceUpdate();
    //         console.log(this.props.store.getState());
    //     }
    //     this.forceUpdate();
    // }

//     render() {
//         console.log(this.props)
//         return (

//             <div>
//                 <Villa villaPage={this.props.store.getState().villaPage}
//                     state={this.state}
//                     value={this.props.text}
//                     onChangeComment={this.onChangeComment}
//                     addComment={this.addComment}
//                     likeComment={this.likeComment}
//                     addToFavourites={this.addToFavourites}
//                 />
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        villaPage: state.villaPage,
        favouritePage: state.favouritePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addCommentAC());
            // this.forceUpdate();
        },
        onChangeComment: (e) => {
            let cmnt = e.target.value;
            // this.props.dispatch({type: 'UPDATE-NEW-COMMENT', newComment: cmnt});
            dispatch(onChangeCommitAC(cmnt));
        },
        likeComment: (commentId) => {
            console.log("commentId: " + commentId);
            dispatch(likeCommentAC(commentId));
        },
        addToFavourites: (f_id) => {
            dispatch(addToFavouritesAC(f_id));
        },
        removeFromFavourites: (f_id) => {
            dispatch(removeFromFavouritesAC(f_id));
        }
        // addToFavourites: () => {
        //     if (this.props.store.getState().favouritePage.selected) {
        //         dispatch({ type: 'ADD_TO_FAVOURITES', newF: this.state });
        //         console.log(this.props.store.getState());
        //     }
        //     else {
        //         dispatch({ type: 'REMOVE_FROM_FAVOURITES' });
        //         console.log(this.props.store.getState());
        //     }
        // }
    }
}
/* <div>
    <Villa villaPage={this.props.store.getState().villaPage}
        state={this.state}
        value={this.props.text}
        onChangeComment={this.onChangeComment}
        addComment={this.addComment}
        likeComment={this.likeComment}
        addToFavourites={this.addToFavourites}
    />
</div> */

const VillaContainer = connect(mapStateToProps, mapDispatchToProps)(Villa);

export default VillaContainer;


