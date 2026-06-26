import { motion } from 'framer-motion';

export default function SkillPill({ label, index }) {
  return (
    <motion.div
      className="mono"
      whileHover={{ borderColor: 'var(--accent-line)', color: 'var(--accent)', y: -2 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      style={{
        fontSize: '0.78rem',
        color: '#CCD6E6',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        padding: '9px 14px',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'default',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </motion.div>
  );
}
