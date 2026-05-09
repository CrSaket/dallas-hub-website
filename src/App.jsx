import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const showPage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage showPage={showPage} />;
      case 'about':
        return <AboutPage showPage={showPage} />;
      case 'impact':
        return <ImpactPage showPage={showPage} />;
      case 'team':
        return <LeadershipPage showPage={showPage} />;
      case 'contact':
        return <ContactPage showPage={showPage} />;
      default:
        return <HomePage showPage={showPage} />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} showPage={showPage} />
      {renderPage()}
    </div>
  );
}

export default App;
