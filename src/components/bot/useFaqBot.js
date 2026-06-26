import { useState } from 'react';
import { faqs, botGreeting, fallbackReply } from '../../data/faq';

function findAnswer(input) {
  const q = input.toLowerCase().trim();

  // exact FAQ question match first
  const exact = faqs.find((f) => f.question.toLowerCase() === q);
  if (exact) return exact.answer;

  // keyword scoring
  let best = null;
  let bestScore = 0;

  for (const faq of faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (q.includes(kw)) score += kw.length; // longer keyword = stronger signal
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return bestScore > 0 ? best.answer : fallbackReply;
}

const INITIAL = [{ role: 'bot', text: botGreeting }];

export function useFaqBot() {
  const [messages, setMessages] = useState(INITIAL);
  const [showChips, setShowChips] = useState(true);

  function send(question) {
    if (!question.trim()) return;
    const answer = findAnswer(question);
    setShowChips(false);
    setMessages((m) => [
      ...m,
      { role: 'user', text: question },
      { role: 'bot', text: answer },
    ]);
  }

  return { messages, showChips, send };
}
