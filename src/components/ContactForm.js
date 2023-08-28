import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"
import {init} from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {

    const form = useRef();
  
  
    const sendEmail = (e) => {
      e.preventDefault();
      const formMessage = document.querySelector('.formMessage');
  
      emailjs.sendForm(
       'service_f71yils',
       'template_ghgf5jt',
        form.current,
        process.env.REACT_APP_ID
        )
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            formMessage.innerHTML = "<p class='success'>Message envoyé !<p/>"
  
            setTimeout(() => {
              formMessage.innerHTML = ""
            }, 3500);
        }, (error) => {
            console.log(error.text);
            formMessage.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer !</p>"
            
            setTimeout(() => {
              formMessage.innerHTML = ""
            }, 3500);
        });
    };

    return (
        <div className="form-container">
            <h2>contactez-nous</h2>
    <form ref={form} onSubmit={sendEmail} className='form-content'>
      <label>nom</label>
      <input type="text" name="name" required autoComplete='off' id='name'/>
      <label>Email</label>
      <input type="email" name="email" required autoComplete='off' id='email'/>
      <label>Message</label>
      <textarea name="message" required id='mess'/>
      <input type="submit" value="Envoyer" className='hover button'/>
    </form>
    <div className="formMessage"></div>
    </div>
    );
};

export default ContactForm;