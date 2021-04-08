import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='default-container'>
                <div className="footer-inner">

                    <div className='address'>
                        <p>Address: Unknown street 123AB</p>
                    </div>

                    <div className='copyright'>
                        <p>Copyright</p>
                        <p className='author'>Made by <span>Aghayev Kamran</span></p>
                    </div>

                    <div className='footer-items'>
                        <ul className='soc'>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                        </ul> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Footer;