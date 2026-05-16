import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'emerald',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'Redux', level: 75 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'amber',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'Python', level: 72 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: 'sky',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MySQL', level: 72 },
      { name: 'Mongoose', level: 80 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    color: 'rose',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'AWS (EC2/S3)', level: 62 },
      { name: 'Vercel/Netlify', level: 85 },
    ]
  },
];

const techLogos = [
  'React', 'Node.js', 'JavaScript', 'MongoDB',
  'Python', 'Docker', 'AWS', 'Git',
];

const SkillBar = ({ name, level, color, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className={`skill-bar__level skill-bar__level--${color}`}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className={`skill-bar__fill skill-bar__fill--${color}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const activeCategory = categories.find(c => c.id === activeTab);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section skills" id="skills">
      <div className="bg-mesh">
        <div className="orb orb-1" style={{ opacity: 0.06 }} />
      </div>

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tech Stack</span>
        </motion.div>

        <motion.h2
          className="skills__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          My <span className="gradient-text-warm">Toolkit</span> &<br /> Proficiency
        </motion.h2>

        <motion.p
          className="skills__sub"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies I use to build scalable, high-quality products
        </motion.p>

        {/* Tabs */}
        <motion.div
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? 'active active--' + cat.color : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Panel */}
        <div className="skills__panel glass-card">
          <div className="noise-overlay" />
          <div className="skills__panel-header">
            <span className={`skills__panel-title gradient-text${activeCategory.color === 'amber' || activeCategory.color === 'rose' ? '-warm' : ''}`}>
              {activeCategory.label}
            </span>
            <span className="skills__panel-count">{activeCategory.skills.length} technologies</span>
          </div>
          <div className="skills__bars">
            {activeCategory.skills.map((skill, i) => (
              <SkillBar
                key={skill.name + activeTab}
                name={skill.name}
                level={skill.level}
                color={activeCategory.color}
                delay={0.05 * i}
              />
            ))}
          </div>
        </div>

        {/* Tech Scroll Marquee */}
        <motion.div
          className="skills__marquee-wrapper"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="skills__marquee">
            <div className="skills__marquee-track">
              {[...techLogos, ...techLogos].map((tech, i) => (
                <span key={i} className="skills__marquee-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
