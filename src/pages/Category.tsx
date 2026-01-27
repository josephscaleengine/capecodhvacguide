import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryBySlug, getArticlesByCategory, categories } from "@/data/articles";

const Category = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || "");
  const categoryArticles = getArticlesByCategory(categorySlug || "");

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/50 to-background" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Resources
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-6xl">{category.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {category.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {categoryArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {categoryArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="group flex flex-col p-7 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{article.emoji}</span>
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      {article.tag && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="font-bold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-border">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
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
            ) : (
              <div className="text-center py-12 bg-card rounded-xl border border-border max-w-2xl mx-auto">
                <p className="text-muted-foreground">
                  No articles found in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Browse Other Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/blog/category/${cat.slug}`}
                    className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all"
                  >
                    <span className="text-5xl mb-4">{cat.emoji}</span>
                    <span className="font-semibold text-foreground text-center">
                      {cat.name}
                    </span>
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

export default Category;