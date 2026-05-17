import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'MindMate',
    category: 'Frontend + AI',
    tags: ['React', 'Vite', 'Groq AI', 'Llama 3.3', 'Vercel'],
    desc: 'An AI-powered mental wellness companion for Indian youth — features mood tracking, AI chat with culturally-aware prompt engineering, SOS helpline, and curated resources.',
    github: 'https://github.com/pankaj332004/mindMate',
    live: 'https://mindmate-alpha.vercel.app',
    featured: true,
    accent: 'emerald',
    lines: 2400,
  },
  {
    id: 2,
    title: 'WanderLust',
    category: 'Full Stack',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Mapbox', 'Cloudinary'],
    desc: 'An Airbnb-inspired property listing platform with user auth, full CRUD, Mapbox maps, Cloudinary image uploads, reviews, and search/filter — deployed on Render.',
    github: 'https://github.com/pankaj332004/Airbnb-clone',
    live: 'https://wanderlust-goek.onrender.com',
    featured: true,
    accent: 'amber',
    lines: 3500,
  },
  {
    id: 3,
    title: 'ScamShield',
    category: 'Full Stack',
    tags: ['React', 'Python', 'FastAPI', 'Scikit-Learn', 'Google OAuth', 'OCR'],
    desc: 'AI-powered fraud detection platform that identifies fake job listings and phishing emails using ML classifiers, OCR document scanning, and Gmail inbox analysis.',
    github: 'https://github.com/pankaj332004/ScamShield',
    live: 'https://scam-shield-nine.vercel.app',
    featured: true,
    accent: 'sky',
    lines: 4500,
  },
  {
    id: 4,
    title: 'TrueGrad',
    category: 'Hackathon',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Vite'],
    desc: 'An academic certificate authenticity validator built for SIH 2025 — features drag & drop upload, OCR-based verification, confidence scoring, and an admin dashboard with analytics.',
    github: 'https://github.com/pankaj332004/TrueGrad',
    live: null,
    featured: true,
    accent: 'violet',
    lines: 2800,
  },
];

const filters = ['All', 'Full Stack', 'Frontend + AI', 'Hackathon'];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`project-card project-card--${project.accent} ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="noise-overlay" />

      {/* Card Top */}
      <div className="project-card__top">
        <div className="project-card__meta">
          <span className={`project-card__category project-card__category--${project.accent}`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="project-card__featured-badge">Featured</span>
          )}
        </div>
        <div className="project-card__lines">
          <Code2 size={12} />
          <span>{project.lines.toLocaleString()} lines</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="project-card__title">{project.title}</h3>

      {/* Description */}
      <p className="project-card__desc">{project.desc}</p>

      {/* Tags */}
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className={`project-tag project-tag--${project.accent}`}>{tag}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-card__actions">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action">
          <GithubIcon size={15} />
          <span>Code</span>
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-action project-action--primary">
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>
        )}
      </div>

      {/* Hover glow */}
      <motion.div
        className={`project-card__glow project-card__glow--${project.accent}`}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section projects" id="projects">
      <div className="bg-mesh">
        <div className="orb orb-2" style={{ opacity: 0.07 }} />
        <div className="orb orb-3" style={{ opacity: 0.05 }} />
      </div>

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
        </motion.div>

        <motion.h2
          className="projects__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Things I've <span className="gradient-text">Shipped</span>
        </motion.h2>

        <motion.p
          className="projects__sub"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Production-grade projects — real problems, real solutions
        </motion.p>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`projects__filter ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              {activeFilter === f && (
                <motion.span
                  className="filter-pip"
                  layoutId="filter-pip"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
