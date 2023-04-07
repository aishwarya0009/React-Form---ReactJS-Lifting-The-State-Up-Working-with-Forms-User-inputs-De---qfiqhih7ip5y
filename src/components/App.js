
import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contactNo: '',
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [contactNoError, setContactNoError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setSuccessAlert(true);
      setFormData({
        username: '',
        email: '',
        password: '',
        contactNo: '',
      });
      setTimeout(() => {
        setSuccessAlert(false);
      }, 2000);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!formData.username) {
      setUsernameError('Please enter a username');
      isValid = false;
    } else {
      setUsernameError('');
    }
    if (!formData.email) {
      setEmailError('Please enter an email');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!formData.password || formData.password.length < 4) {
      setPasswordError('Password must be at least 4 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }
    if (!formData.contactNo || formData.contactNo.toString().length !== 10) {
      setContactNoError('Contact number should have exactly 10 digits');
      isValid = false;
    } else {
      setContactNoError('');
    }
    return isValid;
  };

  return (
    <div id="main">
      {successAlert && (
        <h3 className='success-alert'>Registered Successfully</h3>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <section>
          <label>Username</label>
          <input
            type="text"
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          <p className='username-error'>{usernameError}</p>
          <label>Email</label>
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className='email-error'>{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <p className='password-error'>{passwordError}</p>
          <label>Contact Number</label>
          <input
            type="number"
            name='contactNo'
            value={formData.contactNo}
            onChange={handleInputChange}
          />
          <p className='contactNo-error'>{contactNoError}</p>
          <button type='submit'>Submit</button>
        </section>
      </form>
    </div>
  );
};

export default App;

