import { MapPin, Clock } from 'lucide-react';
import type { Tour } from '../types/tour';

interface ToursProps {
  onSelectTour: (tour: Tour) => void;
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'Maasai Mara Safari',
    location: 'Maasai Mara, Kenya',
    duration: '3 Days / 2 Nights',
    price: 'KES 45,000',
    priceValue: 45000,
    originalPrice: 55000,
    image: 'https://images.pexels.com/photos/5851190/pexels-photo-5851190.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Witness the Great Migration and the Big Five in their natural habitat. Experience the raw beauty of African wilderness.',
    highlights: ['Big Five sightings', 'Great Migration (seasonal)', 'Hot air balloon safari optional', 'Luxury tented camp', 'Professional naturalist guides'],
    included: ['Park entry fees', '2 nights accommodation', 'All meals', 'Game drives', 'Professional guide', 'Travel insurance'],
  },
  {
    id: 2,
    title: 'Mount Kenya Expedition',
    location: 'Mount Kenya, Kenya',
    duration: '5 Days / 4 Nights',
    price: 'KES 65,000',
    priceValue: 65000,
    originalPrice: 78000,
    image: 'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Summit Africa\'s second-highest peak with experienced mountain guides. Challenge yourself with breathtaking alpine views.',
    highlights: ['Point Lenana summit', 'Alpine scenery', 'Unique flora & fauna', 'Mountain huts', 'Sunrise views'],
    included: ['Climbing permits', 'Accommodation', 'All meals', 'Porter services', 'Mountain guide', 'Oxygen if needed'],
  },
  {
    id: 3,
    title: 'Diani Beach Escape',
    location: 'Diani Beach, Kenya',
    duration: '4 Days / 3 Nights',
    price: 'KES 38,000',
    priceValue: 38000,
    originalPrice: 48000,
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Relax on pristine white sand beaches along the Indian Ocean. Perfect for unwinding and adventure combined.',
    highlights: ['Beach resort stay', 'Water sports', 'Snorkeling & diving', 'Sunset dhow cruise', 'Spa treatments'],
    included: ['Beachfront resort', 'All meals', 'Water activities', 'Airport transfers', 'Beach equipment'],
  },
  {
    id: 4,
    title: 'Amboseli National Park',
    location: 'Amboseli, Kenya',
    duration: '2 Days / 1 Night',
    price: 'KES 32,000',
    priceValue: 32000,
    originalPrice: 42000,
    image: 'https://images.pexels.com/photos/12214913/pexels-photo-12214913.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience elephants roaming with Mount Kilimanjaro as the backdrop. Iconic African landscapes await.',
    highlights: ['Kilimanjaro views', 'Elephant herds', 'Bird watching', 'Cultural visits', 'Photography opportunities'],
    included: ['Park fees', '1 night lodge', 'All meals', 'Game drives', 'Maasai village visit'],
  },
  {
    id: 5,
    title: 'Lake Nakuru & Naivasha',
    location: 'Rift Valley, Kenya',
    duration: '3 Days / 2 Nights',
    price: 'KES 42,000',
    priceValue: 42000,
    originalPrice: 52000,
    image: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover flamingo-filled lakes and diverse wildlife in the Great Rift Valley. Nature at its most vibrant.',
    highlights: ['Flamingo spectacle', 'Rhino sanctuary', 'Boat rides', 'Hell\'s Gate biking', 'Geothermal features'],
    included: ['Park entry', '2 nights accommodation', 'Meals', 'Boat safari', 'Cycling equipment'],
  },
  {
    id: 6,
    title: 'Samburu Adventure',
    location: 'Samburu, Kenya',
    duration: '3 Days / 2 Nights',
    price: 'KES 52,000',
    priceValue: 52000,
    originalPrice: 63000,
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore the rugged beauty of Northern Kenya and its unique wildlife. Authentic safari experience.',
    highlights: ['Unique species', 'Ewaso Nyiro River', 'Samburu culture', 'Luxury camps', 'Desert wildlife'],
    included: ['All park fees', 'Luxury tented camp', 'Full board', 'Game drives', 'Cultural visit'],
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
