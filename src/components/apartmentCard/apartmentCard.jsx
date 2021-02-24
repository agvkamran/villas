import React from 'react';
import { NavLink } from 'react-router-dom';
import './apartmentCard.css'
// , seeMore
const ApartmentCard = ({ a }) => {
    return (
        <ul className='apartment-list'>
            <li><img className='image' src={a.imageUrl} alt='apartment-1'></img></li>
            <div className='center'>
                <div className='description'>
                    <li>Building: {a.building}</li>
                    <li>Area: {a.area}</li>
                    <li>Rooms: {a.rooms}</li>
                    <li>Price: {a.price}</li>
                </div>
                <div className='see-more'>
                    {/* <NavLink to={'/villa/' + a.id}><button onClick={seeMore}>See more</button></NavLink> */}
                    <NavLink to={'/villa/' + a.id}>See more</NavLink>
                </div>
            </div>
        </ul>
    )
}


export default ApartmentCard;