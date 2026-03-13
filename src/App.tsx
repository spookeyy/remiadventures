import { useState } from 'react';
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

  return (
    <div className="min-h-screen dark:bg-dark bg-light transition-colors duration-300">
      <Header />
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
