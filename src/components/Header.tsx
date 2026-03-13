import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onNavigateHome?: (id: string) => void;
}

export default function Header({ onNavigateHome }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  const scrollToSection = (id: string) => {
    if (onNavigateHome) {
      onNavigateHome(id);
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = id;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark:bg-dark/95 dark:backdrop-blur-sm dark:border-b dark:border-white/10 bg-light/95 backdrop-blur-sm border-b border-black/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/image.png" alt="REMI ADVENTURES" className="h-16 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('tours')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors">
              TOURS & ADVENTURES
            </button>
            <button onClick={() => scrollToSection('gallery')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors">
              GALLERY
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors">
              TESTIMONIALS
            </button>
            <button onClick={() => scrollToSection('contact')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors">
              CONTACT
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 rounded-lg dark:bg-dark-lighter dark:text-text-primary bg-light-accent text-text-light transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden dark:text-text-primary text-text-light"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden dark:bg-dark-secondary dark:border-t dark:border-white/10 bg-light-secondary border-t border-black/10 transition-colors">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button onClick={() => scrollToSection('home')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors text-left text-lg">
              HOME
            </button>
            <button onClick={() => scrollToSection('tours')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors text-left text-lg">
              TOURS & ADVENTURES
            </button>
            <button onClick={() => scrollToSection('gallery')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors text-left text-lg">
              GALLERY
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors text-left text-lg">
              TESTIMONIALS
            </button>
            <button onClick={() => scrollToSection('contact')} className="dark:text-text-secondary dark:hover:text-white text-text-light-secondary hover:text-text-light transition-colors text-left text-lg">
              CONTACT
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
