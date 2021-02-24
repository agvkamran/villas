import axios from 'axios';
import React from 'react';
import './apartments.css';
import ApartmentCard from '../apartmentCard/apartmentCard'

export class ApartmentsContainer extends React.Component {

    state = {
        villas: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                // console.log(this.state.villas)
                this.setState({ villas: data.data.apartments });
                // console.log(this.state.villas)
            });
    }

    render() {
        return (
            <div className='wrapper' id='apartments'>
                {this.state.villas.map((a) => <div key={a.id} className='apartment'>
                    {/* <ul className='apartment-list'>
                        <li><img className='image' src={a.imageUrl} alt='apartment-1'></img></li>
                        <div className='center'>
                            <div className='description'>
                                <li>Building: {a.building}</li>
                                <li>Area: {a.area}</li>
                                <li>Rooms: {a.rooms}</li>
                                <li>Price: {a.price}</li>
                            </div>
                            <div className='see-more'>
                                <NavLink to={'/villa/' + a.id}><button onClick={this.seeMore}>See more</button></NavLink>
                            </div>
                        </div>
                    </ul> */}
                    <ApartmentCard a={a} />
                </div>)}
            </div>
        )
    }
}
// seeMore={this.seeMore}