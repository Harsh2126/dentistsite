export default function DentalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-white">
      {[
        { top: '3%', left: '2%', size: 90, opacity: 0.18, rotate: -15 },
        { top: '10%', left: '85%', size: 75, opacity: 0.18, rotate: 20 },
        { top: '22%', left: '18%', size: 65, opacity: 0.15, rotate: 10 },
        { top: '28%', left: '72%', size: 85, opacity: 0.18, rotate: -25 },
        { top: '42%', left: '4%', size: 70, opacity: 0.16, rotate: 30 },
        { top: '45%', left: '90%', size: 68, opacity: 0.18, rotate: -10 },
        { top: '58%', left: '28%', size: 80, opacity: 0.15, rotate: 15 },
        { top: '62%', left: '62%', size: 72, opacity: 0.18, rotate: -20 },
        { top: '73%', left: '8%', size: 66, opacity: 0.16, rotate: 25 },
        { top: '78%', left: '80%', size: 78, opacity: 0.18, rotate: -5 },
        { top: '88%', left: '44%', size: 70, opacity: 0.15, rotate: 18 },
        { top: '16%', left: '48%', size: 60, opacity: 0.14, rotate: -30 },
        { top: '52%', left: '46%', size: 74, opacity: 0.16, rotate: 12 },
      ].map((t, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 80"
          width={t.size} height={t.size}
          style={{ position: 'absolute', top: t.top, left: t.left, opacity: t.opacity, transform: `rotate(${t.rotate}deg)` }}>
          <path d="M30 4 C20 4 12 10 10 20 C8 28 10 36 12 44 C14 54 14 64 18 70 C20 73 23 74 26 72 C28 70 28 65 30 65 C32 65 32 70 34 72 C37 74 40 73 42 70 C46 64 46 54 48 44 C50 36 52 28 50 20 C48 10 40 4 30 4Z"
            fill="#1A6FE8" />
        </svg>
      ))}

      {[
        { top: '8%', left: '40%', size: 28, opacity: 0.15 },
        { top: '35%', left: '55%', size: 24, opacity: 0.14 },
        { top: '70%', left: '35%', size: 26, opacity: 0.15 },
        { top: '50%', left: '76%', size: 22, opacity: 0.13 },
        { top: '88%', left: '18%', size: 24, opacity: 0.14 },
      ].map((c, i) => (
        <svg key={`c${i}`} viewBox="0 0 20 20" width={c.size} height={c.size}
          style={{ position: 'absolute', top: c.top, left: c.left, opacity: c.opacity }}>
          <rect x="8" y="0" width="4" height="20" rx="2" fill="#1A6FE8" />
          <rect x="0" y="8" width="20" height="4" rx="2" fill="#1A6FE8" />
        </svg>
      ))}
    </div>
  );
}
