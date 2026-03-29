import React from 'react';

const cards = [
  {
    title: 'Youth Academies',
    desc: 'Age-appropriate cricket academies and competitive leagues for players from 6 to 18 years old, giving every young athlete a structured path from beginner to elite.',
    gradientFrom: '#004aad',
    gradientTo: '#b41a43',
  },
  {
    title: 'USA Cricket Affiliated',
    desc: 'Officially affiliated with USA Cricket, the national governing body for the sport, ensuring our players compete and develop under recognized national standards.',
    gradientFrom: '#b41a43',
    gradientTo: '#004aad',
  },
  {
    title: 'Community Outreach',
    desc: 'A registered 501(c)(3) nonprofit serving communities across the DFW metroplex — partnering with local schools and parks to bring cricket access to every neighborhood.',
    gradientFrom: '#004aad',
    gradientTo: '#002d7a',
  },
];

export default function SkewCards({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <>
      <div
        className="flex justify-center items-center flex-wrap min-h-screen"
        style={{ background: 'var(--dark)', paddingTop: '32px', paddingBottom: '140px' }}
      >
        {/* Section header */}
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '8px' }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.45)' }}>
            What We Do
          </div>
          <h2
            className="font-bold"
            style={{
              color: 'white',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              letterSpacing: '-0.02em',
              marginBottom: '4px',
            }}
          >
            Cricket for Every Kid in North Texas
          </h2>
        </div>

        {cards.map(({ title, desc, gradientFrom, gradientTo }, idx) => (
          <div
            key={idx}
            className="group relative w-84 h-125 m-[80px_60px] transition-all duration-500"
            style={{ transform: `translateX(${idx === 0 ? '-80px' : idx === 2 ? '80px' : '0'})` }}
          >
            {/* Skewed gradient panels */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
            />
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
            />

            {/* Animated blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Content — small by default, expands on hover */}
            <div className="relative z-20 left-0 h-30 overflow-hidden bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:-left-6.25 group-hover:h-full">
              {/* Title — centered, fades out on hover */}
              <div className="absolute inset-0 flex items-center justify-center px-20 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
                <h2 className="text-2xl font-bold text-center">{title}</h2>
              </div>
              {/* Description — hidden, fades in on hover */}
              <div className="absolute inset-0 flex items-center justify-center px-28 py-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none">
                <p className="text-base leading-relaxed text-center" style={{ opacity: 0.85 }}>{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* USA Cricket Affiliation Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #b41a43 0%, #7a0022 100%)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Diagonal stripes overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'repeating-linear-gradient(-55deg, transparent 0px, transparent 60px, rgba(255,255,255,0.045) 60px, rgba(255,255,255,0.045) 120px)',
          }}
        />
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '64px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '64px',
          }}
        >
          {/* USA Cricket Logo */}
          <img
            src="/assets/images/usacricket-logo.svg"
            alt="USA Cricket"
            style={{ width: '120px', flexShrink: 0 }}
          />

          {/* Text */}
          <div>
            <h2
              style={{
                color: 'white',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
                lineHeight: 1.15,
              }}
            >
              An Official Hub of USA Cricket
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.97rem',
                lineHeight: 1.7,
                maxWidth: '480px',
              }}
            >
              Dallas Hub Cricket Association is officially recognized as a Hub by USA Cricket — the national governing body for cricket in the United States — ensuring our players train and compete under nationally sanctioned standards.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
