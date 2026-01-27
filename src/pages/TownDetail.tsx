import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getTownBySlug, towns } from "@/data/towns";
import { getArticlesByTown, articles } from "@/data/articles";

const TownDetail = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const town = getTownBySlug(townSlug || "");
  const townArticles = getArticlesByTown(townSlug || "");

  if (!town) {
    return <Navigate to="/towns" replace />;
  }

  // Get some related articles if there aren't town-specific ones
  const displayArticles = townArticles.length > 0 
    ? townArticles 
    : articles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-[450px] flex items-end overflow-hidden">
          {/* Background Image */}
          <img
            src={town.image}
            alt={`${town.name}, Cape Cod, Massachusetts`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 pb-10">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary-foreground/90" />
              <span className="text-primary-foreground/90 text-sm font-medium">Cape Cod, Massachusetts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              {town.name} HVAC Guide
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              {town.description}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Articles */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Resources for {town.name} Homeowners
                </h2>
                
                <div className="space-y-5">
                  {displayArticles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{article.emoji}</span>
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                        {article.description}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <span className="text-primary font-medium text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {displayArticles.length === 0 && (
                  <div className="text-center py-16 bg-card rounded-xl border border-border">
                    <p className="text-muted-foreground mb-4">
                      No articles specifically for {town.name} yet. Check out our general resources!
                    </p>
                    <Link to="/blog" className="text-primary font-medium hover:underline">
                      Browse All Resources →
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* CTA Card */}
                <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
                  <h3 className="font-bold text-xl mb-4">
                    Need HVAC Service in {town.name}?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                    For professional HVAC services in {town.name} and throughout Cape Cod, 
                    Blue Pacific Cape Cod is here to help.
                  </p>
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                    size="lg"
                    asChild
                  >
                    <a
                      href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Contact Blue Pacific
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Button>
                </div>

                {/* Other Towns */}
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <h3 className="font-bold text-xl text-foreground mb-6">
                    Other Towns
                  </h3>
                  <div className="space-y-4">
                    {towns
                      .filter((t) => t.slug !== town.slug)
                      .map((t) => (
                        <Link
                          key={t.slug}
                          to={`/towns/${t.slug}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
                        >
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">{t.name}</span>
                        </Link>
                      ))}
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

export default TownDetail;