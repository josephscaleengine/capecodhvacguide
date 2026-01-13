import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, articles, categories } from "@/data/articles";
import ReactMarkdown from "react-markdown";

const BlogArticle = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = getArticleBySlug(articleSlug || "");

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Get related articles from same category
  const relatedArticles = articles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              All Resources
            </Link>

            {/* Article Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{article.emoji}</span>
                <Link
                  to={`/blog/category/${article.categorySlug}`}
                  className="text-sm font-medium text-primary hover:underline uppercase tracking-wide"
                >
                  {article.category}
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {article.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                {article.tag && (
                  <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {article.tag}
                  </span>
                )}
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </article>

            {/* CTA Section */}
            <div className="mt-12 p-8 rounded-xl bg-primary text-primary-foreground text-center">
              <h2 className="text-2xl font-bold mb-2">Need Professional HVAC Help?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Blue Pacific Cape Cod offers trusted HVAC and heating services throughout Cape Cod.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <a
                  href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Blue Pacific Cape Cod
                </a>
              </Button>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Related Resources
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group block p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">{related.emoji}</span>
                        <span className="text-xs text-muted-foreground">
                          {related.readTime}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Browse Categories */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Browse by Topic
              </h2>
              <div className="flex flex-wrap gap-3">
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
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
