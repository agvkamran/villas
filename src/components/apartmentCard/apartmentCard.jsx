import React from 'react';
import { NavLink } from 'react-router-dom';
import '../apartments/apartmentsc.css';

const ApartmentCard = ({ a }) => {
    
    return (

                <ul className='apartment-list'>
                    <li><img className='image' src={a.imageUrl} alt='apartment-1'></img></li>

                    <div className='center'>

                        <div className='description'>
                            <li><i class="fas fa-hammer"></i> Building: {a.building}</li>
                            <li><i class="fas fa-warehouse"></i> Area: {a.area}</li>
                            <li><i class="fas fa-door-open"></i> Rooms: {a.rooms}</li>
                            <li><i class="fas fa-dollar-sign"></i> Price: {a.price}</li>
                        </div>

                        <div className='see-more'>
                            <NavLink to={'/villa/' + a.id} className='see'>See more</NavLink>
                        </div>
                    </div>
                </ul>
    )
}


export default ApartmentCard;