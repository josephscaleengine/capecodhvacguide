import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/articles";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.categorySlug === activeCategory)
    : articles;

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
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Educational Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              HVAC Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance to help you understand and maintain your Cape Cod home's heating and cooling system.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveCategory(null)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === category.slug
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-sm"
                  }`}
                >
                  <span className="text-lg">{category.emoji}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
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
                  <h2 className="font-bold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      {article.tag && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{article.tag}</span>
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No articles found in this category. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;