import { useEffect, useState } from 'react';

const heroBackgrounds = [
  {
    image: '/Kenya-safari-guide.jpg',
  },
  {
    image: '/kenyan_walking_safari.1340x0_default_1-1.jpg',
  },
  {
    image: '/game-drive-vehicle-elephant-herd-kenya-safari-tour-.jpg',
  },
];

const heroSlides = [
  {
    title: 'Coastal Weekend Offer',
    subtitle: 'Beach stays + SGR transfers for easy, stress-free travel.',
    badge: 'Limited Offer',
    image: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Safari Game Drive',
    subtitle: 'Get close to wildlife with experienced local guides.',
    badge: 'Popular',
    image: 'https://images.pexels.com/photos/196427/pexels-photo-196427.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Lion Country Views',
    subtitle: 'Quiet moments with big cats and golden horizons.',
    badge: 'Wildlife',
    image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Elephants on the Move',
    subtitle: 'A front-row seat to Kenya’s iconic herds.',
    badge: 'Signature',
    image: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Giraffe Encounters',
    subtitle: 'Slow travel, big skies, and graceful wildlife.',
    badge: 'Nature',
    image: 'https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${heroBackgrounds[activeSlide % heroBackgrounds.length].image}")`,
        }}
      >
        <div className="absolute inset-0 dark:bg-gradient-dark/70 bg-gradient-light/60"></div>
      </div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-hero-lg xl:text-hero-xl dark:text-text-primary text-text-light font-bold mb-6 tracking-tight">
              ADVENTURES DESIGNED
              <span className="block text-gold mt-2">AROUND YOUR RHYTHM</span>
            </h1>
            <p className="dark:text-text-secondary text-text-light-secondary text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl mx-auto lg:mx-0">
              We build human-centered journeys that respect your pace, your comfort, and your curiosity. From ocean sunsets
              to city stories and island escapes, every moment is shaped to feel effortless and deeply personal.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              <span className="px-4 py-2 rounded-full dark:bg-dark-lighter bg-white/80 dark:text-text-primary text-text-light text-sm uppercase tracking-wide">
                Local Guides
              </span>
              <span className="px-4 py-2 rounded-full dark:bg-dark-lighter bg-white/80 dark:text-text-primary text-text-light text-sm uppercase tracking-wide">
                Flexible Plans
              </span>
              <span className="px-4 py-2 rounded-full dark:bg-dark-lighter bg-white/80 dark:text-text-primary text-text-light text-sm uppercase tracking-wide">
                Family Ready
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('tours')}
                className="bg-gold hover:bg-gold-light dark:text-dark text-white px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                BOOK NOW
              </button>
              <button
                onClick={() => scrollToSection('tours')}
                className="border-2 dark:border-gold border-text-light/70 dark:text-gold text-text-light dark:hover:bg-gold dark:hover:text-dark hover:bg-text-light hover:text-white px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-all duration-300"
              >
                EXPLORE PACKAGES
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden dark:border dark:border-white/10 border border-black/10 shadow-2xl">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 dark:bg-gradient-dark bg-gradient-light opacity-60"></div>
                    <div className="absolute top-4 left-4 bg-gold text-dark text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                      {slide.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 dark:bg-dark/80 bg-white/85 rounded-2xl p-4">
                      <p className="text-sm uppercase tracking-wide dark:text-text-muted text-text-light-muted mb-2">
                        Featured
                      </p>
                      <h3 className="font-display text-2xl dark:text-text-primary text-text-light font-bold">
                        {slide.title}
                      </h3>
                      <p className="text-sm dark:text-text-secondary text-text-light-secondary mt-2">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 w-10 rounded-full transition-all ${
                      index === activeSlide ? 'bg-gold' : 'dark:bg-white/30 bg-black/20'
                    }`}
                    aria-label={`Show ${slide.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
