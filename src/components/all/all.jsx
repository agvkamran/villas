import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ReactSlider from 'react-slider'

class All extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                this.props.setAll(data.data.apartments);
            })
    }

    filterMillion = () => {
        this.props.filterByPrice(4000000);
    }

    render() {
        return (
            <div>
                <div className='all'>
                    {this.props.allPage.all.map((a) => <div key={a.id}> <ul className='apartment-list'>
                        <li><img className='image' src={a.imageUrl} alt='apartment-1'></img></li>
                        <div className='center'>
                            <div className='description'>
                                <li>Building: {a.building}</li>
                                <li>Area: {a.area}</li>
                                <li>Rooms: {a.rooms}</li>
                                <li>Price: {a.price}</li>
                            </div>
                            <div className='see-more'>
                                <NavLink to={'/villa/' + a.id}>See more</NavLink>
                            </div>
                        </div>
                    </ul></div>)}
                    <div className='million'>
                        {/* <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 100]}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={10}
                        /> */}
                        
                    <input type="checkbox" onClick={this.filterMillion} />
                    </div>
                </div>
            </div>
        )
    }
}

export default All;