import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import gokuVsJiren from '../images/goku-vs-jiren.jpg'
import instagram from '../images/ig-logo.png'
import youtube from '../images/youtube-logo.png'
import ImageCarousel from './imageCarousel';
import SimpleImageCarousel from './simpleImageCarousel';
import profilePicture from '../images/ig-profile.jpg'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const style = {
    height:'30rem',
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulated email sending logic (replace with actual backend API call)
    try {
      const response = await sendEmail(formData);
      if (response.status === 'success') {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Email sending failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };

  const sendEmail = async (formData) => {
    // Simulated API call, replace with your backend endpoint for sending emails
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  };

  return (
    <div className='contact-container'>
     <h1>Contact Us</h1>
     <div className='contact'>
        <p> If you're ready to elevate your business to the next level with exceptional graphics that make a lasting impression and drive success,
     then it's time to get in touch.
      Make the brilliant choice for your business today!
      </p>
      <p>You can reach out to me via email at thomaslmusial@gmail.com, or simply click on the "Contact" button below to provide more specific details about your request.</p>
      <p>you can also reach out to me on social media!</p>
      </div>
{/* <img src={gokuVsJiren} style={style}/> */}
     
     <button >
        contact
     </button>

  
<div className='instagram'>
  <img style={style} src={profilePicture}/>
  
    <a href="https://www.instagram.com/thomas__musial/">Instagram</a>
     </div>  

<div className='youtube'>
    <img 
    style={style}
    src={youtube}
</div>


    </div>
  );
};

export default ContactForm;
