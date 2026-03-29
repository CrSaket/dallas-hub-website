import React from 'react';

const pillars = [
  {
    title: 'Our Mission',
    body: 'Dallas Hub Cricket Association exists to make cricket accessible to every young athlete in North Texas — regardless of background, experience, or resources. We believe sport builds character, and cricket builds champions.',
  },
  {
    title: 'How We Started',
    body: 'Founded by a group of DFW cricket enthusiasts who saw a gap in youth sports, Dallas Hub began with a single academy and a handful of players. Today we operate across the entire metroplex, serving over a thousand young cricketers every season.',
  },
  {
    title: 'USA Cricket Affiliated',
    body: 'Dallas Hub is an officially recognized Hub of USA Cricket — the national governing body for the sport. This affiliation ensures our players train and compete under nationally sanctioned standards and have a clear pathway to higher levels of competition.',
  },
  {
    title: '501(c)(3) Nonprofit',
    body: 'As a registered nonprofit, every dollar contributed to Dallas Hub goes directly toward coaching, equipment, facility access, and expanding our reach into new communities across DFW. We are accountable to our players and families first.',
  },
];

const programs = [
  {
    tag: 'Ages 6–10',
    title: 'Beginner Academies',
    body: 'Introductory programs focused on fundamentals — bat grip, fielding basics, and the joy of playing. Small groups, patient coaches, and a low-pressure environment designed to spark a lifelong love of the game.',
  },
  {
    tag: 'Ages 11–14',
    title: 'Development Leagues',
    body: 'Structured league play with skill-based team placement. Players work on technique, game awareness, and teamwork through regular practice sessions and weekend match fixtures across DFW venues.',
  },
  {
    tag: 'Ages 15–18',
    title: 'High-Performance Academies',
    body: 'For serious athletes with their eyes on state and national competition. Advanced coaching, fitness programming, and exposure to USA Cricket pathways — preparing players to represent Texas on the national stage.',
  },
  {
    tag: 'All Ages',
    title: 'School Outreach',
    body: 'Dallas Hub partners with local schools and parks departments to introduce cricket to students who have never seen the sport. Coaches run in-school clinics and invite participants into our broader academy programs.',
  },
];

const values = [
  { title: 'Accessibility', body: 'Cricket should not be a sport only for those with resources. We subsidize equipment, reduce registration barriers, and bring programs to every zip code in DFW.' },
  { title: 'Excellence', body: 'We hold every coach and player to high standards — on the field and off it. Our academies follow structured curricula aligned with USA Cricket\'s national development framework.' },
  { title: 'Community', body: 'Dallas Hub is a family. Our players, coaches, and families form a tight-knit community that supports each other through every season, win or loss.' },
  { title: 'Integrity', body: 'We are transparent in our finances, our decision-making, and our communication with families. As a nonprofit, trust is our foundation.' },
];

const AboutPage = ({ showPage }) => {
  return (
    <div className="page active">
      {/* Hero */}
      <div className="stripe-hero">
        <div className="s-lines"></div>
        <div className="s-diag"></div>
        <div className="s-radial"></div>
        <div className="stripe-hero-inner">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.58)' }}>Our Story</div>
          <h1>About Dallas Hub</h1>
          <p>Learn about our mission to grow youth cricket across North Texas.</p>
        </div>
      </div>

      {/* Intro */}
      <div style={{ background: 'var(--light)', borderBottom: '1px solid rgba(0,74,173,0.08)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '72px 48px', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Who We Are</div>
          <h2 style={{
            color: 'var(--dark)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            The Largest Youth Cricket Association in North Texas
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Dallas Hub Cricket Association is a registered 501(c)(3) nonprofit dedicated to growing youth cricket across
            the Dallas–Fort Worth metroplex. From beginner clinics to high-performance academies, we give every young
            athlete in North Texas a structured path to fall in love with — and excel at — cricket.
          </p>
        </div>
      </div>

      {/* Pillars grid */}
      <div style={{ background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Foundation</div>
            <div className="divider" style={{ margin: '0 auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '28px' }}>
            {pillars.map(({ title, body }, i) => (
              <div key={i} style={{
                background: 'var(--light)',
                border: '1px solid rgba(0,74,173,0.1)',
                borderRadius: '12px',
                padding: '36px 40px',
                borderLeft: '4px solid var(--blue)',
              }}>
                <h3 style={{ color: 'var(--dark)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: 'var(--gray)', lineHeight: 1.75, fontSize: '0.93rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs */}
      <div style={{ background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.45)' }}>What We Offer</div>
            <h2 style={{
              color: 'white',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginTop: '4px',
            }}>
              Programs for Every Level
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
            {programs.map(({ tag, title, body }, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '36px 40px',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: 'var(--red)',
                  color: 'white',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '14px',
                }}>{tag}</span>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.93rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ background: 'var(--light)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">What Drives Us</div>
            <div className="divider" style={{ margin: '0 auto 20px' }} />
            <h2 style={{
              color: 'var(--dark)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {values.map(({ title, body }, i) => (
              <div key={i} style={{
                background: 'white',
                border: '1px solid rgba(0,74,173,0.1)',
                borderRadius: '12px',
                padding: '32px 28px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '4px',
                  background: 'var(--blue)',
                  borderRadius: '2px',
                  margin: '0 auto 20px',
                }} />
                <h3 style={{ color: 'var(--dark)', fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{title}</h3>
                <p style={{ color: 'var(--gray)', lineHeight: 1.7, fontSize: '0.88rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #b41a43 0%, #7a0022 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'repeating-linear-gradient(-55deg, transparent 0px, transparent 60px, rgba(255,255,255,0.045) 60px, rgba(255,255,255,0.045) 120px)',
        }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 48px', textAlign: 'center', position: 'relative' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>Ready to Join Dallas Hub?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            Whether you're a parent looking to enroll your child, a coach wanting to get involved, or a supporter of youth sport — we'd love to hear from you.
          </p>
          <button className="btn-primary" style={{ background: 'white', color: 'var(--red)' }} onClick={() => showPage('contact')}>
            Contact Us Today
          </button>
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
                <li><a>info@dallashub.org</a></li>
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

export default AboutPage;
