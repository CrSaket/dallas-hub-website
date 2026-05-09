import React, { useState, useEffect, useRef } from 'react';

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatCard({ number, suffix, label, delay = 0, started }) {
  const count = useCountUp(number, 1800, started);
  return (
    <div
      style={{
        flex: 1,
        minWidth: '220px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '48px 32px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: started ? 1 : 0,
        transform: started ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          marginBottom: '12px',
        }}
      >
        {started ? count : 0}{suffix}
      </div>
      <div
        style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
    </div>
  );
}

const impactItems = [
  {
    title: 'Reaching Every Corner of DFW',
    body: 'From Frisco to Garland, Irving to Mansfield — Dallas Hub programs run across the entire DFW metroplex. We partner with local parks, recreation centers, and schools to bring certified coaching and proper equipment directly into neighborhoods that have never had access to the sport before.',
  },
  {
    title: 'School Outreach & Clinics',
    body: 'Through our school outreach initiative, we\'ve introduced cricket to thousands of students across North Texas. Our certified coaches visit campuses, run PE demonstrations, and invite young athletes into structured beginner programs — lowering the barrier to entry at every step.',
  },
  {
    title: 'Building Character Through Sport',
    body: 'Cricket teaches patience, teamwork, and discipline. Our academies are designed not just to develop cricketers, but to build young men and women with the values to succeed beyond the boundary. Coaches mentor players on and off the field throughout every season.',
  },
  {
    title: 'A Growing Network of Clubs',
    body: 'Dallas Hub anchors a growing network of affiliated clubs across DFW. Our league structure gives players of all skill levels — from total beginners to aspiring national-level athletes — a competitive pathway and a community to grow within year-round.',
  },
];

const ImpactPage = ({ showPage }) => {
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page active">
      {/* Hero */}
      <div className="stripe-hero">
        <div className="s-lines"></div>
        <div className="s-diag"></div>
        <div className="s-radial"></div>
        <div className="stripe-hero-inner">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.58)' }}>Community Impact</div>
          <h1>Our Impact</h1>
          <p>Making a difference in North Texas communities through youth cricket.</p>
        </div>
      </div>

      {/* Stats cards */}
      <div
        ref={statsRef}
        style={{
          background: 'var(--dark)',
          padding: '80px 48px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.45)' }}>By the Numbers</div>
          <h2
            style={{
              color: 'white',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginTop: '4px',
            }}
          >
            Cricket Growing Across North Texas
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <StatCard number={20}  suffix="+" label="Academies"    delay={0}   started={statsStarted} />
          <StatCard number={1000} suffix="+" label="Players"     delay={150} started={statsStarted} />
          <StatCard number={80}  suffix="+" label="Teams"        delay={300} started={statsStarted} />
        </div>
      </div>

      {/* DFW Community Impact */}
      <div style={{ background: 'var(--light)', borderTop: '1px solid rgba(0,74,173,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label">Our Story in DFW</div>
            <div className="divider" style={{ margin: '0 auto 20px' }} />
            <h2
              style={{
                color: 'var(--dark)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.2,
              }}
            >
              Transforming Communities Through Cricket
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
              gap: '32px',
            }}
          >
            {impactItems.map(({ title, body }, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,74,173,0.12)',
                  borderRadius: '12px',
                  padding: '36px 40px',
                  borderLeft: '4px solid var(--blue)',
                }}
              >
                <h3
                  style={{
                    color: 'var(--dark)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: 'var(--gray)', lineHeight: 1.75, fontSize: '0.93rem' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <button className="btn-primary" onClick={() => showPage('contact')}>
              Get Involved Today
            </button>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/images/DallasHubLogo.png" className="footer-logo" alt="Dallas Hub" />
              <div className="footer-brand-name">Dallas Hub Cricket Association</div>
              <p>The largest youth cricket association in North Texas. A registered 501(c)(3) nonprofit.</p>
              <span className="footer-nonprofit">501(c)(3) Nonprofit Organization</span>
            </div>
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a onClick={() => showPage('home')}>Home</a></li>
                <li><a onClick={() => showPage('about')}>About</a></li>
                <li><a onClick={() => showPage('impact')}>Impact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Organization</h4>
              <ul>
                <li><a onClick={() => showPage('team')}>Leadership</a></li>
                <li><a onClick={() => showPage('contact')}>Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a>Dallas, TX</a></li>
                <li><a href="mailto:secretary@usacricketdallas.org">secretary@usacricketdallas.org</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Dallas Hub Cricket Association. All rights reserved. A registered 501(c)(3) nonprofit organization.</p>
            <div className="footer-usa-logo">
              <img src="/assets/images/usacricket-logo.svg" alt="USA Cricket" />
              <span>USA Cricket Affiliated Hub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImpactPage;
