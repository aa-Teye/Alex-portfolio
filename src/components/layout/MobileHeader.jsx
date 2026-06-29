import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { meta, typewriterTitles } from '../../data/meta';
import Typewriter from '../ui/Typewriter';
import LangSwitcher from '../ui/LangSwitcher';

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'research', 'contact'];

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socials = [
  { href: meta.github, label: 'GitHub', Icon: GitHubIcon },
  { href: meta.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: `mailto:${meta.email}`, label: 'Email', Icon: EmailIcon },
  { href: `https://wa.me/${meta.whatsapp?.replace(/\D/g, '')}`, label: 'WhatsApp', Icon: WhatsAppIcon },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Sticky top bar ── */}
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.25rem',
        height: '56px',
        background: 'rgba(10,14,20,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span className="mono" style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#E8EDF4',
          letterSpacing: '0.02em',
        }}>
          Alex Ametepey
        </span>

        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: '#CCD6E6',
            cursor: 'pointer',
            padding: '6px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '36px',
          }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ fontSize: '1.1rem', lineHeight: 1, color: 'var(--accent)' }}
              >
                ✕
              </motion.span>
            ) : (
              <motion.div
                key="burger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    display: 'block',
                    width: '20px', height: '2px',
                    background: '#CCD6E6',
                    borderRadius: '2px',
                  }} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* ── Full-screen nav drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              top: '56px',
              zIndex: 99,
              background: 'rgba(10,14,20,0.98)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              padding: '2.5rem 2rem',
              overflowY: 'auto',
            }}
          >
            {/* Nav links */}
            <nav style={{ marginBottom: '2.5rem' }}>
              {NAV_IDS.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--border)',
                    color: '#CCD6E6',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CCD6E6'}
                >
                  <span style={{
                    width: '28px', height: '1px',
                    background: 'var(--accent)',
                    display: 'inline-block',
                  }} />
                  {t(`nav.${id}`)}
                </motion.a>
              ))}
            </nav>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '1.5rem' }}>
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: '#5C6A82', display: 'inline-flex', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#5C6A82'}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Lang switcher */}
            <LangSwitcher />

            {/* CV download */}
            <a
              href={meta.cv}
              download="Alex_Resume.docx"
              className="mono"
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid var(--accent-line)',
                color: 'var(--accent)',
                padding: '12px 22px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                alignSelf: 'flex-start',
              }}
            >
              ↓ {t('hero.downloadCV')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Hero ── */}
      <section style={{ paddingTop: '56px' }}>
        <div style={{ padding: '3rem 1.5rem 2rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(2.2rem, 9vw, 3rem)',
              fontWeight: 800,
              color: '#E8EDF4',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Alex Teye<br />Ametepey
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mono"
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#CCD6E6',
              marginTop: '0.6rem',
              minHeight: '1.5em',
            }}
          >
            <Typewriter texts={typewriterTitles} speed={70} pause={2200} />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '1rem',
              fontSize: '0.75rem',
              color: 'var(--accent)',
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent-line)',
              padding: '5px 12px',
              borderRadius: '20px',
            }}
          >
            <span style={{
              width: '7px', height: '7px',
              background: 'var(--accent)',
              borderRadius: '50%',
            }} className="pulse-dot" />
            {t('hero.available')}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              color: '#8694AB',
              marginTop: '1rem',
              fontSize: '0.9rem',
              lineHeight: 1.7,
            }}
          >
            {t('hero.tagline')}
          </motion.p>

          {/* Socials row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{ display: 'flex', gap: '20px', marginTop: '1.5rem', alignItems: 'center' }}
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: '#5C6A82', display: 'inline-flex', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = '#5C6A82'}
              >
                <Icon />
              </a>
            ))}
          </motion.div>

          {/* CV button */}
          <motion.a
            href={meta.cv}
            download="Alex_Resume.docx"
            className="mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '1.25rem',
              border: '1px solid var(--accent-line)',
              color: 'var(--accent)',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            ↓ {t('hero.downloadCV')}
          </motion.a>
        </div>

        {/* ── Section pill navigation ── */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          padding: '0 1.5rem 1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          {NAV_IDS.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="mono"
              style={{
                flexShrink: 0,
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                color: '#8694AB',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent-line)';
                e.currentTarget.style.background = 'var(--accent-soft)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#8694AB';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
