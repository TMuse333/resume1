import React, { useState } from 'react';


import youtube from '../images/youtube-logo.png'

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
    <div className='contact-container'
    id="contact">
      <h3>Ready fo</h3>
     <h1>Contact me</h1>
     <div className='contact'>
        <p> If you want a formidable young man with high energy and intellect
          who will be fully dedicated to becoming the best salesman he can be and
          making you a lot of money in the process,
          you can email me with the button below at thomaslmusial@gmail.com
          or call me at 902-999-1006.
      </p>
     
      </div>
{/* <img src={gokuVsJiren} style={style}/> */}
     
     <button >
        <a href="mailto:thomaslmusial@gmail.com">email me</a>
     </button>

  {/* <div className='social-media'>

<div className='instagram'>
  <img 
 // style={style} 
  src={profilePicture}/>
  
    <a href="https://www.instagram.com/thomas__musial/">Instagram</a>
     </div>  

<div className='youtube'>
    <img 
    //style={{height:'30px'}}
    src={youtube}/>
    <a href="https://www.youtube.com/channel/UCRwy7k-muMe9AiNxs_1a6jQ">The best 2k21 clips youll see</a>
    
</div>

</div> */}
    </div>
  );
};

export default ContactForm;
