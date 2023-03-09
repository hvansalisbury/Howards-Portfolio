import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm(props) {
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
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setErrorMessage('Email, name, and message are all required!');
      return;
    };

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='d-flex align-items-center flex-column'>
      <form className=" m-2 form d-flex flex-column w-50" onSubmit={handleSubmit}>
        <h2 className="text-center ">Contact Me</h2>
        <label>name:</label>
        <input
          value={name}
          name="name"
          type="text"
          placeholder="your name"
          className="name-input rounded p-1"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <label>email:</label>
        <input
          value={email}
          name="email"
          type="email"
          placeholder="email"
          className="email-input rounded p-1"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <label>message:</label>
        <textarea
          rows="5"
          value={message}
          name="message"
          type="text"
          placeholder="message"
          className="message-input rounded p-1"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <button className="my-2 p-2 fw-bold form-button rounded" onClick={handleSubmit}>submit</button>
      </form>
      {errorMessage && (
        <div className='px-2'>
          <p className='error-text fs-4'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
