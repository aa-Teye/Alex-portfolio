import { motion } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import { meta } from '../../data/meta';

export default function Contact() {
  return (
    <section id="contact" style={{ marginBottom: '3rem' }}>
      <FadeIn>
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
              background: 'linear-gradient(135deg, #E8EDF4 0%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let's build something that scales
          </motion.h3>

          <p
            style={{
              color: '#8694AB',
              maxWidth: '420px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
              fontSize: '0.93rem',
            }}
          >
            I'm currently available for freelance and contract work. Whether you've got a backend
            to architect, an AI platform to build, or a system to scale — I'd love to hear about it.
          </p>

          <motion.a
            href={`mailto:${meta.email}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(224,179,65,0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid var(--accent-line)',
              color: 'var(--accent)',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '0.93rem',
              fontWeight: 500,
              textDecoration: 'none',
              background: 'var(--accent-soft)',
            }}
          >
            Get In Touch ↗
          </motion.a>
        </div>
      </FadeIn>

      <footer
        style={{
          paddingTop: '3rem',
          borderTop: '1px solid var(--border)',
          marginTop: '3rem',
          textAlign: 'center',
        }}
      >
        <p className="mono" style={{ fontSize: '0.76rem', color: '#5C6A82', lineHeight: 1.7 }}>
          Designed &amp; built by Alex Teye Ametepey · {meta.location}
          <br />
          Backend Architect · Python Developer · Media Systems Engineer
        </p>
      </footer>
    </section>
  );
}
