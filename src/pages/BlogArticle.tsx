import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
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
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Resources
              </Link>

              {/* Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{article.emoji}</span>
                <Link
                  to={`/blog/category/${article.categorySlug}`}
                  className="text-sm font-medium text-primary hover:underline uppercase tracking-wide"
                >
                  {article.category}
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {article.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                {article.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                {article.tag && (
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {article.tag}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-ul:my-4 prose-li:my-1">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </article>

              {/* CTA Section */}
              <div className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Professional HVAC Help?</h2>
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
                <section className="mt-16 pt-12 border-t border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-8">
                    Related Resources
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="group block p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{related.emoji}</span>
                          <span className="text-xs text-muted-foreground">
                            {related.readTime}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h3>
                        <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Browse Categories */}
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Browse by Topic
                </h2>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/blog/category/${category.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                    >
                      <span>{category.emoji}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;