// imports react and usetate 
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
// contact form function determines behavior of form during changes, submit, and blurring
function ContactForm(props) {
  const styles = {
    background: {
      backgroundColor: 'black',
      height: 'calc(100vh - 154px)',
    },
    form: {
      backgroundColor: 'lightgray',
      padding: '1em',
      borderRadius: '1em',
    },
  };
  // usestate function for each field default state is blank
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // usestate function for error message that appears on the screen, default blank
  const [errorMessage, setErrorMessage] = useState('');
  // when changes are made to different fields, changes the input value as it changes
  const handleChange = (e) => {
    // variables for the active field, field name, and value
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // if statement to call specific action function defined above
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };
  };
  // function to handle blur event
  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // ternary operator to set error message if imput is blank
    inputValue === ''
      ? setErrorMessage(`${inputType} is required!`)
      : setErrorMessage('')
    // ternary operator to set error message if email is invalid
    if (inputType === 'email') {
      !validateEmail(email)
        ? setErrorMessage(`${inputType} is invalid!`)
        : setErrorMessage('')
    };
  };
  // function to set error message upon submission
  const handleSubmit = (e) => {
    // prevent default action of form submission
    e.preventDefault();
    // sets error message if any field is blank
    if (!email || !name || !message) {
      setErrorMessage('Email, name, and message are all required!');
      return;
    };
    // sets error message if email is invalid
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    };
    // makes all fields blank after submission
    setName('');
    setEmail('');
    setMessage('');
  };
  // returns form html
  return (
    <div style={styles.background} className='d-flex align-items-center flex-column'>
      {/* calls handle submit when form is submitted */}
      <form style={styles.form} className=" m-2 form d-flex flex-column w-50" onSubmit={handleSubmit}>
        <h2 className="text-center ">Contact Me</h2>
        <label>name:</label>
        <input
          value={name}
          name="name"
          type="text"
          placeholder="your name"
          className="name-input rounded p-1"
          // calls handlechange when any changes are made to field
          onChange={handleChange}
          // calls handleblur when blurring away from field
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
// exports contactform function
export default ContactForm;
