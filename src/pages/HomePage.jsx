import React from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';

const HomePage = ({ showPage }) => {
  return (
    <div className="page active">
      <BackgroundPaths title="Dallas Hub Cricket" onCtaClick={() => showPage('contact')} />

      <div style={{background: 'var(--light)', padding: '56px 40px', textAlign: 'center'}}>
        <div className="section-label" style={{textAlign: 'center'}}>Get Started</div>
        <div className="divider" style={{margin: '0 auto 16px'}}></div>
        <h2 className="section-title" style={{textAlign: 'center', maxWidth: '540px', margin: '0 auto 12px'}}>Join North Texas Cricket</h2>
        <p className="section-body" style={{textAlign: 'center', margin: '0 auto 24px'}}>
          Ready to get involved? Contact us to learn about programs, academies, and opportunities.
        </p>
        <button className="btn-primary" onClick={() => showPage('contact')}>Contact Us Today</button>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/images/DallasHubLogo.png" className="footer-logo" alt="Dallas Hub" />
              <div className="footer-brand-name">Dallas Hub</div>
              <p>The largest youth cricket association in North Texas.</p>
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

export default HomePage;
