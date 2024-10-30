import React, { useState, useRef } from 'react';
import './fogpassword.css';
import fogimg from '../images/fogimg.jpg';

function Forgotpassword() {
  const [code, setCode] = useState(new Array(6).fill(''));
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]?$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyCode = () => {
    if (code.join('').length === 6) {
      setIsVerified(true);
      alert('Code verified successfully!');
    } else {
      alert('Please enter a 6-digit code.');
    }
  };

  const handleResendCode = () => {
    setTimer(60);
    setIsVerified(false);
    setCode(new Array(6).fill(''));
    inputRefs.current[0].focus();
  };

  React.useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  return (
    <div className='pass-body'>
      <div className='fogimg'>
        <img src={fogimg} alt='fp' />
      </div>
      <div className='pass-card'>
        <div>
          <h2 className='h-class'>Forgot Password</h2>
        </div>

        <div>
          <label className='pass-lable'>
            Enter Verification Code
          </label>
        </div>

        <div className='inp-body'>
          {code.map((digit, index) => (
            <input
              className='inpcss'
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <div>
          <button className='pass-btn' onClick={handleResendCode} disabled={timer > 0}>
            {timer > 0 ? `Resend Code in ${timer}s` : 'Send Code'}
          </button>
        </div>
        <div className='verify-btn'>
          <button className='btn btn-primary' onClick={handleVerifyCode} disabled={isVerified}>
            Verify Code
          </button>

        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
