import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'
import logo from '../images/ZED_PLUS__1_-removebg-preview.png'

const Navbar = () => {
    return (
        <div>
            <div className='navebar'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbody p-4">
                    <div className="container-fluid">
                        <div className='logosection'>
                            <div>
                                <img src={logo} className='logo' alt='logo' />
                            </div>
                            <div className='logotext d-flex aligen-item-end'>
                                <h4 className='colorcss'>ZED</h4>
                                <h4 className='colorcss1'>PLUS</h4>
                            </div>
                        </div>

                        <div className='nav'>
                            <ul className="nav nav-underline justify-content-end">
                                <li className="nav-item mx-4">
                                    <Link to="/" className="nav-link navclr" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link navclr" to="/About">About</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link navclr" to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link navclr" to="/Product">Products</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link navclr" to="/admind-dashboard">Products</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
