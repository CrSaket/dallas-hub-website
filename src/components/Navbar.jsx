import React, { useState } from 'react';

const Navbar = ({ currentPage, showPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobile = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="nav-outer" style={{maxWidth: '100%'}}>
        <nav>
          <a className="nav-brand" onClick={() => showPage('home')}>
            <img className="nav-logo" src="/assets/images/DallasHubLogo.png" alt="Dallas Hub Cricket" />
          </a>
          <ul className="nav-links">
            <li><a onClick={() => showPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
            <li><a onClick={() => showPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
            <li><a onClick={() => showPage('impact')} className={currentPage === 'impact' ? 'active' : ''}>Impact</a></li>
            <li><a onClick={() => showPage('team')} className={currentPage === 'team' ? 'active' : ''}>Leadership</a></li>
            <li><a onClick={() => showPage('contact')} className={currentPage === 'contact' ? 'active nav-cta' : 'nav-cta'}>Contact Us</a></li>
          </ul>
          <button className="hamburger" onClick={toggleMobile}>
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a onClick={() => { showPage('home'); toggleMobile(); }}>Home</a>
        <a onClick={() => { showPage('about'); toggleMobile(); }}>About</a>
        <a onClick={() => { showPage('impact'); toggleMobile(); }}>Impact</a>
        <a onClick={() => { showPage('team'); toggleMobile(); }}>Leadership</a>
        <a onClick={() => { showPage('contact'); toggleMobile(); }}>Contact Us</a>
      </div>
    </>
  );
};

export default Navbar;
