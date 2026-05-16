import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, CheckCircle, Loader } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="bg-mesh">
        <div className="orb orb-1" style={{ opacity: 0.07 }} />
        <div className="orb orb-3" style={{ opacity: 0.06 }} />
      </div>

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
        </motion.div>

        <motion.h2
          className="contact__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's <span className="gradient-text">Build</span> Something<br />Together
        </motion.h2>

        <div className="contact__grid">
          {/* Left: Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="contact__intro">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Drop me a message!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <a href="mailto:your@email.com" className="contact__detail-value">
                    pk902124@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon contact__detail-icon--amber">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="contact__detail-label">Ghaziabad</span>
                  <span className="contact__detail-value">India 🇮🇳</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="contact__socials">
              {[
                        { icon: <GithubIcon size={20} />, label: 'GitHub', href: 'https://github.com/pankaj332004', color: 'emerald' },
                { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pankaj-kumar-rajbhar-b77150340/', color: 'sky' },
                { icon: <TwitterIcon size={20} />, label: 'Twitter', href: 'https://x.com/pk902124', color: 'amber' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact__social-card contact__social-card--${s.color}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <div className="contact__availability glass-card">
              <div className="noise-overlay" />
              <div className="availability__header">
                <span className="status-dot" />
                <span>Currently Available</span>
              </div>
              <p className="availability__text">
                Open to full-time roles, freelance projects, and interesting collaborations.
                I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact__form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="noise-overlay" />
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-primary form-submit ${status === 'success' ? 'form-submit--success' : ''}`}
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'idle' && (<><span>Send Message</span><Send size={16} /></>)}
                {status === 'sending' && (<><span>Sending...</span><Loader size={16} className="spin" /></>)}
                {status === 'success' && (<><span>Message Sent!</span><CheckCircle size={16} /></>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
