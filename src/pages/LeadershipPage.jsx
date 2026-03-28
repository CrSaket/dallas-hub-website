import React from 'react';

const LeadershipPage = ({ showPage }) => {
  return (
    <div className="page active">
      <div className="stripe-hero">
        <div className="s-lines"></div>
        <div className="s-diag"></div>
        <div className="s-radial"></div>
        <div className="stripe-hero-inner">
          <div className="section-label" style={{color: 'rgba(255,255,255,0.58)'}}>Governance</div>
          <h1>Executive Committee</h1>
          <p>Dallas Hub is governed by a dedicated volunteer executive committee committed to growing cricket across North Texas.</p>
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

export default LeadershipPage;
