import React from 'react';
import './villa.css';
import axios from 'axios';

class Villa extends React.Component {

    state = {};

    componentDidMount() {
        let villaId = this.props.match.params.villaId;
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                this.setState(data.data.apartments[villaId]);
                // console.log(this.state)
            })
        // axios.get('http://localhost:3000/db.json')
        // .then(data => {
        //     this.setState(data.data.apartments);
        // })
    }

    addToFavourites = () => {
        let f_id = parseInt(this.props.match.params.villaId);
        this.props.addToFavourites(f_id);
    }

    removeFromFavourites = () => {
        let f_id = parseInt(this.props.match.params.villaId);
        this.props.removeFromFavourites(f_id);
    }

    addComment = () => {
        this.props.addComment();
    }

    isFavourite = () => {
        let res = this.props.favouritePage.favourites.find((x) => x === parseInt(this.props.match.params.villaId));
        return res !== undefined
    }


    render() {
        // console.log(this.state.villaPage.id)
        return (
            <div>
                {console.log(this.state)}
                <p>Id: {this.state.id}</p>
                <img src={this.state.imageUrl} alt='apartment'></img>
                {
                    <div className='description'>
                        <li>Building: {this.state.building}</li>
                        <li>Area: {this.state.area}</li>
                        <li>Rooms: {this.state.rooms}</li>
                        <li>Price: {this.state.price}</li>
                        <li>Price: {this.state.country}</li>
                        <li>Price: {this.state.category}</li>
                    </div>}
                <div className="comments">
                    <input type="text" value={this.props.text} onChange={this.props.onChangeComment} />

                    <button onClick={this.addComment}>ADD COMMENT</button>

                    <div>{this.props.villaPage.comments.map(comment => <div key={comment.id}>
                        {comment.text}
                        <button disabled={comment.buttonDisabled} onClick={() => this.props.likeComment(comment.id)}>Like:</button>
                        <p> {comment.likesCount}</p>
                    </div>)}</div>
                </div>
                <div>
                    <p>{this.isFavourite() ? "FAVOURITE" : "NOT FAVOURITE"}</p>
                    <button onClick={this.addToFavourites}>ADD TO FAVOURITES</button>
                    <button onClick={this.removeFromFavourites}>REMOVE TO FAVOURITES</button>
                </div>
            </div>
        )
    }
}

export default Villa;
