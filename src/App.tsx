import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import { AuroraHero } from '@/components/ui/futurastic-hero-section';

type PageType = 'home' | 'about' | 'impact' | 'team' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const showPage = (page: PageType) => {
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

  // Show futuristic hero on home page
  if (currentPage === 'home') {
    return (
      <div className="App">
        <Navbar currentPage={currentPage} showPage={showPage} />
        <AuroraHero />
        {/* Remove the regular HomePage content since hero replaces it */}
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar currentPage={currentPage} showPage={showPage} />
      {renderPage()}
    </div>
  );
}

export default App;
