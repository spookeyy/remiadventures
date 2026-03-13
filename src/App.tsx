import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tours from './components/Tours';
import TourDetail from './components/TourDetail';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import type { Tour } from './types/tour';

function App() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTour !== null || !pendingScrollId) return;
    const element = document.getElementById(pendingScrollId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = pendingScrollId;
    }
    setPendingScrollId(null);
  }, [pendingScrollId, selectedTour]);

  const handleNavRequest = (id: string) => {
    if (selectedTour) {
      setSelectedTour(null);
    }
    setPendingScrollId(id);
  };

  return (
    <div className="min-h-screen dark:bg-dark bg-light transition-colors duration-300">
      <Header onNavigateHome={handleNavRequest} />
      {selectedTour ? (
        <>
          <TourDetail tour={selectedTour} onBack={() => setSelectedTour(null)} />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <Tours onSelectTour={setSelectedTour} />
          <Gallery />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
