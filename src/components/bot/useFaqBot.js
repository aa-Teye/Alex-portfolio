import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { faqs } from '../../data/faq';

function findAnswer(input, fallback) {
  const q = input.toLowerCase().trim();

  const exact = faqs.find((f) => f.question.toLowerCase() === q);
  if (exact) return exact.answer;

  let best = null;
  let bestScore = 0;

  for (const faq of faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return bestScore > 0 ? best.answer : fallback;
}

export function useFaqBot() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([{ role: 'bot', text: t('bot.greeting') }]);
  const [showChips, setShowChips] = useState(true);

  useEffect(() => {
    setMessages([{ role: 'bot', text: t('bot.greeting') }]);
    setShowChips(true);
  }, [i18n.language]);

  function send(question) {
    if (!question.trim()) return;
    const answer = findAnswer(question, t('bot.fallback'));
    setShowChips(false);
    setMessages((m) => [
      ...m,
      { role: 'user', text: question },
      { role: 'bot', text: answer },
    ]);
  }

  return { messages, showChips, send };
}
