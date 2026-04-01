import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, articles, categories } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";
import ReactMarkdown from "react-markdown";

const BlogArticle = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = getArticleBySlug(articleSlug || "");

  if (!article) return <Navigate to="/resources" replace />;

  const relatedArticles = articles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== article.slug)
    .slice(0, 3);

  const Icon = getCategoryIcon(article.categorySlug);
  const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-12 bg-navy">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/resources" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>

            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colorClass}`}>
              <Icon className="w-3.5 h-3.5" />
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl">{article.description}</p>

            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
              {/* Main Content */}
              <article className="flex-1 max-w-3xl">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-5 pb-4 border-b border-border leading-tight">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl md:text-2xl font-semibold text-primary mt-8 mb-3 leading-tight">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-relaxed mb-5 text-base md:text-[17px]">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-foreground font-semibold block mt-5 mb-2">
                        {children}
                      </strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-4 ml-5 space-y-2.5 list-disc marker:text-accent">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-4 ml-5 space-y-2.5 list-decimal marker:text-accent marker:font-semibold">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-muted-foreground leading-relaxed pl-1">
                        {children}
                      </li>
                    ),
                    em: ({ children }) => (
                      <em className="text-muted-foreground/80 italic">{children}</em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-accent pl-5 my-6 italic text-muted-foreground">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {article.content}
                </ReactMarkdown>

                {/* Article CTA */}
                <div className="mt-16 p-8 md:p-10 rounded-xl bg-coral text-white text-center">
                  <h2 className="text-2xl font-bold mb-3">Need Professional HVAC Help?</h2>
                  <p className="text-white/80 mb-6 max-w-md mx-auto">
                    Blue Pacific Cape Cod offers trusted HVAC services throughout Cape Cod.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-bold btn-pop"
                  >
                    Contact Blue Pacific <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0 space-y-8">
                {/* Blue Pacific CTA */}
                <div className="p-6 rounded-xl bg-navy text-white sticky top-24">
                  <h3 className="font-bold mb-3">Need HVAC Service?</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    Blue Pacific Cape Cod serves homeowners throughout Cape Cod.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full bg-coral text-white text-sm font-semibold btn-pop"
                  >
                    Get Help <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="p-6 rounded-xl bg-blush border border-border">
                    <h3 className="font-bold text-primary mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((r) => (
                        <Link
                          key={r.slug}
                          to={`/resources/${r.slug}`}
                          className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors leading-snug"
                        >
                          {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;