import React from 'react'
import './contact.css'
import  {MdOutlineMail} from 'react-icons/md';
import  {useRef}  from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nt748oe', 'template_h5p9eun', form.current, 'zRodq3oDnk7Z3-KBn')
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>raf.dev.b@gmail.com</h5>
            <a href="mailto:raf.dev.b@gmail.com" target="_blank">Send an Email</a>
          </article>

        </div>
        {/* END OF CONTACT OPTION */}
        
        <form ref={form} onSubmit={SendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact