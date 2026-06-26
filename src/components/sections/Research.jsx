import FadeIn from '../ui/FadeIn';
import ResearchCard from '../ui/ResearchCard';
import { research } from '../../data/research';

export default function Research() {
  return (
    <section id="research" style={{ marginBottom: '5.5rem' }}>
      <FadeIn>
        <p style={{ color: '#8694AB', marginBottom: '1.25rem', fontSize: '0.93rem', lineHeight: 1.75 }}>
          I believe the next generation of software will be driven by{' '}
          <span style={{ color: 'var(--accent)' }}>intelligent data structures.</span>
        </p>
      </FadeIn>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {research.map((r, i) => (
          <ResearchCard key={r.title} item={r} index={i} />
        ))}
      </div>
    </section>
  );
}
