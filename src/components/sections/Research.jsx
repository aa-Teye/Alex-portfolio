import FadeIn from '../ui/FadeIn';
import ResearchCard from '../ui/ResearchCard';
import SkillPill from '../ui/SkillPill';
import { research } from '../../data/research';
import { skills } from '../../data/meta';

export default function Research() {
  return (
    <section id="research" style={{ marginBottom: '5.5rem' }}>
      <FadeIn>
        <p style={{ color: '#8694AB', marginBottom: '1.25rem', fontSize: '0.93rem', lineHeight: 1.75 }}>
          I believe the next generation of software will be driven by{' '}
          <span style={{ color: 'var(--accent)' }}>intelligent data structures.</span>
        </p>
      </FadeIn>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        {research.map((r, i) => (
          <ResearchCard key={r.title} item={r} index={i} />
        ))}
      </div>

      <FadeIn delay={0.35}>
        <div
          className="mono"
          style={{
            fontSize: '0.72rem',
            color: '#5C6A82',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          Additional Skills
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {skills.map((s, i) => (
            <SkillPill key={s} label={s} index={i} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
