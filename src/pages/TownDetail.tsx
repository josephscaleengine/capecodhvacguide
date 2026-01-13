import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle } from "lucide-react";
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
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={town.image}
            alt={`${town.name}, Cape Cod, Massachusetts`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <Link
                to="/towns"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                All Towns
              </Link>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">Cape Cod, Massachusetts</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {town.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About {town.name} HVAC Needs
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {town.longDescription}
                </p>
              </section>

              {/* Challenges Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Common HVAC Challenges
                </h2>
                <ul className="space-y-3">
                  {town.hvacChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tips Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  HVAC Tips for {town.name} Homeowners
                </h2>
                <ul className="space-y-3">
                  {town.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Related Articles */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Related Resources
                </h2>
                <div className="space-y-4">
                  {displayArticles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="block p-4 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{article.emoji}</span>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="p-6 rounded-xl bg-primary text-primary-foreground">
                <h3 className="font-bold text-lg mb-2">
                  Need HVAC Service in {town.name}?
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Blue Pacific Cape Cod provides trusted HVAC and heating services 
                  throughout {town.name} and the surrounding area.
                </p>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Blue Pacific
                  </a>
                </Button>
              </div>

              {/* Other Towns */}
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-lg text-foreground mb-4">
                  Other Cape Cod Towns
                </h3>
                <div className="space-y-2">
                  {towns
                    .filter((t) => t.slug !== town.slug)
                    .slice(0, 5)
                    .map((t) => (
                      <Link
                        key={t.slug}
                        to={`/towns/${t.slug}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <MapPin className="w-4 h-4" />
                        {t.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TownDetail;
