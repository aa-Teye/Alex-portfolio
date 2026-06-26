import { useTranslation } from 'react-i18next';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'research', 'contact'];

export default function SpyNav() {
  const { t } = useTranslation();
  const activeId = useScrollSpy(NAV_IDS);

  return (
    <nav style={{ marginTop: '3.5rem' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {NAV_IDS.map((id) => {
          const label = t(`nav.${id}`);
          const active = activeId === id;
          return (
            <li key={id} style={{ marginBottom: '4px' }}>
              <a
                href={`#${id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '8px 0',
                  color: active ? '#E8EDF4' : '#5C6A82',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: active ? '56px' : '32px',
                    height: '1px',
                    background: active ? 'var(--accent)' : '#5C6A82',
                    transition: 'all 0.3s ease',
                    boxShadow: active ? '0 0 8px rgba(224,179,65,0.5)' : 'none',
                  }}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
