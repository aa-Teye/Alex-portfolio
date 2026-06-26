import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAlexBot } from './useAlexBot';

const CHIPS = [
  "What's his strongest skill?",
  'Tell me about StrokeNet',
  'How do I hire him?',
];

function TypingDots() {
  return (
    <div
      style={{
        alignSelf: 'flex-start',
        display: 'flex',
        gap: '4px',
        padding: '11px 13px',
        background: 'var(--card)',
        borderRadius: '12px',
        borderBottomLeftRadius: '3px',
      }}
    >
      {[0, 0.2, 0.4].map((d, i) => (
        <span
          key={i}
          className="blink-dot"
          style={{
            width: '6px',
            height: '6px',
            background: '#8694AB',
            borderRadius: '50%',
            animationDelay: `${d}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function AlexBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, busy, showChips, send } = useAlexBot();
  const msgsRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, busy]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSend = () => {
    send(input);
    setInput('');
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with AlexBot"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 50,
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'var(--accent)', color: '#0A0E14',
          border: 'none', cursor: 'pointer',
          fontSize: '1.4rem', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(224,179,65,0.4)',
        }}
      >
        {open ? '✕' : '✦'}
      </motion.button>

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
              height: '480px', maxHeight: 'calc(100vh - 140px)',
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
              }}
            >
              <div
                className="mono"
                style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: 'var(--accent-soft)', color: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.85rem',
                }}
              >
                AB
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#E8EDF4' }}>AlexBot</div>
                <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>AI assistant</div>
              </div>
              <div
                className="mono"
                style={{
                  marginLeft: 'auto',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.68rem', color: '#34D399',
                }}
              >
                <span
                  className="pulse-dot"
                  style={{ width: '6px', height: '6px', background: '#34D399', borderRadius: '50%' }}
                />
                online
              </div>
            </div>

            {/* messages */}
            <div
              ref={msgsRef}
              style={{
                flex: 1, overflowY: 'auto', padding: '16px',
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontSize: '0.85rem', lineHeight: 1.55,
                    padding: '9px 13px', borderRadius: '12px',
                    maxWidth: '85%',
                    ...(m.role === 'bot'
                      ? { background: 'var(--card)', color: '#CCD6E6', alignSelf: 'flex-start', borderBottomLeftRadius: '3px' }
                      : { background: 'var(--accent-soft)', color: '#E8EDF4', alignSelf: 'flex-end', borderBottomRightRadius: '3px' }
                    ),
                  }}
                >
                  {m.text}
                </motion.div>
              ))}
              {busy && <TypingDots />}
            </div>

            {/* chips */}
            {showChips && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '0 16px 8px' }}>
                {CHIPS.map((c) => (
                  <button
                    key={c}
                    onClick={() => { send(c); setInput(''); }}
                    className="mono"
                    style={{
                      fontSize: '0.7rem', color: 'var(--accent)',
                      background: 'var(--accent-soft)', border: 'none',
                      padding: '5px 10px', borderRadius: '14px',
                      cursor: 'pointer', transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-line)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-soft)')}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {/* input */}
            <div style={{ display: 'flex', gap: '8px', padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Alex..."
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
                disabled={busy}
                style={{
                  background: 'var(--accent)', color: '#0A0E14',
                  border: 'none', borderRadius: '10px',
                  width: '38px', fontSize: '1rem',
                  cursor: busy ? 'not-allowed' : 'pointer',
                  opacity: busy ? 0.5 : 1,
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
