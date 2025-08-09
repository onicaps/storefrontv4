// components/theme-toggle.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    const wantsDark = saved ? saved === 'dark' : false;
    root.classList.toggle('dark', wantsDark);
    setIsDark(wantsDark);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    root.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button onClick={toggle} className="rounded border px-3 py-1 text-sm">
      {isDark ? '🌞 Claro' : '🌙 Oscuro'}
    </button>
  );
}
