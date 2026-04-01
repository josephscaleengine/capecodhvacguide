import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTownBySlug, towns } from "@/data/towns";
import { getArticlesByTown, articles } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";

const TownDetail = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const town = getTownBySlug(townSlug || "");
  const townArticles = getArticlesByTown(townSlug || "");

  if (!town) return <Navigate to="/towns" replace />;

  const displayArticles = townArticles.length > 0 ? townArticles : articles.slice(0, 3);

  return (
    <>
        {/* Hero */}
        <section className="relative pt-28 pb-16 min-h-[400px] flex items-end overflow-hidden">
          <img src={town.image} alt={`${town.name}, Cape Cod`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
          <div className="container mx-auto px-4 relative z-10 pb-6">
            <Link to="/towns" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Towns
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-peach" />
              <span className="text-white/70 text-sm">Cape Cod, Massachusetts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{town.name} HVAC Guide</h1>
            <p className="text-lg text-white/70 max-w-xl">{town.description}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Articles */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-8">Resources for {town.name} Homeowners</h2>
                <div className="space-y-5">
                  {displayArticles.map((article) => {
                    const Icon = getCategoryIcon(article.categorySlug);
                    const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";
                    return (
                      <Link
                        key={article.slug}
                        to={`/resources/${article.slug}`}
                        className="group flex flex-col p-6 rounded-xl bg-white border border-border card-hover"
                      >
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3 ${colorClass}`}>
                          <Icon className="w-3.5 h-3.5" />
                          {article.category}
                        </span>
                        <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{article.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{article.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" /> {article.readTime}
                          </span>
                          <span className="text-accent font-medium text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="p-7 rounded-xl bg-coral text-white">
                  <h3 className="font-bold text-xl mb-3">Need HVAC Service in {town.name}?</h3>
                  <p className="text-white/80 mb-5 text-sm leading-relaxed">
                    Blue Pacific Cape Cod offers professional HVAC services in {town.name} and throughout Cape Cod.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full bg-white text-primary font-bold btn-pop text-sm"
                  >
                    Contact Blue Pacific <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-7 rounded-xl bg-blush border border-border">
                  <h3 className="font-bold text-primary mb-5">Other Towns</h3>
                  <div className="space-y-3">
                    {towns.filter((t) => t.slug !== town.slug).map((t) => (
                      <Link
                        key={t.slug}
                        to={`/towns/${t.slug}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-1"
                      >
                        <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
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