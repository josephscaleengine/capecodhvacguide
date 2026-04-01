import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, BookOpen, ShieldCheck, ArrowRight, Zap, Flame, Wind, Snowflake,
  Gauge, Fan, Thermometer, ClipboardCheck, AlertTriangle,
  Phone, Mail, Shield, Clock, Award, ChevronRight, Home
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";

const HERO_IMAGE = "https://www.travelandleisure.com/thmb/KtefJySFbmQfmRpT5OvZWAiG17w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/provincetown-massachusetts-cape-cod_CAPECOD0522-d356840600934ea38b73111119f8957d.jpg";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Flame, Wind, Snowflake, Gauge, Fan, Thermometer, ClipboardCheck, AlertTriangle,
};

// --- Count-up Hook ---
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

// --- Stat Card ---
function StatCard({ value, prefix = "", suffix = "", label, chart }: {
  value: number; prefix?: string; suffix?: string; label: string; chart: React.ReactNode;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="p-6 rounded-xl bg-white shadow-sm border border-border card-hover overflow-visible">
      <div className="flex items-end justify-between mb-3">
        <p className="text-3xl font-bold text-primary">
          {prefix}{count.toLocaleString()}{suffix}
        </p>
        <div className="w-16 h-10">{chart}</div>
      </div>
      <p className="text-sm text-muted-foreground leading-snug">{label}</p>
    </div>
  );
}

// --- Mini Charts ---
const BarChart = () => (
  <svg viewBox="0 0 60 36" className="w-full h-full">
    <rect x="4" y="20" width="10" height="16" rx="2" fill="hsl(201,39%,44%)" opacity="0.3" />
    <rect x="18" y="10" width="10" height="26" rx="2" fill="hsl(201,39%,44%)" opacity="0.6" />
    <rect x="32" y="4" width="10" height="32" rx="2" fill="hsl(201,39%,44%)" />
    <rect x="46" y="14" width="10" height="22" rx="2" fill="hsl(201,39%,44%)" opacity="0.5" />
  </svg>
);

const DonutChart = ({ pct }: { pct: number }) => {
  const r = 14;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 36 36" className="w-full h-full">
      <circle cx="18" cy="18" r={r} fill="none" stroke="hsl(210,20%,92%)" strokeWidth="5" />
      <circle cx="18" cy="18" r={r} fill="none" stroke="hsl(0,76%,72%)" strokeWidth="5"
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

// --- Featured articles ---
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
  const featured = featuredSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles;

  const displayFeatured = featured.length >= 4 ? featured : articles.slice(0, 6);

  // Check which topics actually have articles
  const topicsWithArticles = topics.filter(topic => {
    const slug = topicSlugs[topic];
    return articles.some(a => a.categorySlug === slug);
  });

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      <main>
        {/* ===== SECTION 1: HERO ===== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <img src={HERO_IMAGE} alt="Cape Cod coastline" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
                Your Local Cape Cod HVAC Resource
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-white">Expert Heating & Cooling Guidance</span>
                <br />
                <span className="text-peach">for Cape Cod Homeowners</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-xl">
                Trusted tips, local insights, and professional resources to help you maintain your home comfort — from Falmouth to Provincetown.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold btn-pop"
                >
                  Browse Resources <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-peach text-peach font-semibold hover:bg-peach/10 transition-colors"
                >
                  Need HVAC Service?
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
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

        {/* ===== SECTION 2: QUICK STATS ===== */}
        <section className="py-20 bg-blush overflow-visible">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-visible">
              <StatCard value={8500} prefix="$" label="Average heat pump installation cost on Cape Cod" chart={<BarChart />} />
              <StatCard value={38} suffix="%" label="Of Cape Cod homes still use oil heat" chart={<DonutChart pct={38} />} />
              <StatCard value={15} suffix=" yrs" label="Typical furnace lifespan (shorter near coast)" chart={<RangeBar />} />
              <StatCard value={70} suffix="%" label="Of homeowners switching to heat pumps by 2030" chart={<ProgressBar pct={70} />} />
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: FEATURED GUIDES ===== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Featured HVAC Guides</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              In-depth guides on common heating and cooling challenges facing Cape Cod homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {displayFeatured.map((article, i) => {
                const Icon = getCategoryIcon(article.categorySlug);
                const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";
                const isLarge = i % 3 === 0;
                return (
                  <Link
                    key={article.slug}
                    to={`/resources/${article.slug}`}
                    className={`group block p-7 rounded-xl bg-white border border-border card-hover ${isLarge ? "md:row-span-2" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {article.category}
                      </span>
                    </div>
                    <h3 className={`font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}>
                      {article.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${isLarge ? "line-clamp-4 mb-6" : "line-clamp-2 mb-4"}`}>
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

        {/* ===== SECTION 4: BROWSE BY TOPIC (NAVY) ===== */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Browse by Topic</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {topicsWithArticles.map((topic) => (
                <Link
                  key={topic}
                  to={`/resources/category/${topicSlugs[topic]}`}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/40 transition-all"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: COMMON SERVICES (BLUSH) ===== */}
        <section className="py-20 bg-blush">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-3">Common HVAC Services</h2>
            <p className="text-muted-foreground mb-10">Learn about heating and cooling services available on Cape Cod.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {servicesList.map((svc) => {
                const Icon = serviceIcons[svc.icon] || Thermometer;
                return (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="flex items-center gap-4 py-4 px-5 rounded-xl bg-white border border-border hover:bg-blush hover:border-coral/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors flex-1">{svc.name}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-accent transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: CTA BANNER (CORAL) ===== */}
        <section className="py-16 bg-coral">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Need a Licensed HVAC Professional?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Professional services provided by Blue Pacific Cape Cod.
            </p>
            <a
              href="https://bluepacificcapecod.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-bold btn-pop"
            >
              Visit Blue Pacific Cape Cod <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ===== SECTION 7: TOWNS ===== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">Serving All of Cape Cod</h2>
            <p className="text-muted-foreground mb-10">Resources for every Cape Cod community</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {allTowns.map((town) => (
                <div
                  key={town}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-border shadow-sm hover:bg-accent hover:text-white hover:border-accent transition-all cursor-default group"
                >
                  <Home className="w-4 h-4 text-accent group-hover:text-white flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground group-hover:text-white">{town}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: PARTNER (CORAL/ORANGE BG) ===== */}
        <section className="py-20 bg-coral">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-3 text-center">Our Recommended Partner</p>
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Blue Pacific Cape Cod</h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto leading-relaxed text-center">
                Licensed, insured, and serving Cape Cod since 2001 — they're the team we trust and refer our readers to.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <span className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4" /> Falmouth, MA
                </span>
                <span className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4" /> (508) 274-9939
                </span>
                <span className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4" /> BluePacificCapeCod@gmail.com
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Award, text: "20+ Years Experience" },
                  { icon: AlertTriangle, text: "Emergency Services" },
                ].map((badge) => (
                  <span key={badge.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                    <badge.icon className="w-4 h-4" />
                    {badge.text}
                  </span>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://bluepacificcapecod.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-bold btn-pop"
                >
                  Visit Blue Pacific Cape Cod <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
