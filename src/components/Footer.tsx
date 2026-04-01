import { Link } from "react-router-dom";
import { Thermometer, Phone, Mail, MapPin } from "lucide-react";

const towns = [
  "Falmouth", "Mashpee", "Sandwich", "Bourne", "Osterville", "Hyannis",
  "Barnstable", "Yarmouth", "Dennis", "Brewster", "Harwich", "Chatham",
  "Orleans", "Eastham", "Wellfleet", "Truro", "Provincetown"
];

const categories = [
  "Seasonal Tips", "Emergency Guides", "Coastal Living",
  "Older Homes", "Heat Pumps", "Cost Guides",
  "Maintenance", "Energy Efficiency"
];

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Site Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Cape Cod HVAC Guide</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted resource for heating and cooling information, tips, and guidance for Cape Cod homeowners.
            </p>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors">Services</Link>
              <Link to="/resources" className="text-sm text-white/60 hover:text-white transition-colors">Resources</Link>
              <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">About</Link>
            </nav>
          </div>

          {/* Towns */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Towns We Cover</h3>
            <p className="text-sm text-white/60 leading-loose">
              {towns.join(" · ")}
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Resource Categories</h3>
            <p className="text-sm text-white/60 leading-loose">
              {categories.join(" · ")}
            </p>
          </div>
        </div>

        {/* Bottom — Blue Pacific Recommendation */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-white/40 mb-1">Professional services recommended by</p>
              <p className="font-bold text-white">Blue Pacific Cape Cod</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Falmouth, MA
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  (508) 274-9939
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  BluePacificCapeCod@gmail.com
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Cape Cod HVAC Guide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;