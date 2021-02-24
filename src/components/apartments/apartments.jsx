import React from 'react';
import './apartments.css';

const Apartments = (props) => {

    let apartment = props.apartments.map((a) => <div className='apartment'>
        <ul className='apartment-list'>
            <li><img className='image' src={a.photoUrl} alt='apartment-1'></img></li>
            <div className='center'>
                <div className='description'>
                    <li>Building: {a.building}</li>
                    <li>Category: {a.category}</li>
                    <li>Area: {a.area}</li>
                    <li>Rooms: {a.rooms}</li>
                </div>
                <div className='see-more'><button>See more</button></div>
            </div>
        </ul>
    </div>)

    return (
        <div className='wrapper'>
            {apartment}
        </div>
    )
}

// export default Apartments;