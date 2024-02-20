import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fitj11n', 'template_wmjp0rm', form.current, {
        publicKey: 'WbUrJdz5ci_0Q6CTK',
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Message failed to be sent",
            showConfirmButton: false,
            timer: 1500
          });
        },
      );
  };

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-intro'>
        <h4>Email me</h4>
        <h1>Let's CONNECT</h1>
        <p>Please feel free to send me a message. I'll get in touch with you as soon as possible.</p>
     
      </div>
      
      <form className='form' ref={form} onSubmit={sendEmail}>
      <label style={{color: 'white'}}>Name</label>
      <input type="text" name="user_name" placeholder='Enter name'/>
      <label style={{color: 'white'}}>Email</label>
      <input type="email" name="user_email" placeholder='Example@gmail.com'/>
      <label style={{color: 'white'}}> Message</label>
      <textarea name="message" placeholder='Say something...'/>
      <input className='submit-btn' type="submit" value="Send" />
      <code>note: once you click the send button your message will send automatically.</code>
    </form>
    </div>
  )
}

export default Contact