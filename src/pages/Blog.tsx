import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.categorySlug === activeCategory)
    : articles;

  // Only show categories that have articles
  const categoriesWithArticles = categories.filter(cat =>
    articles.some(a => a.categorySlug === cat.slug)
  );

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-peach" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Educational Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HVAC Resources</h1>
            <p className="text-lg text-white/70 max-w-xl">
              Expert guidance to help you understand and maintain your Cape Cod home's heating and cooling system.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                {/* Mobile: horizontal scroll */}
                <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 -mx-4 px-4">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === null ? "bg-accent text-white" : "bg-blush text-muted-foreground border border-border"
                    }`}
                  >
                    All
                  </button>
                  {categoriesWithArticles.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === cat.slug ? "bg-accent text-white" : "bg-blush text-muted-foreground border border-border"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Desktop: sticky sidebar */}
                <div className="hidden lg:block sticky top-24 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Filter by Topic</h3>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === null ? "bg-accent text-white" : "text-muted-foreground hover:bg-blush"
                    }`}
                  >
                    All Articles
                  </button>
                  {categoriesWithArticles.map((cat) => {
                    const Icon = getCategoryIcon(cat.slug);
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`w-full text-left flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          activeCategory === cat.slug ? "bg-accent text-white" : "text-muted-foreground hover:bg-blush"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {cat.name}
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Articles Grid */}
              <div className="flex-1">
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => {
                    const Icon = getCategoryIcon(article.categorySlug);
                    const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";
                    return (
                      <Link
                        key={article.slug}
                        to={`/resources/${article.slug}`}
                        className="group flex flex-col p-6 rounded-xl bg-white border border-border card-hover"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                            <Icon className="w-3.5 h-3.5" />
                            {article.category}
                          </span>
                        </div>
                        <h2 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{article.readTime}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="text-center py-16 bg-blush rounded-xl">
                    <p className="text-muted-foreground">No articles found in this category yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
