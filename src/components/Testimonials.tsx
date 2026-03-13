import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  tour: string;
  rating: number;
  comment: string;
  date: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'United States',
    tour: 'Maasai Mara Safari',
    rating: 5,
    comment: 'An absolutely breathtaking experience! The guides were knowledgeable, the accommodations were luxurious, and seeing the Great Migration was a dream come true. REMI ADVENTURES exceeded all expectations!',
    date: '2024-02-15',
  },
  {
    id: 2,
    name: 'David Kamau',
    location: 'Kenya',
    tour: 'Mount Kenya Expedition',
    rating: 5,
    comment: 'As a local, I thought I knew Kenya well, but this expedition showed me a whole new perspective. The professional guides made the climb safe and enjoyable. Highly recommended!',
    date: '2024-01-20',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'United Kingdom',
    tour: 'Diani Beach Escape',
    rating: 5,
    comment: 'Perfect beach getaway! The resort was stunning, the water activities were amazing, and the sunset dhow cruise was magical. Will definitely return!',
    date: '2024-03-01',
  },
];

export default function Testimonials() {
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tour: '',
    rating: '5',
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*NEW TESTIMONIAL SUBMISSION*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Tour:* ${formData.tour}%0A` +
      `*Rating:* ${'⭐'.repeat(parseInt(formData.rating))} (${formData.rating}/5)%0A%0A` +
      `*Review:*%0A${formData.comment}%0A%0A` +
      `Thank you for your feedback!`;

    const whatsappUrl = `https://wa.me/254727303239?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      tour: '',
      rating: '5',
      comment: '',
    });
    setShowForm(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'fill-gold text-gold' : 'text-text-muted'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-secondary scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary font-bold mb-4">
            CLIENT <span className="text-gold">TESTIMONIALS</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Hear what our adventurers have to say about their experiences
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold uppercase tracking-wider transition-all duration-300"
          >
            {showForm ? 'HIDE FORM' : 'SHARE YOUR EXPERIENCE'}
          </button>
        </div>

        {showForm && (
          <div className="max-w-3xl mx-auto mb-16 bg-dark border border-gold/30 p-8">
            <h3 className="font-display text-2xl text-text-primary font-bold mb-6">
              Share Your <span className="text-gold">Feedback</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-secondary mb-2 uppercase text-sm tracking-wide">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark-secondary border border-gold/30 text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2 uppercase text-sm tracking-wide">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-secondary border border-gold/30 text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2 uppercase text-sm tracking-wide">Tour/Package *</label>
                  <input
                    type="text"
                    required
                    value={formData.tour}
                    onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                    className="w-full bg-dark-secondary border border-gold/30 text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Maasai Mara Safari"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2 uppercase text-sm tracking-wide">Rating *</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="w-full bg-dark-secondary border border-gold/30 text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="5">5 Stars - Excellent</option>
                    <option value="4">4 Stars - Very Good</option>
                    <option value="3">3 Stars - Good</option>
                    <option value="2">2 Stars - Fair</option>
                    <option value="1">1 Star - Poor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-text-secondary mb-2 uppercase text-sm tracking-wide">Your Review *</label>
                <textarea
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={5}
                  className="w-full bg-dark-secondary border border-gold/30 text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Share your experience with us..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-dark px-8 py-4 font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                SUBMIT REVIEW VIA WHATSAPP
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-dark border border-gold/20 p-6 hover:border-gold transition-all duration-300"
            >
              <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

              <p className="text-text-secondary mb-6 italic">"{testimonial.comment}"</p>

              <div className="border-t border-gold/20 pt-4">
                <p className="text-text-primary font-semibold">{testimonial.name}</p>
                <p className="text-text-muted text-sm">{testimonial.location}</p>
                <p className="text-gold text-sm mt-1">{testimonial.tour}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
