import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              All Resources
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{category.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {category.name}
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  {category.description}
                </p>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {categoryArticles.map((article) => (
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
                <h2 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
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

          {categoryArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found in this category yet. Check back soon!
              </p>
            </div>
          )}

          {/* Other Categories */}
          <section className="border-t border-border pt-12">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Browse Other Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/blog/category/${cat.slug}`}
                    className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <span className="text-3xl mb-2">{cat.emoji}</span>
                    <span className="font-medium text-foreground text-sm text-center">
                      {cat.name}
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
