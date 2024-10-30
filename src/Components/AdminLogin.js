import React from 'react'
import { useState } from 'react';
import {Link } from "react-router-dom";
import './adminlogin.css';
import fleximg from '../images/admin.png';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    admin: '',
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
    <div className='ad-regbody'>
      <div>
        <form onSubmit={handleSubmit} className='ad-formbody' >
          <h4 className='h-class'>Admin Login</h4>

          <div className='ad-usercss'>
            <label className='ad-lablecss'>
              Admin
            </label>
            <div className='ad-userfeild ad-iconscss'>

              <i className="fa fa-user icon"></i>
              <input
                type="text"
                name="username"
                value={formData.admin}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* <div className='emailcss'>
            <label className='lablecss'>
              Email
            </label>
            <div className='emailfeild iconscss'>
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

          <div className='pncss'>
            <label className='lablecss'>
              Phone Number
            </label>

            <div className='phonefeild iconscss'>
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

          <div className='ad-passcss'>

            <label className='ad-lablecss'>
              Set Password
            </label>

            <div className='ad-passfeild ad-iconscss' style={{ position: 'relative' }}>
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
                className='btnicon'
                onClick={togglePasswordVisibility}
                style={toggleButtonStyle}
              >
                {showPassword ? <i className='fa fa-eye'></i> : <i className='fa fa-eye-slash'></i>}
              </button>
            </div>

            

          </div>

          <div className='ad-fogpass'>
            <div>
            <button className='btn btn-secondary ad-rebtn' type="submit">login</button>
            </div>
            <div className='mt-3'>
            <h6>or</h6>
            </div>
            <Link className="nav-link-active" aria-current="page" to="/fogpassword">forget Password?</Link>
          </div>
        </form>
      </div>
      <div className='ad-regImage'>
        <img src={fleximg} alt='zp' className='ad-fleximg' />
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

export default AdminLogin
