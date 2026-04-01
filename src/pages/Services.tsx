import { Link } from "react-router-dom";
import {
  Zap, Flame, Wind, Snowflake, Gauge, Fan, Thermometer,
  ClipboardCheck, AlertTriangle, ArrowRight, Wrench
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Flame, Wind, Snowflake, Gauge, Fan, Thermometer,
  ClipboardCheck, AlertTriangle,
};

const Services = () => {
  return (
    <>
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-peach" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">HVAC Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HVAC Services on Cape Cod</h1>
            <p className="text-lg text-white/70 max-w-xl">
              Learn about common heating and cooling services and what to expect as a Cape Cod homeowner.
            </p>
          </div>
        </section>

        <section className="py-20 bg-blush">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => {
                const Icon = iconMap[svc.icon] || Thermometer;
                const isCoralIcon = i % 2 === 1;
                return (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="group p-7 rounded-xl bg-white border border-border card-hover shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${isCoralIcon ? "bg-coral/15" : "bg-accent/10"}`}>
                      <Icon className={`w-6 h-6 ${isCoralIcon ? "text-coral" : "text-accent"}`} />
                    </div>
                    <h2 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                      {svc.name}
                    </h2>
                    <p className="text-sm text-foreground mb-4 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
