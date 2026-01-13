import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/articles";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              HVAC Resources & Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth articles on heating, cooling, and HVAC maintenance for Cape Cod homeowners.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog/category/${category.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span>{category.emoji}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{article.emoji}</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  {article.tag && (
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {article.tag}
                    </span>
                  )}
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

export default Blog;
