import { Shield, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: MapPin, label: "Local Cape Cod Experts" },
  { icon: Clock, label: "Emergency Services" },
];

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Need Professional HVAC Help?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          While we provide educational resources, sometimes you need a licensed professional. 
          Blue Pacific Cape Cod offers trusted HVAC and heating services throughout the Cape.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 text-primary-foreground/90"
            >
              <feature.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
          asChild
        >
          <a
            href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Blue Pacific Cape Cod
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
