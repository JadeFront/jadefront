import React, { useEffect } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
      }, []);

      
    const form = useRef();


    const schema = yup.object().shape({
        fullname: yup.string().required("Fullname required"),
        email: yup.string().email().required("Email required"),
        message: yup.string().required("Leave a message")
    });

    const { register, handleSubmit,  formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data, e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_fitj11n', 'template_wmjp0rm', form.current, {
            publicKey: 'WbUrJdz5ci_0Q6CTK',
        })
        .then(
            () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Message sent successfully!",
                    showConfirmButton: false,
                    timer: 3000
                  });
            },
            (error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Message failed to send!",
                    showConfirmButton: false,
                    timer: 3000
                  });
            },
        );
        console.log(data);
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

            <form ref={form} onSubmit={handleSubmit(onSubmit)}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"> 
                
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Fullname'
                    {...register('fullname')}/>
                    <p>{errors.fullname?.message}</p>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='Email' 
                    {...register('email')}/>
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label>Message</label>
                    <textarea name="message" placeholder='Leave a message...' 
                    {...register('message')}/>
                    <p>{errors.message?.message}</p>
                </div>

                <input className='btn' type="submit" value="Send" />

            </form>
        </div>
    </section>
  )
}

export default Contact