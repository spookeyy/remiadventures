import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.pexels.com/photos/5851190/pexels-photo-5851190.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Safari Wildlife',
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Lion Pride',
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.pexels.com/photos/3714898/pexels-photo-3714898.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Mount Kilimanjaro',
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.pexels.com/photos/12214913/pexels-photo-12214913.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Elephants',
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Beach Paradise',
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Giraffe',
  },
  {
    id: 7,
    type: 'image',
    url: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Flamingos',
  },
  {
    id: 8,
    type: 'image',
    url: 'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Mountain Landscape',
  },
  {
    id: 9,
    type: 'image',
    url: 'https://images.pexels.com/photos/1068742/pexels-photo-1068742.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Sunset Safari',
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-dark scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary font-bold mb-4">
            OUR <span className="text-gold">GALLERY</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            Immerse yourself in the beauty captured during our adventures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative h-64 overflow-hidden cursor-pointer group"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-text-primary font-semibold text-lg">{item.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-text-primary hover:text-gold transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-text-primary hover:text-gold transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-text-primary hover:text-gold transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={galleryItems[currentIndex].url}
              alt={galleryItems[currentIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-center text-text-primary mt-4 text-xl">
              {galleryItems[currentIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
