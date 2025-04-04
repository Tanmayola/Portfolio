"use client";
import { useState, useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: ''
  });

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key is missing');
      setStatus(prev => ({
        ...prev,
        error: true,
        errorMessage: 'Email service is not properly configured. Please try again later.'
      }));
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, errorMessage: '' });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS configuration:', { serviceId, templateId, publicKey });
        throw new Error('Email service is not properly configured. Please try again later.');
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setStatus({ loading: false, success: true, error: false, errorMessage: '' });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: true,
        errorMessage: error.message || 'Failed to send message. Please try again later.'
      });
    }
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
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
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
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <Button
                    type="submit"
                    className="btn-common"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
                {status.success && (
                  <div className="alert alert-success mt-3">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {status.error && (
                  <div className="alert alert-danger mt-3">
                    {status.errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 