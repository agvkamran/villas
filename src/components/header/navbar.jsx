import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='nav'>
                <div className='default-container'>

                    <div className="navbar-items">
                            <h1 className='navbar-logo'>V I L L A S</h1>
                        <div className='menu-icon' onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>

                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li><Link to='/about' className='nav-links'>About</Link></li>
                            <li><Link to='/' className='nav-links'>Home</Link></li>
                            <li><Link to='/allapartments' className='nav-links'>All apartments</Link></li>
                            <li><Link className='favorite nav-links' to='/favourite'>Favourite</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}



export default Navbar;