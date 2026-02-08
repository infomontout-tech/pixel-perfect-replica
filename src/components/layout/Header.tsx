import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#beneficios', label: 'Beneficios' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a
            href="https://wa.me/523788856728?text=Hola,%20vi%20la%20promoci%C3%B3n%20de%20desarrollo%20en%207%20d%C3%ADas%20sin%20anticipo.%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20mi%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold tracking-tight"
          >
            montout<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/523788856728?text=Hola,%20vi%20la%20promoci%C3%B3n%20de%20desarrollo%20en%207%20d%C3%ADas%20sin%20anticipo.%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              Consulta Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/523788856728?text=Hola,%20vi%20la%20promoci%C3%B3n%20de%20desarrollo%20en%207%20d%C3%ADas%20sin%20anticipo.%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Consulta Gratis sin Compromiso
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
