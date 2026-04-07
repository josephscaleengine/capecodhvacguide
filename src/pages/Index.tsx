import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  MapPin, BookOpen, ShieldCheck, ArrowRight, Zap, Flame, Wind, Snowflake,
  Gauge, Fan, Thermometer, ClipboardCheck, AlertTriangle,
  Phone, Mail, Shield, Clock, Award, ChevronRight, Home
} from "lucide-react";
import { articles } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";
import bluePacificLogo from "@/assets/blue-pacific-logo.png";

const HERO_IMAGE = "https://i.natgeofe.com/n/d5d9e147-d28e-41cb-a45a-e5ca637d9443/capecodbrantpointlightnantucketharbour.jpg";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Flame, Wind, Snowflake, Gauge, Fan, Thermometer, ClipboardCheck, AlertTriangle,
};

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);
  return { count, ref };
}

function StatCard({ value, prefix = "", suffix = "", label, chart }: {
  value: number; prefix?: string; suffix?: string; label: string; chart: React.ReactNode;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="p-6 rounded-xl bg-white shadow-sm border border-border card-hover">
      <div className="flex items-end justify-between mb-3">
        <p className="text-3xl font-bold text-primary">{prefix}{count.toLocaleString()}{suffix}</p>
        <div className="w-16 h-10">{chart}</div>
      </div>
      <p className="text-sm text-foreground leading-snug">{label}</p>
    </div>
  );
}

const BarChart = () => (
  <svg viewBox="0 0 60 36" className="w-full h-full">
    <rect x="4" y="20" width="10" height="16" rx="2" fill="hsl(201,39%,44%)" opacity="0.3" />
    <rect x="18" y="10" width="10" height="26" rx="2" fill="hsl(201,39%,44%)" opacity="0.6" />
    <rect x="32" y="4" width="10" height="32" rx="2" fill="hsl(201,39%,44%)" />
    <rect x="46" y="14" width="10" height="22" rx="2" fill="hsl(201,39%,44%)" opacity="0.5" />
  </svg>
);

const DonutChart = ({ pct }: { pct: number }) => {
  const r = 14, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 36 36" className="w-full h-full">
      <circle cx="18" cy="18" r={r} fill="none" stroke="hsl(210,20%,92%)" strokeWidth="5" />
      <circle cx="18" cy="18" r={r} fill="none" stroke="hsl(0,80%,75%)" strokeWidth="5"
        strokeDasharray={`${(pct / 100) * c} ${c}`} strokeDashoffset={c * 0.25} strokeLinecap="round" />
    </svg>
  );
};

const RangeBar = () => (
  <svg viewBox="0 0 60 20" className="w-full h-full">
    <rect x="4" y="8" width="52" height="4" rx="2" fill="hsl(210,20%,92%)" />
    <rect x="12" y="6" width="28" height="8" rx="3" fill="hsl(201,39%,44%)" opacity="0.7" />
  </svg>
);

const ProgressBar = ({ pct }: { pct: number }) => (
  <svg viewBox="0 0 60 12" className="w-full h-full">
    <rect x="2" y="2" width="56" height="8" rx="4" fill="hsl(210,20%,92%)" />
    <rect x="2" y="2" width={56 * pct / 100} height="8" rx="4" fill="hsl(49,96%,60%)" />
  </svg>
);

const featuredSlugs = [
  "cape-cod-heat-pump-switch",
  "salt-air-hvac-corrosion-cape-cod",
  "winterizing-cape-cod-vacation-home-hvac",
  "hvac-challenges-older-falmouth-homes",
  "average-hvac-costs-cape-cod-2026",
  "ductless-mini-splits-cape-cod",
];

const allTowns = [
  "Falmouth", "Mashpee", "Sandwich", "Bourne", "Osterville", "Hyannis",
  "Barnstable", "Yarmouth", "Dennis", "Brewster", "Harwich", "Chatham",
  "Orleans", "Eastham", "Wellfleet", "Truro", "Provincetown"
];

const topics = [
  "Seasonal Tips", "Emergency Guides", "Coastal Living", "Older Homes",
  "Heat Pumps", "Cost Guides", "Homeowner Guides", "Maintenance",
  "Energy Efficiency", "Vacation Homes"
];

const topicSlugs: Record<string, string> = {
  "Seasonal Tips": "seasonal",
  "Emergency Guides": "emergency",
  "Coastal Living": "coastal",
  "Older Homes": "older-homes",
  "Heat Pumps": "heat-pumps",
  "Cost Guides": "cost-guides",
  "Homeowner Guides": "homeowner-guides",
  "Maintenance": "maintenance",
  "Energy Efficiency": "energy-efficiency",
  "Vacation Homes": "vacation-homes",
};

const servicesList = [
  { name: "Heat Pump Installation & Repair", icon: "Zap", slug: "heat-pump-installation-repair" },
  { name: "Furnace Installation & Repair", icon: "Flame", slug: "furnace-installation-repair" },
  { name: "Ductless Mini-Split Systems", icon: "Wind", slug: "ductless-mini-split-systems" },
  { name: "Central Air Conditioning", icon: "Snowflake", slug: "central-air-conditioning" },
  { name: "Boiler Services", icon: "Gauge", slug: "boiler-services" },
  { name: "Duct Cleaning & Sealing", icon: "Fan", slug: "duct-cleaning-sealing" },
  { name: "Thermostat Installation", icon: "Thermometer", slug: "thermostat-installation" },
  { name: "Emergency Heating Repair", icon: "AlertTriangle", slug: "emergency-heating-repair" },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const allArticlesForFilter = articles;
  const filteredArticles = activeFilter === "All"
    ? featuredSlugs.map(slug => articles.find(a => a.slug === slug)).filter(Boolean) as typeof articles
    : allArticlesForFilter.filter(a => a.categorySlug === topicSlugs[activeFilter]);

  const displayArticles = filteredArticles.length > 0 ? filteredArticles.slice(0, 6) : [];

  const topicsWithArticles = topics.filter(topic => {
    const slug = topicSlugs[topic];
    return articles.some(a => a.categorySlug === slug);
  });

  return (
    <>
        {/* ===== HERO ===== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <img src={HERO_IMAGE} alt="Cape Cod coastline" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
                Your Local Cape Cod HVAC Resource
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-white">Expert Heating & Cooling Guidance</span>
                <br />
                <span className="text-peach">for Cape Cod Homeowners</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-xl mx-auto">
                Trusted tips, local insights, and professional resources to help you maintain your home comfort — from Falmouth to Provincetown.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link to="/resources" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold btn-pop">
                  Browse Resources <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#partner"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("partner")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-peach text-peach font-semibold hover:bg-peach/10 transition-colors"
                >
                  Need HVAC Service?
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { icon: MapPin, text: "Cape Cod Expertise" },
                  { icon: BookOpen, text: "Free Educational Guides" },
                  { icon: ShieldCheck, text: "Trusted Local Advice" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-white/60">
                    <item.icon className="w-4 h-4 text-peach" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== QUICK STATS ===== */}
        <section className="py-20 bg-blush">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard value={8500} prefix="$" label="Average heat pump installation cost on Cape Cod" chart={<BarChart />} />
              <StatCard value={38} suffix="%" label="Of Cape Cod homes still use oil heat" chart={<DonutChart pct={38} />} />
              <StatCard value={15} suffix=" yrs" label="Typical furnace lifespan (shorter near coast)" chart={<RangeBar />} />
              <StatCard value={70} suffix="%" label="Of homeowners switching to heat pumps by 2030" chart={<ProgressBar pct={70} />} />
            </div>
          </div>
        </section>

        {/* ===== FEATURED GUIDES + TOPIC FILTERS ===== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Featured HVAC Guides</h2>
            <p className="text-foreground mb-8 max-w-xl">
              In-depth guides on common heating and cooling challenges facing Cape Cod homeowners.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === "All"
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                All
              </button>
              {topicsWithArticles.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveFilter(topic)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === topic
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground hover:bg-primary/10"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {displayArticles.map((article, i) => {
                const CatIcon = getCategoryIcon(article.categorySlug);
                const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";
                const isLarge = i % 3 === 0;
                return (
                  <Link
                    key={article.slug}
                    to={`/resources/${article.slug}`}
                    className={`group block p-7 rounded-xl bg-white border border-border card-hover shadow-sm ${isLarge ? "md:row-span-2" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                        <CatIcon className="w-3.5 h-3.5" />
                        {article.category}
                      </span>
                    </div>
                    <h3 className={`font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}>
                      {article.title}
                    </h3>
                    <p className={`text-foreground leading-relaxed ${isLarge ? "line-clamp-4 mb-6" : "line-clamp-2 mb-4"}`}>
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== COMMON HVAC SERVICES (BLUSH) ===== */}
        <section className="py-20 bg-blush">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-3">Common HVAC Services</h2>
            <p className="text-foreground mb-10 text-left">Learn about heating and cooling services available on Cape Cod.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {servicesList.map((svc, i) => {
                const SvcIcon = serviceIcons[svc.icon] || Thermometer;
                const isCoralIcon = i % 2 === 1;
                return (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="flex items-center gap-4 py-4 px-5 rounded-xl bg-white border border-border shadow-sm card-hover group"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isCoralIcon ? "bg-coral/15" : "bg-accent/10"}`}>
                      <SvcIcon className={`w-5 h-5 ${isCoralIcon ? "text-coral" : "text-accent"}`} />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors flex-1">{svc.name}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== TOWNS ===== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">Serving All of Cape Cod</h2>
            <p className="text-foreground mb-10">Resources for every Cape Cod community</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {allTowns.map((town) => (
                <div
                  key={town}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border shadow-sm hover:bg-accent hover:text-white hover:border-accent transition-all cursor-default group"
                >
                  <Home className="w-3.5 h-3.5 text-accent group-hover:text-white flex-shrink-0" />
                  <span className="text-sm font-medium text-primary group-hover:text-white">{town}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PARTNER CARD ===== */}
        <section id="partner" className="py-16 bg-blush">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-navy text-white">
              <div className="flex items-center gap-4 mb-4">
                <img src={bluePacificLogo} alt="Blue Pacific Cape Cod" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/50 mb-0.5">Our Recommended Partner</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Professional HVAC Services</h2>
                </div>
              </div>
              <p className="text-white/70 mb-6 max-w-xl leading-relaxed">
                While we provide educational resources, sometimes you need hands-on help from a licensed professional. Blue Pacific Cape Cod offers trusted HVAC and heating services throughout the Cape.
              </p>
              <div className="flex flex-wrap gap-5 mb-8">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Award, text: "20+ Years Experience" },
                  { icon: AlertTriangle, text: "Emergency Services" },
                ].map((b) => (
                  <span key={b.text} className="flex items-center gap-2 text-sm text-white/60">
                    <b.icon className="w-4 h-4 text-peach" /> {b.text}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/50">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Falmouth, MA</span>
                <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> (508) 274-9939</span>
                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> BluePacificCapeCod@gmail.com</span>
              </div>
              <a
                href="https://bluepacificcapecod.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-coral text-white font-bold btn-pop"
              >
                Visit Blue Pacific Cape Cod <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
    </>
  );
};

export default Index;
