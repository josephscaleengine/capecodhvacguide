import { MapPin, BookOpen, Shield, Heart, Phone, Mail, ArrowRight, Award, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Cape Cod HVAC Guide</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Your trusted local resource for heating and cooling information, tips, and guidance — helping Cape Cod homeowners make informed decisions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <div className="space-y-5 text-foreground text-lg leading-relaxed">
                  <p>
                    Cape Cod presents unique challenges for homeowners — from historic properties with aging HVAC systems to coastal homes affected by salt air and harsh winters. We created this resource to help local homeowners navigate these challenges.
                  </p>
                  <p>
                    <strong className="text-foreground">We're not a company — we're a free resource for Cape Cod homeowners.</strong> Our goal is to provide reliable, locally-relevant heating and cooling information that empowers you to maintain your home and know when professional help is needed.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: MapPin, title: "Local Focus", desc: "Cape Cod-specific content" },
                  { icon: BookOpen, title: "Educational", desc: "Not salesy or pushy" },
                  { icon: Shield, title: "Trusted", desc: "Backed by local pros" },
                  { icon: Heart, title: "Free", desc: "Always accessible" },
                ].map((item) => (
                  <div key={item.title} className="p-7 rounded-xl bg-white border border-border text-center card-hover">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="py-16 bg-blush">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-navy text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional HVAC Services</h2>
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

        {/* Browse */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Explore Our Resources</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Browse our library of Cape Cod-specific HVAC guides, tips, and maintenance advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/resources" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold btn-pop">
                Browse Resources <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
