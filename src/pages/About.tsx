import { MapPin, Phone, Shield, BookOpen, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/50 to-background" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About Cape Cod HVAC Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted local resource for heating and cooling information, tips, and guidance—helping Cape Cod homeowners make informed decisions about their home's HVAC systems.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              {/* Left - Mission Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Mission</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Cape Cod presents unique challenges for homeowners—from historic properties 
                    with aging HVAC systems to coastal homes affected by salt air and harsh winters. 
                    We created this resource to help local homeowners navigate these challenges.
                  </p>
                  <p>
                    Our goal is simple: provide free, reliable, and locally-relevant heating and 
                    cooling information that empowers Cape Cod homeowners to maintain their homes 
                    and know when professional help is needed.
                  </p>
                </div>
              </div>

              {/* Right - Value Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Local Focus</h3>
                  <p className="text-muted-foreground">Cape Cod-specific content</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Educational</h3>
                  <p className="text-muted-foreground">Not salesy or pushy</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Trusted</h3>
                  <p className="text-muted-foreground">Backed by local pros</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Free</h3>
                  <p className="text-muted-foreground">Always accessible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Services CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 hidden md:flex">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Professional HVAC Services
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    While we provide educational resources, sometimes you need hands-on help 
                    from a licensed professional. Blue Pacific Cape Cod offers trusted HVAC 
                    and heating services throughout the Cape.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-center gap-2 text-primary-foreground/90">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="text-sm">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground/90">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="text-sm">Local Cape Cod Experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground/90">
                      <Phone className="w-5 h-5 text-accent" />
                      <span className="text-sm">Emergency Services</span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
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
              </div>
            </div>
          </div>
        </section>

        {/* Explore Resources */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Explore Our Resources</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Browse our library of Cape Cod-specific HVAC guides, tips, and maintenance advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild size="lg" className="px-8 font-semibold">
                <Link to="/blog">Browse Resources</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 font-semibold">
                <Link to="/towns">Find Your Town</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;