import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import write from '../assets/images/pexels-lumn-316466.jpg';
function ContactForm(props) {
  const styles = {
    background: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      backgroundImage: `url(${write})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'calc(100vh - 150px)',
      top: '75px',
      position: 'fixed',
      left: '0px',
    },
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };
  };
  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    inputValue === ''
      ? setErrorMessage(`${inputType} is required!`)
      : setErrorMessage('')
    if (inputType === 'email') {
      !validateEmail(email)
        ? setErrorMessage(`${inputType} is invalid!`)
        : setErrorMessage('')
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setErrorMessage('Email, name, and message are all required!');
      return;
    };
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    };
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div style={styles.background} className='contact-me'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="text-center">Contact Me</h2>
        <div className='formline'>
          <label>name:</label>
          <input
            value={name}
            name="name"
            type="text"
            placeholder="your name"
            className="name-input"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className='formline'>
          <label>email:</label>
          <input
            value={email}
            name="email"
            type="email"
            placeholder="email"
            className="email-input"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className='formline'>
          <label>message:</label>
          <textarea
            rows="5"
            value={message}
            name="message"
            type="text"
            placeholder="message"
            className="message-input"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <button className="form-button" onClick={handleSubmit}>submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default ContactForm;
