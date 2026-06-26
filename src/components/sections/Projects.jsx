import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { flagship, backend } from '../../data/projects';

function GroupLabel({ children }) {
  return (
    <div
      className="mono"
      style={{
        fontSize: '0.72rem',
        color: '#5C6A82',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        margin: '2rem 0 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {children}
      <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" style={{ marginBottom: '5.5rem' }}>
      <GroupLabel>Flagship Systems</GroupLabel>
      {flagship.map((p, i) => (
        <ProjectCard key={p.title} proj={p} index={i} />
      ))}

      <GroupLabel>Backend &amp; Infrastructure</GroupLabel>
      <ProjectCard proj={backend[0]} index={0} />

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {backend.slice(1).map((p, i) => (
              <ProjectCard key={p.title} proj={p} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowAll((v) => !v)}
        className="mono"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--accent)',
          fontSize: '0.84rem',
          fontWeight: 500,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem 0',
          marginTop: '0.5rem',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = '14px')}
        onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
      >
        {showAll ? 'Show fewer projects ←' : 'Show more projects →'}
      </button>
    </section>
  );
}
