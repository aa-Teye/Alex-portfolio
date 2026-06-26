import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ui/ProjectCard';
import { flagship, backend, websites } from '../../data/projects';

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
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" style={{ marginBottom: '5.5rem' }}>
      <GroupLabel>{t('projects.flagship')}</GroupLabel>
      {flagship.map((p, i) => (
        <ProjectCard key={p.title} proj={p} index={i} />
      ))}

      <GroupLabel>{t('projects.backend')}</GroupLabel>
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
        {showAll ? t('projects.showFewer') : t('projects.showMore')}
      </button>

      <GroupLabel>{t('projects.websites')}</GroupLabel>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {websites.map((site, i) => (
          <motion.div
            key={site.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            whileHover={{ y: -3, borderColor: 'rgba(224,179,65,0.25)' }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1rem 1.1rem',
              transition: 'border-color 0.25s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span
                className="mono"
                style={{ fontSize: '0.8rem', fontWeight: 700, color: '#CCD6E6' }}
              >
                {site.title}
              </span>
              {site.link && (
                <a
                  href={site.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#5C6A82', lineHeight: 1, flexShrink: 0, marginLeft: '8px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5C6A82')}
                  aria-label={`GitHub — ${site.title}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              )}
            </div>
            <p style={{ fontSize: '0.78rem', color: '#6B7A92', lineHeight: 1.6, marginBottom: '0.65rem' }}>
              {site.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {site.stack.map((t) => (
                <span
                  key={t}
                  className="mono"
                  style={{
                    fontSize: '0.67rem',
                    color: '#8694AB',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
