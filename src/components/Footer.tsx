import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark border-t border-gold/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="/image.png" alt="REMI ADVENTURES" className="h-20 w-auto mb-4" />
            <p className="text-text-secondary">
              Your gateway to unforgettable African adventures. Experience the wild beauty of Kenya and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-display text-xl font-bold mb-4 uppercase">
              Quick <span className="text-gold">Links</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-text-secondary hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#tours" className="text-text-secondary hover:text-gold transition-colors">
                  Tours & Adventures
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-text-secondary hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-text-secondary hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-display text-xl font-bold mb-4 uppercase">
              Contact <span className="text-gold">Us</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-secondary">
                <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+254727303239" className="hover:text-gold transition-colors">
                    +254 727 303 239
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <Mail size={20} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@remiadventures.com" className="hover:text-gold transition-colors">
                    info@remiadventures.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-display text-xl font-bold mb-4 uppercase">
              Follow <span className="text-gold">Us</span>
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-dark-lighter border border-gold/30 p-3 hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Facebook size={24} className="text-text-secondary group-hover:text-dark transition-colors" />
              </a>
              <a
                href="#"
                className="bg-dark-lighter border border-gold/30 p-3 hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Instagram size={24} className="text-text-secondary group-hover:text-dark transition-colors" />
              </a>
              <a
                href="#"
                className="bg-dark-lighter border border-gold/30 p-3 hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Twitter size={24} className="text-text-secondary group-hover:text-dark transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-text-muted">
            &copy; {new Date().getFullYear()} REMI ADVENTURES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
