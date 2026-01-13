import { Link } from "react-router-dom";
import { Thermometer } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground">Cape Cod</span>
              <span className="text-xs text-muted-foreground">HVAC Guide</span>
            </div>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/towns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Towns
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Help
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cape Cod HVAC Guide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
