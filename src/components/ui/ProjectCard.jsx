import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const statusStyle = {
  live:     { background: 'rgba(52,211,153,0.12)', color: '#34D399' },
  progress: { background: 'rgba(224,179,65,0.12)', color: 'var(--accent)' },
  research: { background: 'rgba(167,139,250,0.12)', color: '#A78BFA' },
};

export default function ProjectCard({ proj, index }) {
  const Tag = proj.link ? motion.a : motion.article;
  const linkProps = proj.link
    ? { href: proj.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <FadeIn delay={index * 0.07}>
      <Tag
        {...linkProps}
        whileHover={{ y: -4, borderColor: 'var(--accent-line)' }}
        style={{
          display: 'block',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          background: 'var(--card)',
          marginBottom: '1.25rem',
          position: 'relative',
          overflow: 'hidden',
          textDecoration: 'none',
          cursor: proj.link ? 'pointer' : 'default',
          transition: 'border-color 0.25s',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: 0, top: 0,
            width: '3px', height: '100%',
            background: 'linear-gradient(180deg, var(--accent), transparent)',
            transformOrigin: 'top',
            scaleY: 0,
          }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#E8EDF4', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {proj.title}
            {proj.link && (
              <motion.span
                style={{ fontSize: '0.82rem', color: '#5C6A82' }}
                whileHover={{ x: 2, y: -2, color: 'var(--accent)' }}
              >
                ↗
              </motion.span>
            )}
          </div>
          <span
            className="mono"
            style={{
              fontSize: '0.67rem',
              padding: '3px 9px',
              borderRadius: '20px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              ...statusStyle[proj.statusType],
            }}
          >
            {proj.status}
          </span>
        </div>

        <ul style={{ listStyle: 'none', margin: '0.6rem 0', padding: 0 }}>
          {proj.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                position: 'relative',
                paddingLeft: '18px',
                fontSize: '0.85rem',
                color: '#8694AB',
                lineHeight: 1.6,
                marginBottom: '5px',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span>
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '0.5rem' }}>
          {proj.stack.map((s) => (
            <span
              key={s}
              className="mono"
              style={{
                fontSize: '0.7rem',
                color: 'var(--accent)',
                background: 'var(--accent-soft)',
                padding: '4px 11px',
                borderRadius: '20px',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </Tag>
    </FadeIn>
  );
}
