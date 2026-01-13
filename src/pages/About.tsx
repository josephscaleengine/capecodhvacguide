import { MapPin, Phone, Mail, Shield, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Cape Cod HVAC Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted resource for heating and cooling information, specifically 
              tailored for Cape Cod homeowners.
            </p>
          </div>

          {/* Mission Section */}
          <section className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Cape Cod HVAC Guide was created to help local homeowners navigate the unique 
              heating and cooling challenges that come with living on our beautiful peninsula. 
              From salt air corrosion to historic home renovations, we provide practical, 
              locally-relevant information you can trust.
            </p>
            <p className="text-muted-foreground">
              Whether you're a year-round resident or seasonal homeowner, maintaining your 
              HVAC system is crucial for comfort and protecting your investment. Our guides 
              cover everything from routine maintenance to emergency situations, always with 
              Cape Cod's unique conditions in mind.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Local Focus</h3>
                <p className="text-muted-foreground text-sm">
                  All our content is written specifically for Cape Cod's climate, 
                  construction styles, and unique environmental factors.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  We're here to educate and empower Cape Cod homeowners to make 
                  informed decisions about their heating and cooling systems.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Expert Advice</h3>
                <p className="text-muted-foreground text-sm">
                  Our resources are developed with input from local HVAC professionals 
                  who understand Cape Cod's specific challenges.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Services CTA */}
          <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Professional HVAC Service?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              While we provide educational resources, sometimes you need hands-on help 
              from a licensed professional. Blue Pacific Cape Cod offers trusted HVAC 
              and heating services throughout the Cape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          </section>

          {/* Contact Info */}
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or suggestions for topics we should cover? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bluepacificcapecod.com"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-5 h-5" />
                info@bluepacificcapecod.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
