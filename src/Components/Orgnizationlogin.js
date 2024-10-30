import React from 'react'
import { useState } from 'react';
import {Link } from "react-router-dom";
import './organizationlogin.css'
import orgimg from '../images/orgimg.png';

const Orgnizationlogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className='org-regbody'>
            <div>
                <form onSubmit={handleSubmit} className='org-formbody' >
                    <h4 className='h-class'>SuperUser Login</h4>

                    {/* <div className='org-usercss'>
            <label className='org-lablecss'>
              Admin Name
            </label>
            <div className='org-userfeild iconscss'>

              <i className="org-fa fa-user icon"></i>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div> */}

                    <div className='org-emailcss'>
                        <label className='org-lablecss'>
                            Email
                        </label>
                        <div className='org-emailfeild iconscss'>
                            <i class="fa fa-envelope icon"></i>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    {/* <div className='org-pncss'>
            <label className='org-lablecss'>
              Phone Number
            </label>

            <div className='org-phonefeild iconscss'>
            <i class="fa fa-phone"></i>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              />
          </div>
              </div> */}

                    <div className='org-passcss'>
                        <label className='org-lablecss'>
                            Set Password
                        </label>

                        <div className='org-passfeild iconscss' style={{ position: 'relative' }}>
                            <i class="fa fa-key icon"></i>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                type="button"
                                className='org-btnicon'
                                onClick={togglePasswordVisibility}
                                style={toggleButtonStyle}
                            >
                                {showPassword ? <i className='fa fa-eye'></i> : <i className='fa fa-eye-slash'></i>}
                            </button>
                        </div>
                    </div>

                    <div className='org-fogpass'>
                        <div>
                            <button className='btn btn-secondary re-rebtn' type="submit">login</button>
                        </div>
                        <div className='org-3'>
                            <h6 className='mt-3'>or</h6>
                        </div>
                        <Link className="nav-link-active" aria-current="page" to="/fogpassword">forget Password?</Link>
                    </div>
                </form>
            </div>
            <div className='org-regImage'>
                <img src={orgimg} alt='zp' className='org-fleximg' />
            </div>
        </div>
    )
}

const toggleButtonStyle = {
    position: 'absolute',
    right: '0.5em',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9em',
};

export default Orgnizationlogin
