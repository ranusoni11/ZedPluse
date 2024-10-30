// import React from 'react';
// import { 
//   MDBBtn, 
//   MDBContainer, 
//   MDBRow, 
//   MDBCol, 
//   MDBCard, 
//   MDBCardBody, 
//   MDBCardImage, 
//   MDBInput, 
//   MDBIcon, 
//   MDBCheckbox 
// } 
// from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer fluid>

//       <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//               <div className="d-flex flex-row align-items-center mb-4 ">
//                	<MDBIcon fas icon="user me-3" size='lg'/>
//                 <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size='lg'/>
//                 <MDBInput label='Your Email' id='form2' type='email'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size='lg'/>
//                 <MDBInput label='Password' id='form3' type='password'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="key me-3" size='lg'/>
//                 <MDBInput label='Repeat your password' id='form4' type='password'/>
//               </div>

//               <div className='mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div>

//               <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

//             </MDBCol>

//             <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//               <MDBCardImage src={anprimg} fluid/>
//             </MDBCol>

//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export default App;

import React from 'react'
import './regStyle.css';
import { useState } from 'react';
import adminimg from '../images/ZED PLUS (1).png';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    organization: '',
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

  // const handleReset = () => {
  //   setFormData({
  //     username: '',
  //     email: '',
  //     phone: '',
  //     password: '',
  //   });
  // };

  return (
    <div className='regbody'>
      <div>
        <form onSubmit={handleSubmit} className='formbody' >
          <h4 className='re-h-class'>Register As New Organization</h4>

          <div className='usercss'>
            <label className='lablecss'>
              Organization Name
            </label>
            <div className='userfeild iconscss'>

              <i className="fa fa-user icon"></i>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className='usercss'>
            <label className='lablecss'>
              Your Name
            </label>
            <div className='userfeild iconscss'>

              <i className="fa fa-user icon"></i>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className='emailcss'>
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
              </div>

          <div className='passcss'>
            <label className='lablecss'>
              Set Password
            </label>
            
            <div className='passfeild iconscss' style={{ position: 'relative' }}>
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

          <button className='btn btn-secondary rebtn' type="submit">Register</button>
          {/* <button type="button" onClick={handleReset}>
            Reset Password
          </button> */}
        </form>
      </div>
      <div className='regImage'>
        <img src={adminimg} alt='zp' className='fleximg' />
      </div>
    </div>
  )
}

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1em',
// };

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

export default RegistrationForm;
