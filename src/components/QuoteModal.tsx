import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    title: string;
    price: string;
  };
}

export default function QuoteModal({ isOpen, onClose, tour }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1',
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*QUOTE REQUEST*%0A%0A` +
      `*Tour:* ${tour.title}%0A` +
      `*Base Price:* ${tour.price}%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Preferred Date: ${formData.date}%0A` +
      `Number of Guests: ${formData.guests}%0A%0A` +
      `${formData.additionalInfo ? `*Additional Information:* ${formData.additionalInfo}%0A%0A` : ''}` +
      `Please provide a detailed quote for this tour.`;

    const whatsappUrl = `https://wa.me/254727303239?text=${message}`;
    window.open(whatsappUrl, '_blank');

    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '1',
      additionalInfo: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 dark:bg-black/80 dark:backdrop-blur-sm bg-black/40 backdrop-blur-sm transition-colors duration-300">
      <div className="dark:bg-dark-secondary dark:border-white/10 bg-white border border-black/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300">
        <div className="sticky top-0 dark:bg-dark-secondary dark:border-b-white/10 bg-white border-b border-black/10 p-6 flex justify-between items-center transition-colors duration-300">
          <h3 className="font-display text-2xl md:text-3xl dark:text-text-primary text-text-light font-bold">
            REQUEST <span className="dark:text-white text-text-light">QUOTE</span>
          </h3>
          <button onClick={onClose} className="dark:text-text-primary dark:hover:text-white text-text-light hover:text-text-light-secondary transition-colors">
            <X size={28} />
          </button>
        </div>

        <div className="p-6">
          <p className="dark:text-text-secondary text-text-light-secondary mb-6">
            Get a personalized quote for <span className="dark:text-white text-text-light font-semibold">{tour.title}</span>. We'll provide detailed pricing based on your requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block dark:text-text-secondary text-text-light-secondary mb-2 uppercase text-sm tracking-wide">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full dark:bg-dark dark:border-white/20 dark:text-text-primary dark:focus:border-white bg-light-secondary border border-black/10 text-text-light px-4 py-3 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block dark:text-text-secondary text-text-light-secondary mb-2 uppercase text-sm tracking-wide">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full dark:bg-dark dark:border-white/20 dark:text-text-primary dark:focus:border-white bg-light-secondary border border-black/10 text-text-light px-4 py-3 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block dark:text-text-secondary text-text-light-secondary mb-2 uppercase text-sm tracking-wide">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full dark:bg-dark dark:border-white/20 dark:text-text-primary dark:focus:border-white bg-light-secondary border border-black/10 text-text-light px-4 py-3 focus:outline-none transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label className="block dark:text-text-secondary text-text-light-secondary mb-2 uppercase text-sm tracking-wide">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full dark:bg-dark dark:border-white/20 dark:text-text-primary dark:focus:border-white bg-light-secondary border border-black/10 text-text-light px-4 py-3 focus:outline-none transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block dark:text-text-secondary text-text-light-secondary mb-2 uppercase text-sm tracking-wide">Number of Guests *</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full dark:bg-dark dark:border-white/20 dark:text-text-primary dark:focus:border-white bg-light-secondary border border-black/10 text-text-light px-4 py-3 focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block dark:text-text-secondary text-text-light-secondary mb-2 uppercase text-sm tracking-wide">Additional Information</label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows={4}
                className="w-full dark:bg-dark dark:border-white/20 dark:text-text-primary dark:focus:border-white bg-light-secondary border border-black/10 text-text-light px-4 py-3 focus:outline-none transition-colors resize-none"
                placeholder="Any specific requirements, upgrades, or questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full dark:bg-white dark:text-dark dark:hover:bg-light bg-dark text-white hover:bg-text-light px-8 py-4 font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              REQUEST QUOTE VIA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
