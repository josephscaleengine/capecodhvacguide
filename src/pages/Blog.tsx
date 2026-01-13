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
        <section className="py-8 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.slug
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  <span>{category.emoji}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group flex flex-col p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{article.emoji}</span>
                      <span className="text-sm font-medium text-primary">
                        {article.category}
                      </span>
                    </div>
                    {article.tag && (
                      <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      {article.tag && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {article.tag}
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