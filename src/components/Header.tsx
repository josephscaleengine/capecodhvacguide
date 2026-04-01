import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Thermometer } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-sm leading-tight">
              Cape Cod<br />
              <span className="text-white/70 text-xs font-medium">HVAC Guide</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-coral rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full bg-coral text-white text-sm font-semibold btn-pop"
            >
              Get Professional Help
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-md ${
                    isActive(link.href)
                      ? "text-white bg-white/10 border-l-2 border-coral"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-4 text-center px-5 py-2.5 rounded-full bg-coral text-white text-sm font-semibold"
              >
                Get Professional Help
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
