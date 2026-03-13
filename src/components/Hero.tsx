export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3714898/pexels-photo-3714898.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        <div className="absolute inset-0 dark:bg-gradient-dark bg-gradient-light"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-hero-lg xl:text-hero-xl dark:text-text-primary text-text-light font-bold mb-6 tracking-tight">
          IMMERSE YOURSELF IN
          <span className="block text-gold mt-2">ADVENTURE</span>
        </h1>
        <p className="dark:text-text-secondary text-text-light-secondary text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Experience the raw beauty of Africa's wilderness with expertly curated safaris and unforgettable journeys
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
