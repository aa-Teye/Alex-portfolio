import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function ResearchCard({ item, index }) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ x: 4, borderColor: 'var(--accent-line)' }}
        style={{
          padding: '1.25rem 1.5rem',
          borderRadius: '10px',
          border: '1px solid var(--border)',
          background: 'var(--card)',
          transition: 'border-color 0.25s',
        }}
      >
        <h4 style={{ color: '#E8EDF4', fontSize: '0.98rem', fontWeight: 600, marginBottom: '0.4rem' }}>
          {item.title}
        </h4>
        <p style={{ fontSize: '0.86rem', color: '#8694AB', lineHeight: 1.65 }}>
          {item.desc}
        </p>
      </motion.div>
    </FadeIn>
  );
}
