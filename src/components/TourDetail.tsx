import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Check, Heart } from 'lucide-react';
import BookingModal from './BookingModal';
import QuoteModal from './QuoteModal';
import type { Tour } from '../types/tour';

interface TourDetailProps {
  tour: Tour;
  onBack: () => void;
}

export default function TourDetail({ tour, onBack }: TourDetailProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = Math.round(((tour.originalPrice - tour.priceValue) / tour.originalPrice) * 100);

  return (
    <>
      <section className="py-12 sm:py-16 dark:bg-dark-secondary bg-light-secondary transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 dark:text-white text-text-light dark:hover:text-text-secondary hover:text-text-light-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            Back to tours
          </button>

          <div className="mt-6 dark:bg-dark-secondary bg-light-secondary rounded-lg shadow-2xl dark:border dark:border-white/10 border border-black/10 overflow-hidden">
            <div className="relative">
              <img src={tour.image} alt={tour.title} className="w-full h-72 sm:h-96 object-cover" />

              <div className="absolute top-4 left-4 flex gap-2">
                {discount > 0 && (
                  <div className="dark:bg-white dark:text-dark bg-dark text-white px-4 py-2 rounded-lg font-bold">
                    SAVE {discount}%
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-display text-3xl sm:text-4xl dark:text-text-primary text-text-light font-bold">
                  {tour.title}
                </h2>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-lg transition-colors ${
                    isFavorite
                      ? 'dark:bg-white dark:text-dark bg-dark text-white'
                      : 'dark:bg-dark-lighter dark:text-white bg-light-accent text-text-light'
                  }`}
                >
                  <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 dark:text-text-secondary text-text-light-secondary">
                  <MapPin size={20} className="dark:text-white text-text-light" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2 dark:text-text-secondary text-text-light-secondary">
                  <Clock size={20} className="dark:text-white text-text-light" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              <p className="dark:text-text-secondary text-text-light-secondary mb-8 leading-relaxed">
                {tour.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-display text-2xl dark:text-white text-text-light font-bold mb-4">
                    Experience Highlights
                  </h3>
                  <ul className="space-y-3">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="dark:text-white text-text-light flex-shrink-0 mt-1" />
                        <span className="dark:text-text-secondary text-text-light-secondary">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-2xl dark:text-white text-text-light font-bold mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="dark:text-white text-text-light flex-shrink-0 mt-1" />
                        <span className="dark:text-text-secondary text-text-light-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dark:bg-dark-lighter bg-light-accent rounded-lg p-6 mb-8">
                <h3 className="font-display text-2xl dark:text-white text-text-light font-bold mb-6">
                  Pricing Breakdown
                </h3>

                <div className="space-y-4">
                  {discount > 0 && (
                    <div className="flex justify-between items-center pb-4 border-b dark:border-white/10 border-black/10">
                      <span className="dark:text-text-secondary text-text-light-secondary">Original Price (per person)</span>
                      <span className="dark:text-text-muted text-text-light-muted line-through">KES {tour.originalPrice.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pb-4 border-b dark:border-white/10 border-black/10">
                    <span className="dark:text-text-secondary text-text-light-secondary">Current Price (per person)</span>
                    <span className="text-2xl font-bold dark:text-white text-text-light">KES {tour.priceValue.toLocaleString()}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center text-lg">
                      <span className="dark:text-white text-text-light font-semibold">You Save</span>
                      <span className="dark:text-white text-text-light font-bold">
                        KES {(tour.originalPrice - tour.priceValue).toLocaleString()} ({discount}%)
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 dark:bg-dark bg-white rounded-lg p-4">
                  <p className="text-sm dark:text-text-secondary text-text-light-secondary mb-3">
                    Payment Options:
                  </p>
                  <ul className="space-y-2 text-sm dark:text-text-secondary text-text-light-secondary">
                    <li className="flex justify-between">
                      <span>30% Deposit to Secure Booking:</span>
                      <span className="dark:text-white text-text-light font-semibold">KES {Math.round(tour.priceValue * 0.3).toLocaleString()}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Balance Due Before Tour:</span>
                      <span className="dark:text-white text-text-light font-semibold">KES {Math.round(tour.priceValue * 0.7).toLocaleString()}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex-1 dark:bg-white dark:text-dark dark:hover:bg-light bg-dark text-white hover:bg-text-light px-8 py-4 font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  BOOK NOW
                </button>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="flex-1 dark:border dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark border border-text-light text-text-light hover:bg-text-light hover:text-white px-8 py-4 font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  GET QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isBookingModalOpen && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          tour={{ title: tour.title, price: tour.price }}
        />
      )}

      {isQuoteModalOpen && (
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          tour={{ title: tour.title, price: tour.price }}
        />
      )}
    </>
  );
}
