import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    desc: 'A fully featured e-commerce platform with real-time inventory management, Stripe payments, and an admin dashboard for order tracking.',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    accent: 'emerald',
    lines: 4200,
  },
  {
    id: 2,
    title: 'AI Chat Interface',
    category: 'Frontend + AI',
    tags: ['React', 'OpenAI API', 'Tailwind', 'Vite'],
    desc: 'A sleek conversational AI interface with streaming responses, context memory, and multi-model support.',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    accent: 'amber',
    lines: 2100,
  },
  {
    id: 3,
    title: 'DevOps Dashboard',
    category: 'Full Stack',
    tags: ['React', 'Express', 'Docker', 'PostgreSQL'],
    desc: 'Real-time monitoring dashboard for containerized services with metrics visualization and alerting system.',
    github: 'https://github.com',
    live: null,
    featured: false,
    accent: 'sky',
    lines: 3600,
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    desc: 'Real-time social platform with post feeds, likes, comments, direct messaging, and notification system.',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    accent: 'violet',
    lines: 5100,
  },
  {
    id: 5,
    title: 'Study Planner SaaS',
    category: 'SaaS',
    tags: ['Next.js', 'Prisma', 'Vercel', 'Stripe'],
    desc: 'A subscription-based study management tool with AI-powered scheduling, progress tracking, and analytics.',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    accent: 'rose',
    lines: 3200,
  },
  {
    id: 6,
    title: 'LeetCode Visualizer',
    category: 'Tool',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    desc: 'Interactive algorithm visualizer that animates data structures and sorting algorithms step by step.',
    github: 'https://github.com',
    live: null,
    featured: false,
    accent: 'amber',
    lines: 1800,
  },
];

const filters = ['All', 'Full Stack', 'Frontend + AI', 'SaaS', 'Tool'];

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
