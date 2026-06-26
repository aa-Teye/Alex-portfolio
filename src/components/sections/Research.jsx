import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import ResearchCard from '../ui/ResearchCard';
import { research } from '../../data/research';

export default function Research() {
  const { t } = useTranslation();
  return (
    <section id="research" style={{ marginBottom: '5.5rem' }}>
      <FadeIn>
        <p style={{ color: '#8694AB', marginBottom: '1.25rem', fontSize: '0.93rem', lineHeight: 1.75 }}>
          {t('research.tagline')}
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
