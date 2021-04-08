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
        return (
            <div className='sm-page'>
                <div className='default-container'>
                    <div className='sm-inner'>
                        <div>
                        <img src={this.state.imageUrl} alt='apartment' className='sm-image'></img>
                        </div>
                        {
                            <div className='sm-description'>
                                <div className='information'>
                                    <ul>
                                        <li><i class="fas fa-hammer"></i> Building: {this.state.building}</li>
                                        <li><i class="fas fa-warehouse"></i> Area: {this.state.area}</li>
                                        <li><i class="fas fa-door-open"></i> Rooms: {this.state.rooms}</li>
                                        <li><i class="fas fa-globe-europe"></i> Country: {this.state.country}</li>
                                        <li><i class="fab fa-typo3"></i> Category: {this.state.category}</li>
                                        <li><i class="fas fa-dollar-sign"></i> Price: {this.state.price}</li>
                                    </ul>
                                </div>
                                <div className='realtor'>
                                    <ul>
                                        <li><i class="fas fa-signature"></i> {this.state.realtor}</li>
                                        <li><i class="fas fa-envelope-square"></i> {this.state.email}</li>
                                        <li><i class="fas fa-phone"></i> {this.state.phone}</li>
                                    </ul>
                                </div>
                                {/* <div className='info'>
                                    <p><i class="fas fa-info"></i> Information: {this.state.about}</p>
                                </div> */}
                            </div>}
                        <div className='info'>
                            <p><i class="fas fa-info"></i> Information: {this.state.about}</p>
                        </div>
                        <div className='sm-favourite'>
                            <p>{this.isFavourite() ? "Favourite" : "Not favourite"}</p>
                            <button onClick={this.addToFavourites} className='btn-fav fav'>Add to favourites</button>
                            <button onClick={this.removeFromFavourites} className='btn-fav not-fav'>Remove from favourites</button>
                        </div>
                        <div className="sm-comments">
                            <input type="text" value={this.props.text} onChange={this.props.onChangeComment} className='comment-input' />

                            <button onClick={this.addComment} className='add-comment'>ADD COMMENT</button>

                            <div>{this.props.villaPage.comments.map(comment => <div key={comment.id} className='comment'>
                                {comment.text}
                                <button disabled={comment.buttonDisabled} onClick={() => this.props.likeComment(comment.id)}><i class="fas fa-thumbs-up"></i> {comment.likesCount}</button>
                            </div>)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Villa;
