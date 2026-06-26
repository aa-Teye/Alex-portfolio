import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function ExpCard({ item, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ x: 4, backgroundColor: 'rgba(20,28,40,0.6)' }}
        style={{
          display: 'grid',
          gridTemplateColumns: '130px 1fr',
          gap: '1.5rem',
          padding: '1.25rem',
          borderRadius: '10px',
          border: '1px solid transparent',
          margin: '0 -1.25rem 0.5rem',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.25s',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: 0, top: 0,
            width: '2px', height: '100%',
            background: 'var(--accent)',
            transformOrigin: 'top',
            scaleY: 0,
          }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.25 }}
        />

        <div
          className="mono"
          style={{
            fontSize: '0.7rem',
            color: '#5C6A82',
            paddingTop: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {item.date}
        </div>

        <div>
          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#E8EDF4' }}>
            {item.role}
          </div>
          <div style={{ fontSize: '0.88rem', color: '#CCD6E6', fontWeight: 500, marginTop: '1px' }}>
            {item.company}
          </div>
          <div style={{ fontSize: '0.86rem', color: '#8694AB', marginTop: '0.5rem', lineHeight: 1.65 }}>
            {item.desc}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.75rem' }}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="mono"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--accent)',
                  background: 'var(--accent-soft)',
                  padding: '3px 9px',
                  borderRadius: '20px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
