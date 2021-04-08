import React from 'react';
import movie from '../../assets/video/lights.mp4';
import './video.css';
import { Link } from 'react-scroll';

const Movie = () => {

    return (
        <div className='container'>
            {/* <video width="1920" height="1080" autoPlay loop muted>
                <source src={movie} type='video/mp4' />
            </video> */}
            <div className='btn'>
                <Link
                    className='link-bold'
                    activeClass="active"
                    to="apartments"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className='div-hover'>
                        <p>TOP QUALITY APARTMENTS FOR YOU</p>
                        <br />
                        <i className="fas fa-angle-double-down" ></i>
                    </div>
                </Link>
            </div>
        </div>


        // <div className='abc'>
        //     <div className='default-container'>
        //         <div className='container'>
        //             <div className='btn'>
        //                 <Link
        //                     className='link-bold'
        //                     activeClass="active"
        //                     to="apartments"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-70}
        //                     duration={500}
        //                 >
        //                     <div className='div-hover'>
        //                         <p>TOP QUALITY APARTMENTS FOR YOU</p>
        //                         <br />
        //                         <i className="fas fa-angle-double-down" ></i>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Movie;
