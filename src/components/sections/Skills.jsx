import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import { skillCategories } from '../../data/skills';

function CategoryCard({ cat, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4, borderColor: cat.color + '40' }}
        style={{
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          background: 'var(--card)',
          transition: 'border-color 0.25s',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: cat.color,
            borderRadius: '12px 12px 0 0',
          }}
        />

        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <h3
            className="mono"
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: cat.color,
            }}
          >
            {cat.label}
          </h3>
        </div>

        {/* skills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {cat.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + i * 0.03, duration: 0.25 }}
              whileHover={{ background: cat.color + '22', borderColor: cat.color + '60', color: cat.color }}
              className="mono"
              style={{
                fontSize: '0.72rem',
                color: '#A6B3C7',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                padding: '4px 10px',
                borderRadius: '6px',
                cursor: 'default',
                transition: 'all 0.2s',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" style={{ marginBottom: '5.5rem' }}>
      <FadeIn>
        <p style={{ color: '#8694AB', marginBottom: '1.75rem', fontSize: '0.93rem', lineHeight: 1.75 }}>
          {t('skills.tagline')}
        </p>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.label} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
