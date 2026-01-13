import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { towns } from "@/data/towns";

const Towns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              HVAC Resources by Town
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every Cape Cod town has unique heating and cooling challenges. Select your 
              community to find specific HVAC guidance and local insights.
            </p>
          </div>

          {/* Towns Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {towns.map((town) => (
              <Link
                key={town.slug}
                to={`/towns/${town.slug}`}
                className="group block rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={town.image}
                    alt={`${town.name}, Cape Cod, Massachusetts`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium">
                    {town.articleCount} {town.articleCount === 1 ? "article" : "articles"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {town.name}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{town.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                    View Resources
                    <span className="text-lg">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Towns;
