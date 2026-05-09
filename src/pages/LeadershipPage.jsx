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

      <div className="team-section">
        <div className="section-label">Leadership</div><div className="divider"></div>
        <h2 className="section-title">Executive Committee</h2>
        <p className="section-body">Our executive committee comprises passionate volunteers from across the North Texas cricket community. As a nonprofit, our leadership is committed to transparent governance and the long-term development of cricket in our region.</p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar" style={{background: 'linear-gradient(135deg,#004aad,#1a6fd4)'}}>
              <div className="team-avatar-initials">ST</div>
            </div>
            <div className="team-info">
              <h3>Sandeep Tellapati</h3>
              <div className="role">Chairman</div>
              <p>Leads the overall strategic direction of Dallas Hub and serves as the primary liaison with USA Cricket.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-avatar" style={{background: 'linear-gradient(135deg,#b41a43,#96153a)'}}>
              <div className="team-avatar-initials">HR</div>
            </div>
            <div className="team-info">
              <h3>Haricharan RK</h3>
              <div className="role">Secretary</div>
              <p>Manages organizational records, meeting minutes, and ensures compliance with nonprofit governance standards.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-avatar" style={{background: 'linear-gradient(135deg,#1a6fd4,#004aad)'}}>
              <div className="team-avatar-initials">PY</div>
            </div>
            <div className="team-info">
              <h3>Praveen Yerramsetty</h3>
              <div className="role">Treasurer</div>
              <p>Oversees all financial operations, budgeting, and reporting for Dallas Hub as a registered 501(c)(3) nonprofit.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-avatar" style={{background: 'linear-gradient(135deg,#004aad,#003080)'}}>
              <div className="team-avatar-initials">VR</div>
            </div>
            <div className="team-info">
              <h3>Vijay Ranganathan</h3>
              <div className="role">Logistics Co-ordinator</div>
              <p>Manages facilities, scheduling, logistics, and day-to-day operations across the Dallas Hub network.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-avatar" style={{background: 'linear-gradient(135deg,#b41a43,#b41a43)'}}>
              <div className="team-avatar-initials">VS</div>
            </div>
            <div className="team-info">
              <h3>Vikas Sharma</h3>
              <div className="role">Umpiring Co-ordinator</div>
              <p>Oversees umpire training, scheduling, and ensures consistent officiating standards across all Dallas Hub events.</p>
            </div>
          </div>
        </div>
        <div style={{marginTop: '48px', background: 'var(--light)', borderRadius: '12px', padding: '36px', textAlign: 'center'}}>
          <div className="section-label" style={{textAlign: 'center'}}>Governance</div>
          <div className="divider" style={{margin: '0 auto 16px'}}></div>
          <h3 style={{fontSize: '1.35rem', fontWeight: '800', color: 'var(--dark)', marginBottom: '11px'}}>Transparent Nonprofit Governance</h3>
          <p style={{color: 'var(--gray)', maxWidth: '560px', margin: '0 auto', fontSize: '0.86rem', lineHeight: '1.76', fontWeight: '500'}}>Dallas Hub operates as a registered 501(c)(3) nonprofit. Our executive committee volunteers their time in service of our mission. Board elections are held annually and financial reports are available to the public.</p>
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

export default LeadershipPage;
