import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useFaqBot } from './useFaqBot';
import { suggestedChips } from '../../data/faq';

export default function FaqBot() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, showChips, send } = useFaqBot();
  const msgsRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;
    send(input);
    setInput('');
  };

  return (
    <>
      {/* toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('bot.openLabel')}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 50,
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'var(--accent)', color: '#0A0E14',
          border: 'none', cursor: 'pointer', fontSize: '1.4rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(224,179,65,0.4)',
        }}
      >
        {open ? '✕' : '✦'}
      </motion.button>

      {/* panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', bottom: '92px', right: '24px', zIndex: 50,
              width: '360px', maxWidth: 'calc(100vw - 48px)',
              height: '500px', maxHeight: 'calc(100vh - 140px)',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* header */}
            <div
              style={{
                padding: '14px 16px',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(224,179,65,0.04)',
                flexShrink: 0,
              }}
            >
              <div
                className="mono"
                style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: 'var(--accent-soft)', color: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
                }}
              >
                AB
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#E8EDF4' }}>AlexBot</div>
                <div className="mono" style={{ fontSize: '0.68rem', color: '#5C6A82' }}>
                  Ask me about Alex — no AI, instant answers
                </div>
              </div>
            </div>

            {/* messages */}
            <div
              ref={msgsRef}
              style={{
                flex: 1, overflowY: 'auto', padding: '16px',
                display: 'flex', flexDirection: 'column', gap: '10px',
              }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    padding: '10px 13px',
                    borderRadius: '12px',
                    maxWidth: '88%',
                    whiteSpace: 'pre-line',
                    ...(m.role === 'bot'
                      ? {
                          background: 'var(--card)',
                          color: '#CCD6E6',
                          alignSelf: 'flex-start',
                          borderBottomLeftRadius: '3px',
                        }
                      : {
                          background: 'var(--accent-soft)',
                          color: '#E8EDF4',
                          alignSelf: 'flex-end',
                          borderBottomRightRadius: '3px',
                          border: '1px solid var(--accent-line)',
                        }
                    ),
                  }}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            {/* suggested chips */}
            {showChips && (
              <div
                style={{
                  display: 'flex', flexWrap: 'wrap', gap: '6px',
                  padding: '0 16px 10px', flexShrink: 0,
                }}
              >
                {suggestedChips.map((c) => (
                  <button
                    key={c}
                    onClick={() => { send(c); setInput(''); }}
                    className="mono"
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--accent)',
                      background: 'var(--accent-soft)',
                      border: '1px solid var(--accent-line)',
                      padding: '5px 10px',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(224,179,65,0.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-soft)')}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {/* input */}
            <div
              style={{
                display: 'flex', gap: '8px',
                padding: '12px 16px',
                borderTop: '1px solid var(--border)',
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('bot.placeholder')}
                style={{
                  flex: 1, background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '9px 13px',
                  color: '#E8EDF4', fontFamily: 'inherit',
                  fontSize: '0.84rem', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-line)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
              <button
                onClick={handleSend}
                style={{
                  background: 'var(--accent)', color: '#0A0E14',
                  border: 'none', borderRadius: '10px',
                  width: '38px', fontSize: '1rem', cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
