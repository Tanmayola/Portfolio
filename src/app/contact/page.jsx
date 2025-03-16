"use client";
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <section className="contactPage">
      <div className="container-fluid">
        <div className="di-flex">
          <h1 className="hd text-center m-auto">
            Get in <span>Touch</span>
            <span className="title-bg">CONTACT</span>
          </h1>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="info-box">
                <EmailIcon className="icon" />
                <div className="details">
                  <h3>Email</h3>
                  <p>tanmayola04@gmail.com</p>
                </div>
              </div>
              <div className="info-box">
                <PhoneIcon className="icon" />
                <div className="details">
                  <h3>Phone</h3>
                  <p>+91 8114436414</p>
                </div>
              </div>
              <div className="info-box">
                <LocationOnIcon className="icon" />
                <div className="details">
                  <h3>Location</h3>
                  <p>Jaipur, India</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/tanmay-ola-38a108264/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="social-icon" />
                </a>
                <a href="https://github.com/Tanmayola" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn-common iconBtn">
                <span className="text">Send Message</span>
                <span className="icon d-flex align-items-center justify-content-center">
                  <SendIcon />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 