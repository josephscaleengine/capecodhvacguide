import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { towns } from "@/data/towns";

const Towns = () => {
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Local Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              HVAC Resources by Town
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every Cape Cod community has unique heating and cooling considerations. Find guidance specific to your area.
            </p>
          </div>
        </section>

        {/* Towns Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {towns.map((town) => (
                <Link
                  key={town.slug}
                  to={`/towns/${town.slug}`}
                  className="group relative block rounded-2xl overflow-hidden h-72 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={town.image}
                    alt={`${town.name}, Cape Cod, Massachusetts`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary-foreground/90" />
                      <span className="text-primary-foreground/90 text-sm font-medium">
                        {town.articleCount} {town.articleCount === 1 ? "article" : "articles"}
                      </span>
                    </div>
                    <h2 className="font-bold text-2xl md:text-3xl text-primary-foreground mb-2">
                      {town.name}
                    </h2>
                    <p className="text-primary-foreground/90 line-clamp-2 leading-relaxed">
                      {town.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Towns;