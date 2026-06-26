import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import { companies } from '../../data/meta';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" style={{ marginBottom: '5.5rem' }}>
      <FadeIn>
        <blockquote
          style={{
            fontSize: '1.05rem',
            color: '#CCD6E6',
            lineHeight: 1.8,
            paddingLeft: '1.25rem',
            margin: '0 0 1.5rem',
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent), transparent)',
              borderRadius: '2px',
            }}
          />
          {t('about.philosophy')}
        </blockquote>
      </FadeIn>

      {['about.bio1', 'about.bio2'].map((key, i) => (
        <FadeIn key={key} delay={0.1 * (i + 1)}>
          <p
            style={{ color: '#8694AB', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.93rem' }}
            dangerouslySetInnerHTML={{
              __html: t(key)
                .replace(/<strong>/g, '<strong style="color:#CCD6E6;font-weight:500">')
                .replace(/<accent>/g, '<span style="color:var(--accent)">')
                .replace(/<\/accent>/g, '</span>'),
            }}
          />
        </FadeIn>
      ))}

      <FadeIn delay={0.3}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1.5rem' }}>
          {companies.map((c) => (
            <motion.span
              key={c}
              whileHover={{ borderColor: 'var(--accent-line)', color: '#E8EDF4', y: -2 }}
              className="mono"
              style={{
                fontSize: '0.75rem',
                color: '#CCD6E6',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '6px 13px',
                borderRadius: '6px',
                cursor: 'default',
                transition: 'all 0.2s',
              }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
