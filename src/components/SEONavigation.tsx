import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

const SEONavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Results', id: 'results' },
    { label: 'Packages', id: 'packages' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-action text-action-foreground px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 text-xl font-bold text-primary hover:text-action transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-lg p-2"
              aria-label="Go to homepage"
            >
              <Search className="w-6 h-6" />
              <span>Hire Best SEO Services</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-text-secondary hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-action transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border shadow-lg">
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-text-secondary hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <Button 
                    variant="primary" 
                    size="default"
                    onClick={() => scrollToSection('contact')}
                    className="mt-4"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default SEONavigation;