import { useParams, Link, Navigate } from "react-router-dom";
import {
  Zap, Flame, Wind, Snowflake, Gauge, Fan, Thermometer,
  ClipboardCheck, AlertTriangle, ArrowLeft,
  ArrowRight, DollarSign, MapPin, Shield, Award, Phone, Mail
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Flame, Wind, Snowflake, Gauge, Fan, Thermometer,
  ClipboardCheck, AlertTriangle,
};

const bluePacificServices = [
  "heat-pump-installation-repair",
  "furnace-installation-repair",
  "emergency-heating-repair",
];

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(serviceSlug || "");

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Thermometer;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 5);
  const isBluePacificService = bluePacificServices.includes(service.slug);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-7 h-7 text-peach" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{service.name}</h1>
                <p className="text-white/70 max-w-xl">{service.shortDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">What is this service?</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                </div>

                <div className="p-6 rounded-xl bg-blush border border-coral/20">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-primary">Why it matters on Cape Cod</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.whyCapeCod}</p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-border">
                  <h2 className="text-2xl font-bold text-primary mb-5">Warning signs you need this service</h2>
                  <ul className="space-y-3">
                    {service.warningSigns.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-yellow-accent/40 border border-yellow-accent">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-primary">Typical Cost Range</h3>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{service.costRange}</p>
                  <p className="text-sm text-muted-foreground">Costs vary based on home size, system complexity, and location on Cape Cod.</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* CTA */}
                <div className="p-7 rounded-xl bg-coral text-white">
                  <h3 className="font-bold text-xl mb-3">
                    {isBluePacificService ? "Need This Service?" : "Looking for Help?"}
                  </h3>
                  <p className="text-white/80 mb-5 text-sm leading-relaxed">
                    {isBluePacificService
                      ? "Blue Pacific Cape Cod offers professional " + service.name.toLowerCase() + " throughout Cape Cod."
                      : "Contact a local HVAC professional for this service. Blue Pacific Cape Cod can help connect you with the right provider."}
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full bg-white text-primary font-bold btn-pop text-sm"
                  >
                    {isBluePacificService ? "Contact Blue Pacific" : "Get Help"} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Partner Info - only for BP services */}
                {isBluePacificService && (
                  <div className="p-6 rounded-xl bg-navy text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-5 h-5 text-peach" />
                      <span className="font-bold">Blue Pacific Cape Cod</span>
                    </div>
                    <div className="space-y-2 text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Falmouth, MA</div>
                      <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> (508) 274-9939</div>
                      <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> BluePacificCapeCod@gmail.com</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Licensed & Insured", "20+ Years", "Emergency"].map(b => (
                        <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">{b}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Services */}
                <div className="p-7 rounded-xl bg-white border border-border">
                  <h3 className="font-bold text-primary mb-5">Other Services</h3>
                  <div className="space-y-2">
                    {otherServices.map((svc) => {
                      const SvcIcon = iconMap[svc.icon] || Thermometer;
                      return (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-muted-foreground hover:text-accent hover:bg-blush transition-all"
                        >
                          <SvcIcon className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">{svc.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
