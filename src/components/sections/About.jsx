import { motion } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import { aboutPhilosophy, aboutBio, companies } from '../../data/meta';

export default function About() {
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
          My philosophy is that{' '}
          <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>
            growth is an engineering problem.
          </strong>{' '}
          Whether I'm optimizing high-concurrency backends or developing Graph Neural Networks,
          my goal is to build systems that aren't just stable — they're built to scale.
        </blockquote>
      </FadeIn>

      {aboutBio.map((para, i) => (
        <FadeIn key={i} delay={0.1 * (i + 1)}>
          <p
            style={{ color: '#8694AB', marginBottom: '1rem', lineHeight: 1.8, fontSize: '0.93rem' }}
            dangerouslySetInnerHTML={{
              __html: para
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
