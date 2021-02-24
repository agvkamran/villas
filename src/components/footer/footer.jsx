import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>Copyright</p>
            <div className='footer-items'>
                <ul className='soc'>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                </ul>
            </div>
        </div>
    )
}


export default Footer;