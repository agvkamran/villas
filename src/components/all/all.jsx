import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './all.css';
import ApartmentCard from '../apartmentCard/apartmentCard';

class All extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                this.props.setAll(data.data.apartments);
            })
    }


    filterMillion = (e) => {
        this.props.filterByPrice(e.target.value);
    }

    changeValuePrice = (e) => {
        // console.log(this.props)
        this.props.updateVillaPrice(e.target.value);
    }

    sendRooms = (e) => {
        this.props.filterByRooms(e.target.value);
    }

    changeRooms = (e) => {
        this.props.changeVillaRooms(e.target.value);
    }



    // render() {
    //     return (
    //         <div className='wrapper wrapper-margin' id='apartments'>
    //             <div className='default-container'>
    //                 <div className='apartment'>
    //                     {this.props.allPage.all.map((a) =>
    //                         <div className='inner-apartment'>
    //                             <div key={a.id}>
    //                                 <ul className='apartment-list'>
    //                                     <li><img className='image' src={a.imageUrl} alt='apartment-1'></img></li>
    //                                     <div className='center'>
    //                                         <div className='description'>
    //                                             <li>Building: {a.building}</li>
    //                                             <li>Area: {a.area}</li>
    //                                             <li>Rooms: {a.rooms}</li>
    //                                             <li>Price: {a.price}</li>
    //                                         </div>
    //                                         <div className='see-more'>
    //                                             <NavLink to={'/villa/' + a.id}>See more</NavLink>
    //                                         </div>
    //                                     </div>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     )
    //                     }

    //                     <div className='filter-price'>

    //                         <input type="number" onChange={this.changeValuePrice}/>
    //                         {console.log(this.props.allPage.villaPrice)}
    //                         <button onClick={this.filterMillion}>filter by price</button>
    //                     </div>

    //                     <div className='filter-rooms'>
    //                         <input type="number" value={this.props.allPage.villaRooms} onChange={this.changeRooms} />
    //                         {console.log(this.props.allPage.villaRooms)}
    //                         <button onClick={this.sendRooms}>filter by rooms</button>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }



    render() {
        return (
            <div className='wrapper' id='apartments'>
                <div className='default-container'>
                    <div className='functions'>
                        <div className='filter-price'>
                            <input type="number" onChange={this.changeValuePrice} />
                            {console.log(this.props.allPage.villaPrice)}
                            <button onClick={this.filterMillion}>filter by price</button>
                        </div>
                        <div className='filter-rooms'>
                            <input type="number" value={this.props.allPage.villaRooms} onChange={this.changeRooms} />
                            {console.log(this.props.allPage.villaRooms)}
                            <button onClick={this.sendRooms}>filter by rooms</button>
                        </div>
                    </div>
                    <div className='apartment-all'>
                        {this.props.allPage.all.map((a) =>
                            <div className='inner-apartment'>
                                <div key={a.id}><div>
                                        <ApartmentCard a={a} />
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}



export default All;

