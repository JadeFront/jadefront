import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const schema = yup.object().shape({
  user_name: yup.string().required('Name is required'),
  user_email: yup.string().required('Email is required').email('Email is invalid'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  const form = useRef();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const sendEmail = (data) => {
    emailjs
      .sendForm('service_j1mtqyn', 'template_wmjp0rm', form.current, {
        publicKey: 'WbUrJdz5ci_0Q6CTK',
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: false,
          timer: 3000
        });
      }, (error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Message failed to send!",
          showConfirmButton: false,
          timer: 3000
        });
      });
  };

  return (
    <section id='contact'>
      <div className='contact-container'>
        <div className='contact-intro'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000">
          <h4>Email me</h4>
          <h1>Let's connect.</h1>
          <p>
            Please feel free to send me a message. I'll get in touch with you as soon as possible.
          </p>
        </div>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000">
          
          <div>
            <label>Name</label>
            <input type="text" name="user_name" placeholder='Fullname' {...register('user_name')} />
            {errors.user_name && <p className="error-message">{errors.user_name.message}</p>}
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='Enter email' {...register('user_email')} />
            {errors.user_email && <p className="error-message">{errors.user_email.message}</p>}
          </div>

          <div>
            <label>Message</label>
            <textarea name="message" placeholder='Leave a message...' {...register('message')} />
            {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>

          <input className='btn' type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
