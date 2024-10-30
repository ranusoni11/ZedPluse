import React from 'react'
import './home.css'
import Navbar from './Navbar';
import { Link } from "react-router-dom";
// import Navbar from './Components/Navbar';
import adminImg from '../images/admin-removebg-preview.png';
import userImg from '../images/admin1-removebg-preview.png';
import commando from '../images/commando-removebg-preview.png';
// import logo from '../images/ZED_PLUS__1_-removebg-preview.png';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='d d-flex justify-content-evenly aligen-item-center ch'>
                <div className='cardHolder '>
                    <div className='hading'>
                        <h1 className='h-class'>Login as User, Admin, Organization </h1>
                    </div>
                    <div className='c-class'>
                        <div className="card cardcss">
                            <img src={userImg} className="card-img-top cardimg" alt="User" />
                            <div className="card-body">
                                <h5 className="card-title">USER</h5>
                                <Link to="/user-login" className="btn btn-secondary ">Login</Link>
                            </div>
                        </div>
                        <div className="card cardcss">
                            <img src={adminImg} className="card-img-top cardimg" alt="Admin" />
                            <div className="card-body">
                                <h5 className="card-title">ADMIN</h5>
                                <Link to="/admin-login" className="btn btn-secondary">Login</Link>
                            </div>
                        </div>
                        <div className="card cardcss">
                            <img src={adminImg} className="card-img-top cardimg" alt="Admin" />
                            <div className="card-body">
                                <h5 className="card-title">ORGANIZATION</h5>
                                <Link to="/organization" className="btn btn-secondary">Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className='reg'>
                        <div className='regtxt'>
                            <p>Register here as new ORGANIZATION</p>
                            {/* <button className='btn btn-secondary btn-sm'> */}
                            <Link to="/registration" className="btn btn-secondary btn-sm">Register</Link>
                        </div>
                    </div>
                </div>
                <div className='dimg'>
                    <img className='cimg' src={commando} style={{ "height": "510px" }} alt='cimg' />
                </div>
            </div>
        </div>

    )
}

export default Home