import { Link } from "react-router-dom";
import { Thermometer } from "lucide-react";
import { towns as townData } from "@/data/towns";

const towns = townData.map(t => ({ name: t.name, slug: t.slug }));

const categories = [
  { name: "Seasonal Tips", slug: "seasonal" },
  { name: "Emergency Guides", slug: "emergency" },
  { name: "Coastal Living", slug: "coastal" },
  { name: "Older Homes", slug: "older-homes" },
  { name: "Heat Pumps", slug: "heat-pumps" },
  { name: "Cost Guides", slug: "cost-guides" },
  { name: "Maintenance", slug: "maintenance" },
  { name: "Energy Efficiency", slug: "energy-efficiency" },
];

const categories = [
  { name: "Seasonal Tips", slug: "seasonal" },
  { name: "Emergency Guides", slug: "emergency" },
  { name: "Coastal Living", slug: "coastal" },
  { name: "Older Homes", slug: "older-homes" },
  { name: "Heat Pumps", slug: "heat-pumps" },
  { name: "Cost Guides", slug: "cost-guides" },
  { name: "Maintenance", slug: "maintenance" },
  { name: "Energy Efficiency", slug: "energy-efficiency" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Site Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Cape Cod HVAC Guide</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your trusted resource for heating and cooling information, tips, and guidance for Cape Cod homeowners.
            </p>
            <p className="text-white/40 text-sm">Serving Cape Cod, Massachusetts</p>
          </div>

          {/* Column 2: Towns */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Towns We Cover</h3>
            <p className="text-sm text-white/50 leading-loose">
              {towns.map((t, i) => (
                <span key={t.slug}>
                  <Link to={`/towns/${t.slug}`} className="hover:text-white transition-colors">{t.name}</Link>
                  {i < towns.length - 1 && " · "}
                </span>
              ))}
            </p>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Resources</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/resources/category/${cat.slug}`}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="text-sm text-white/40">Professional services recommended by <strong className="text-white/60">Blue Pacific Cape Cod</strong></span>
              <span className="text-sm text-white/40">(508) 274-9939 · BluePacificCapeCod@gmail.com</span>
            </div>
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} Cape Cod HVAC Guide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
