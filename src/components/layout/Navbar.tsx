
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary-700">
              Connectio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Nos services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Nous contacter
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <a 
              href="#" 
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos services
            </a>
            <a 
              href="#about" 
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nous contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
