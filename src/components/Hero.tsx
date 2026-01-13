import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional HVAC technician servicing heating equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-sm text-primary-foreground/90">Your Local Cape Cod HVAC Resource</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Expert HVAC & Heating Guidance for{" "}
          <span className="text-accent">Cape Cod</span> Homeowners
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Trusted tips, local insights, and professional resources to help you maintain 
          your home&apos;s heating and cooling—from Falmouth to Provincetown.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            asChild
          >
            <a href="#resources">
              Browse Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
            asChild
          >
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Need HVAC Service?
            </a>
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: "🎯", title: "Local Focus", subtitle: "Cape Cod expertise" },
            { icon: "📚", title: "Free Resources", subtitle: "Educational guides" },
            { icon: "✓", title: "Trusted Advice", subtitle: "From local pros" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/10 backdrop-blur-sm border border-primary-foreground/10"
            >
              <span className="text-2xl">{feature.icon}</span>
              <div className="text-left">
                <p className="font-semibold text-primary-foreground text-sm">{feature.title}</p>
                <p className="text-xs text-primary-foreground/70">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
