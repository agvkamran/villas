import React from 'react';
import './villa.css';
import axios from 'axios';
import { addCommentAC, onChangeCommitAC, likeCommentAC } from '../../redux/villaReducer';

class VillaContainer extends React.Component {

    state = {};

    componentDidMount() {
        let villaId = this.props.match.params.villaId;
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                this.setState(data.data.apartments[villaId]);
            })
    }

    addComment = () => {
        // this.props.dispatch({type: 'ADD-COMMENT'});
        this.props.dispatch(addCommentAC());
        this.forceUpdate();
    }

    onChangeComment = (e) => {
        let cmnt = e.target.value;
        // this.props.dispatch({type: 'UPDATE-NEW-COMMENT', newComment: cmnt});
        this.props.dispatch(onChangeCommitAC(cmnt));
    }

    likeComment = () => {
        // this.props.dispatch({type: 'LIKE-COMMENT'});
        this.props.dispatch(likeCommentAC());
        this.forceUpdate();
    }

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

    addToFavourites = () => {
        if (this.props.store.getState().favouritePage.selected) {
            this.props.dispatch({ type: 'ADD_TO_FAVOURITES', newF: this.state });
            this.forceUpdate();
            console.log(this.props.store.getState());
        }
        else {
            this.props.dispatch({ type: 'REMOVE_FROM_FAVOURITES' });
            this.forceUpdate();
            console.log(this.props.store.getState());
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <p>Id: {this.state.id}</p>
                <img src={this.state.imageUrl}></img>

                <div class='description'>
                    <li>Building: {this.state.building}</li>
                    <li>Area: {this.state.area}</li>
                    <li>Rooms: {this.state.rooms}</li>
                    <li>Price: {this.state.price}</li>
                    <li>Price: {this.state.country}</li>
                    <li>Price: {this.state.category}</li>
                </div>
                <div class="comments">
                    <input type="text" value={this.props.text} onChange={this.onChangeComment} />

                    <button onClick={this.addComment}>ADD COMMENT</button>

                    <div>{this.props.store.getState().villaPage.comments.map(x => <div key={x.idx}>
                        {x.text}

                        <button disabled={this.props.store.getState().villaPage.buttonDisabled} onClick={this.likeComment}>Like:</button>
                        <p> {this.props.store.getState().villaPage.likesCount}</p>
                    </div>)}</div>
                </div>
                <div>
                    {/* <button onClick={this.addToFavourites}>ADD TO FAVORITE</button> */}
                    <button onClick={this.addToFavourites}>ADD TO FAVORITE</button>
                </div>
            </div>
        )
    }
}

export default VillaContainer;
