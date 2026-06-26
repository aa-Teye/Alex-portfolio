import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'research',   label: 'Research' },
  { id: 'contact',    label: 'Contact' },
];

const IDS = NAV_ITEMS.map((n) => n.id);

export default function SpyNav() {
  const activeId = useScrollSpy(IDS);

  return (
    <nav style={{ marginTop: '3.5rem' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {NAV_ITEMS.map(({ id, label }) => {
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
