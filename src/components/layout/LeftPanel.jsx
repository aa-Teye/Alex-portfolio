import { motion } from 'framer-motion';
import { meta, typewriterTitles } from '../../data/meta';
import SpyNav from './SpyNav';
import Typewriter from '../ui/Typewriter';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const socials = [
  { href: meta.github,           label: 'GitHub',   Icon: GitHubIcon },
  { href: meta.linkedin,         label: 'LinkedIn', Icon: LinkedInIcon },
  { href: `mailto:${meta.email}`, label: 'Email',    Icon: EmailIcon },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function LeftPanel() {
  return (
    <aside
      style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '5.5rem 0 4rem',
      }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 800,
              color: '#E8EDF4',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Alex Teye<br />Ametepey
          </h1>
        </motion.div>

        <motion.div variants={item} style={{ marginTop: '0.6rem' }}>
          <h2
            className="mono"
            style={{
              fontSize: '1.05rem',
              fontWeight: 500,
              color: '#CCD6E6',
              minHeight: '1.5em',
            }}
          >
            <Typewriter texts={typewriterTitles} speed={70} pause={2200} />
          </h2>
        </motion.div>

        <motion.div variants={item}>
          <p
            style={{
              color: '#8694AB',
              marginTop: '1rem',
              maxWidth: '340px',
              fontSize: '0.92rem',
              lineHeight: 1.65,
            }}
          >
            I build production systems that aren't just stable —{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>built to scale</span>.
            Backend architecture, AI platforms, and media systems engineering.
          </p>
        </motion.div>

        <motion.div variants={item}>
          <div
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '1.5rem',
              fontSize: '0.78rem',
              color: 'var(--accent)',
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent-line)',
              padding: '6px 14px',
              borderRadius: '20px',
            }}
          >
            <span
              style={{ width: '7px', height: '7px', background: 'var(--accent)', borderRadius: '50%' }}
              className="pulse-dot"
            />
            Available for work
          </div>
        </motion.div>

        <motion.div variants={item}>
          <SpyNav />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: '#5C6A82',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#5C6A82';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <a
            href={meta.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid var(--accent-line)',
              color: 'var(--accent)',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-soft)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(224,179,65,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ↓ Download CV
          </a>
        </div>
      </motion.div>
    </aside>
  );
}
