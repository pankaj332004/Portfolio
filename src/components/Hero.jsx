import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownRight, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Hero.css';

const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '400+', label: 'Problems Solved' },
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" style={{ opacity: 0.08 }} />
      </div>

      <div className="container hero__container">
        {/* Left: Text Content */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={12} />
            <span>Open to Opportunities</span>
          </motion.div>

          {/* Name */}
          <div className="hero__heading">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi, I'm <br />
              <span className="hero__name gradient-text">Pankaj Kumar Rajbhar</span>
            </motion.h1>

            <motion.div
              className="hero__role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="hero__role-prefix">{'> '}</span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'Web Designer', 2000,
                  'Always Learning New Tech', 2000,
                  'Problem Solver', 2000,
                  'UI/UX Designer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="hero__role-text"
              />
            </motion.div>
          </div>

          {/* Bio */}
          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            I craft <strong>high-performance web applications</strong> with clean code and thoughtful UX.
            Driven by creativity, performance, and the pursuit of exceptional user experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value gradient-text">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View My Work</span>
              <ArrowDownRight size={16} />
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="https://github.com/pankaj332004" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/pankaj-kumar-rajbhar-b77150340/" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Visual Element */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `perspective(800px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`,
          }}
        >
          {/* Terminal Window */}
          <div className="hero__terminal">
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">portfolio.js</span>
            </div>
            <div className="terminal__body">
              <div className="terminal__line">
                <span className="t-line-num">1</span>
                <span className="t-keyword">const</span>
                <span className="t-var"> developer </span>
                <span className="t-op">= {'{'}</span>
              </div>
              <div className="terminal__line">
                <span className="t-line-num">2</span>
                <span className="t-key">  name</span>
                <span className="t-op">: </span>
                <span className="t-string">'Pankaj Kumar Rajbhar'</span>,
              </div>
              <div className="terminal__line">
                <span className="t-line-num">3</span>
                <span className="t-key">  role</span>
                <span className="t-op">: </span>
                <span className="t-string">'Full Stack Dev'</span>,
              </div>
              <div className="terminal__line">
                <span className="t-line-num">4</span>
                <span className="t-key">  location</span>
                <span className="t-op">: </span>
                <span className="t-string">'India 🇮🇳'</span>,
              </div>
              <div className="terminal__line">
                <span className="t-line-num">5</span>
                <span className="t-key">  skills</span>
                <span className="t-op">: [</span>
              </div>
              <div className="terminal__line">
                <span className="t-line-num">6</span>
                <span className="t-string">    'React'</span>,
                <span className="t-string"> 'Node.js'</span>,
              </div>
              <div className="terminal__line">
                <span className="t-line-num">7</span>
                <span className="t-string">    'MongoDB'</span>,
                <span className="t-string"> 'AWS'</span>,
              </div>
              <div className="terminal__line">
                <span className="t-line-num">8</span>
                <span className="t-op">  ],</span>
              </div>
              <div className="terminal__line">
                <span className="t-line-num">9</span>
                <span className="t-key">  status</span>
                <span className="t-op">: </span>
                <span className="t-emerald">'open_to_work'</span>,
              </div>
              <div className="terminal__line">
                <span className="t-line-num">10</span>
                <span className="t-op">{'}'}</span>
              </div>
              <div className="terminal__line terminal__line--active">
                <span className="t-line-num">11</span>
                <span className="t-comment">// Let's build something amazing</span>
                <span className="terminal__cursor" />
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            className="hero__float-badge hero__float-badge--1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="badge-dot badge-dot--emerald" />
            <span>React.js</span>
          </motion.div>

          <motion.div
            className="hero__float-badge hero__float-badge--2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="badge-dot badge-dot--amber" />
            <span>Node.js</span>
          </motion.div>

          <motion.div
            className="hero__float-badge hero__float-badge--3"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="badge-dot badge-dot--rose" />
            <span>MongoDB</span>
          </motion.div>

          {/* Orbit Ring */}
          <div className="hero__orbit">
            <div className="orbit__ring" />
            <div className="orbit__planet orbit__planet--1" />
            <div className="orbit__planet orbit__planet--2" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
