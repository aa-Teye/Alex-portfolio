import ExpCard from '../ui/ExpCard';
import { experience } from '../../data/experience';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" style={{ marginBottom: '5.5rem' }}>
      <div className="mono" style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#CCD6E6', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
        {t('nav.experience')}
      </div>
      {experience.map((item, i) => (
        <ExpCard key={`${item.role}-${item.company}`} item={item} index={i} />
      ))}
    </section>
  );
}
