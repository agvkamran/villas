import React from 'react';
import './apartments.css';
import ApartmentCard from '../apartmentCard/apartmentCard';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export class Apartments extends React.Component {

    state = {
        villas: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                this.props.setAll(data.data.apartments);
                this.props.filterVip();
            });
    }

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <div className='wrapper' id='apartments'>
                <div className='default-container'>
                    <div className='apartment'>
                        <div className='inner-container'>
                            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                            <Slider {...settings} className='slider'>
                                {this.props.allPage.all.map((a) =>
                                    <div>
                                        <ApartmentCard a={a} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}





export default Apartments;


// render() {
//     return (
//         <div className='wrapper' id='apartments'>
//             <div className='default-container'>
//                 <div className='apartment'>
//                     {this.props.allPage.all.map((a) =>
//                         <div key={a.id}
//                             className='inner-apartment'>
//                             <ApartmentCard a={a} />
//                         </div>)}
//                 </div>
//             </div>
//         </div>
//     )
// }
// }
