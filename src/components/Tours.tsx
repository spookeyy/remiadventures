import { MapPin, Clock } from 'lucide-react';
import type { Tour } from '../types/tour';

interface ToursProps {
  onSelectTour: (tour: Tour) => void;
}

const tours: Tour[] = [
  {
    id: 1,
    title: '3 Days 2 Nights Mombasa By SGR',
    location: 'Mombasa, Kenya',
    duration: '3 Days / 2 Nights',
    price: 'KES 34,109',
    priceValue: 34109,
    originalPrice: 34109,
    image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ride the SGR to the coast, check in to a beachside stay, and enjoy easy, family-friendly days by the sea.',
    highlights: ['SGR transfers', 'Beachfront downtime', 'Swahili coastal cuisine', 'Optional city add-ons', 'Sunset walks'],
    included: ['Return SGR ticket', '2 nights accommodation', 'Daily breakfast', 'Ground transfers', 'Local host support'],
  },
  {
    id: 2,
    title: 'Kongo River sunset Canoe cruise',
    location: 'Diani, Kenya',
    duration: '2-3 Hours',
    price: 'KES 1,938',
    priceValue: 1938,
    originalPrice: 1938,
    image: 'https://images.pexels.com/photos/1615808/pexels-photo-1615808.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Glide through mangroves at golden hour, spotting birds and listening to the river come alive at dusk.',
    highlights: ['Traditional canoe ride', 'Sunset views', 'Birdlife spotting', 'Calm, guided experience', 'Photo moments'],
    included: ['Canoe ride', 'Local guide', 'Safety gear', 'Entry fees', 'Refreshments'],
  },
  {
    id: 3,
    title: 'Mombasa City Tour',
    location: 'Mombasa, Kenya',
    duration: 'Half Day',
    price: 'KES 3,747',
    priceValue: 3747,
    originalPrice: 3747,
    image: 'https://images.pexels.com/photos/1734684/pexels-photo-1734684.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Walk through Old Town, Fort Jesus viewpoints, and lively markets with stories that bring the coast to life.',
    highlights: ['Old Town streets', 'Historic landmarks', 'Craft markets', 'Local flavors', 'Guided storytelling'],
    included: ['Professional guide', 'All entry fees', 'Bottled water', 'Pickup in town', 'Photo stops'],
  },
  {
    id: 4,
    title: 'Wasini Island Full Day Snorkling with Dolphins + Lunch',
    location: 'Wasini Island, Kenya',
    duration: 'Full Day',
    price: 'KES 10,207',
    priceValue: 10207,
    originalPrice: 10207,
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sail to Wasini for clear-water snorkeling, dolphin watching, and a relaxed coastal lunch by the ocean.',
    highlights: ['Dolphin spotting', 'Snorkeling gear provided', 'Island dhow ride', 'Swahili lunch', 'Relaxed pacing'],
    included: ['Boat transfers', 'Snorkeling equipment', 'Lunch', 'Marine park fees', 'Guide support'],
  },
];

export default function Tours({ onSelectTour }: ToursProps) {
  return (
    <>
      <section id="tours" className="py-20 dark:bg-dark-secondary bg-light-secondary transition-colors duration-300 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl dark:text-text-primary text-text-light font-bold mb-4">
              TOURS & <span className="dark:text-white text-text-light">ADVENTURES</span>
            </h2>
            <p className="dark:text-text-secondary text-text-light-secondary text-lg sm:text-xl max-w-3xl mx-auto">
              Carefully crafted experiences that showcase the best of Africa's natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => {
              const discount = Math.round(((tour.originalPrice - tour.priceValue) / tour.originalPrice) * 100);
              return (
                <div
                  key={tour.id}
                  className="dark:bg-dark dark:border-white/10 bg-white border border-black/10 overflow-hidden group hover:dark:border-white hover:border-black/30 transition-all duration-300 cursor-pointer"
                  onClick={() => onSelectTour(tour)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 dark:bg-gradient-dark bg-gradient-light opacity-40"></div>
                    {discount > 0 && (
                      <div className="absolute top-4 right-4 dark:bg-white dark:text-dark bg-dark text-white px-3 py-1 rounded-lg font-bold text-sm">
                        SAVE {discount}%
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl dark:text-text-primary text-text-light font-bold mb-3">{tour.title}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center dark:text-text-secondary text-text-light-secondary">
                        <MapPin size={16} className="mr-2 dark:text-white text-text-light" />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                      <div className="flex items-center dark:text-text-secondary text-text-light-secondary">
                        <Clock size={16} className="mr-2 dark:text-white text-text-light" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                    </div>

                    <p className="dark:text-text-muted text-text-light-muted mb-6 text-sm">{tour.description}</p>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl font-bold dark:text-white text-text-light">KES {tour.priceValue.toLocaleString()}</span>
                      {discount > 0 && (
                        <span className="text-sm dark:text-text-muted text-text-light-muted line-through">
                          KES {tour.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTour(tour);
                      }}
                      className="w-full dark:bg-white dark:text-dark dark:hover:bg-light bg-dark text-white hover:bg-text-light px-6 py-3 font-semibold uppercase tracking-wide transition-all duration-300"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
