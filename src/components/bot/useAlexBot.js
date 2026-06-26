import { useState, useRef } from 'react';
import { ALEXBOT_SYSTEM } from '../../data/meta';

const INITIAL_MESSAGES = [
  {
    role: 'bot',
    text: "Hi! I'm AlexBot. Ask me anything about Alex — his skills, experience, projects, or how to get in touch.",
  },
];

export function useAlexBot() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [busy, setBusy] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const historyRef = useRef([]);

  async function send(question) {
    if (busy || !question.trim()) return;

    setBusy(true);
    setShowChips(false);
    setMessages((m) => [...m, { role: 'user', text: question }]);
    historyRef.current.push({ role: 'user', content: question });

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyRef.current, system: ALEXBOT_SYSTEM }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      const reply =
        data.reply ||
        "Sorry, I couldn't generate a response. Try emailing Alex at alexteyeametepey@gmail.com.";

      setMessages((m) => [...m, { role: 'bot', text: reply }]);
      historyRef.current.push({ role: 'assistant', content: reply });
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          text: "I'm having trouble connecting right now. You can reach Alex directly at alexteyeametepey@gmail.com.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return { messages, busy, showChips, send };
}
