import React from 'react'
import { useState } from 'react';
import {Link } from "react-router-dom";
import './userlogin.css'
import fleximg from '../images/admin1.png';

const UserLogin = () => {
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
    <div className='re-regbody'>
      <div>
        <form onSubmit={handleSubmit} className='re-formbody' >
          <h4 className='h-class'>User LogIn</h4>

          {/* <div className='re-usercss'>
            <label className='re-lablecss'>
              Admin Name
            </label>
            <div className='re-userfeild iconscss'>

              <i className="re-fa fa-user icon"></i>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div> */}

          <div className='re-emailcss'>
            <label className='re-lablecss'>
              Email
            </label>
            <div className='re-emailfeild iconscss'>
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

          {/* <div className='re-pncss'>
            <label className='re-lablecss'>
              Phone Number
            </label>

            <div className='re-phonefeild iconscss'>
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

          <div className='re-passcss'>
            <label className='re-lablecss'>
              Set Password
            </label>

            <div className='re-passfeild iconscss' style={{ position: 'relative' }}>
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
                className='re-btnicon'
                onClick={togglePasswordVisibility}
                style={toggleButtonStyle}
              >
                {showPassword ? <i className='fa fa-eye'></i> : <i className='fa fa-eye-slash'></i>}
              </button>
            </div>
          </div>

          <div className='re-fogpass'>
            <div>
            <button className='btn btn-secondary re-rebtn' type="submit">login</button>
            </div>
            <div className='mt-3'>
            <h6>or</h6>
            </div>
            <Link className="nav-link-active" aria-current="page" to="/fogpassword">forget Password?</Link>
          </div>
        </form>
      </div>
      <div className='re-regImage'>
        <img src={fleximg} alt='zp' className='re-fleximg' />
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

export default UserLogin
