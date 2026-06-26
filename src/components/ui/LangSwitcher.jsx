import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'de', label: 'DE' },
  { code: 'zh', label: '中文' },
];

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2) || 'en';

  return (
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '1.25rem' }}>
      {LANGS.map(({ code, label }) => {
        const active = current === code;
        return (
          <button
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className="mono"
            aria-label={`Switch to ${label}`}
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              padding: '4px 8px',
              borderRadius: '5px',
              border: `1px solid ${active ? 'var(--accent-line)' : 'var(--border)'}`,
              background: active ? 'var(--accent-soft)' : 'transparent',
              color: active ? 'var(--accent)' : '#5C6A82',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!active) {
                e.currentTarget.style.color = '#CCD6E6';
                e.currentTarget.style.borderColor = 'rgba(224,179,65,0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!active) {
                e.currentTarget.style.color = '#5C6A82';
                e.currentTarget.style.borderColor = 'var(--border)';
              }
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
