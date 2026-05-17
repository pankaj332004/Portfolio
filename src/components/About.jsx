import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code2, Coffee, Zap } from 'lucide-react';
import './About.css';

const timeline = [
  {
    year: '2023 – Present',
    title: 'B.Tech in Information Technology',
    org: 'Dr. APJ Abdul Kalam Technical University',
    desc: 'Focused on data structures, algorithms, and full-stack development. CGPA 8.1+',
    icon: <GraduationCap size={16} />,
    color: 'emerald',
  },
  {
    year: '2024 – 2025',
    title: 'Self-Taught Full Stack',
    org: 'Online Learning',
    desc: 'Built 10+ projects with React, Node.js, MongoDB and deployed to cloud platforms.',
    icon: <Code2 size={16} />,
    color: 'amber',
  },
  {
    year: '2023 – 2026',
    title: 'Started DSA Journey',
    org: 'LeetCode & GeeksforGeeks',
    desc: 'Solved 400+ problems.',
    icon: <Zap size={16} />,
    color: 'rose',
  },
];

const interests = [
  'Open Source', 'System Design', 'Web Performance',
  'UI Animation', 'Machine Learning','Java',
  'DevOps', 'JavaScript', 'Python', 'AWS'
];

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="bg-mesh">
        <div className="orb orb-2" style={{ opacity: 0.07 }} />
      </div>

      <div className="container">
        <FadeIn>
          <span className="section-label">Who I Am</span>
        </FadeIn>

        <div className="about__grid">
          {/* Left: bio + interests */}
          <div className="about__left">
            <FadeIn delay={0.1}>
              <h2 className="about__heading">
                Crafting Digital <br />
                <span className="gradient-text">Experiences</span> that <br />
                Matter
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="about__bio">
                I'm a full-stack developer who loves building things that live on the internet.
                With a focus on performance and clean code, I create experiences that are
                fast, accessible, and genuinely enjoyable to use.
              </p>
              <p className="about__bio">
                When I'm not coding, you'll find me solving algorithmic puzzles, contributing
                to open source, or exploring the latest in web technology.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="about__interests">
                <p className="about__interests-label">
                  <Coffee size={14} />
                  <span>Things I'm into</span>
                </p>
                <div className="about__tags">
                  {interests.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="about__tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Timeline */}
          <div className="about__right">
            <FadeIn delay={0.15} direction="left">
              <div className="about__timeline-heading">
                <span className="section-label">Journey</span>
              </div>

              <div className="about__timeline">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`timeline__item timeline__item--${item.color}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline__icon">
                      {item.icon}
                    </div>
                    <div className="timeline__content">
                      <div className="timeline__meta">
                        <span className="timeline__year">{item.year}</span>
                        <span className="timeline__org">{item.org}</span>
                      </div>
                      <h3 className="timeline__title">{item.title}</h3>
                      <p className="timeline__desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Quick Stats Card */}
            <FadeIn delay={0.5} direction="left">
              <div className="about__quick-stats glass-card">
                <div className="noise-overlay" />
                {[
                  { n: '8.1+', l: 'CGPA' },
                  { n: '400+', l: 'Problems' },
                  { n: '10+', l: 'Projects' },
                  { n: '2+', l: 'Yrs Exp' },
                ].map((s, i) => (
                  <div key={i} className="quick-stat">
                    <span className="quick-stat__value gradient-text">{s.n}</span>
                    <span className="quick-stat__label">{s.l}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
