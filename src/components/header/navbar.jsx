import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// class Header extends React.Component {

//     render() {
//         return (
//             <div className=''>
//                 {/* <div>
//                     <p className='logo'>V I L L A S</p>
//                 </div>
//                 <div className='mob-menu'>
//                     <i className="fas fa-bars"></i>
//                 </div> */}
//                 <Navbar />
//                 {/* <div> */}
//                     {/* <Link className='favorite' to='/favourite'>FAVOURITE</Link> */}
//                 {/* </div> */}
//             </div>
//         )
//     }
// }


// const Naavbar = () => {
//     return (
//         <div className='navbar'>
//             <ul className='navbar-items'>
//                 <li><Link to='/about'>About</Link></li>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/rentals'>Rentals</Link></li>
//             </ul>
//         </div>
//     )
// }



class Navbar extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='navbar-items'>
                <h1 className='navbar-logo'>V I L L A S<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/about' className='nav-links'>About</Link></li>
                    <li><Link to='/' className='nav-links'>Home</Link></li>
                    <li><Link to='/allapartments' className='nav-links'>All apartments</Link></li>
                    <li><Link className='favorite nav-links' to='/favourite'>Favourite</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;