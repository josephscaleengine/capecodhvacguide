import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, articles } from "@/data/articles";
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
    <div className="min-h-screen page-fade-in">
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

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
              <article className="flex-1 max-w-[720px]">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-5 pb-4 border-b border-border leading-tight">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl md:text-2xl font-semibold text-primary mt-6 mb-3 leading-tight">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => {
                      const text = String(children);
                      if (text.startsWith("*") && text.endsWith("*") && text.length > 10) {
                        return (
                          <div className="my-4 p-5 rounded-xl bg-yellow-accent/30 border border-yellow-accent/50 flex gap-3">
                            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-muted-foreground leading-relaxed text-base italic">{children}</p>
                          </div>
                        );
                      }
                      return (
                        <p className="text-foreground leading-[1.75] mb-6 text-base md:text-[17px]">
                          {children}
                        </p>
                      );
                    },
                    strong: ({ children }) => (
                      <strong className="text-foreground font-semibold block mt-5 mb-2">
                        {children}
                      </strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-4 ml-1 space-y-3">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-4 ml-5 space-y-3 list-decimal marker:text-accent marker:font-semibold">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="flex items-start gap-2.5 text-foreground leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span>{children}</span>
                      </li>
                    ),
                    em: ({ children }) => (
                      <em className="text-muted-foreground/80 italic">{children}</em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-coral pl-5 my-6 py-3 bg-coral/5 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    table: ({ children }) => (
                      <div className="my-8 overflow-hidden rounded-xl border border-border shadow-sm">
                        <table className="w-full text-sm">{children}</table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-primary text-white">{children}</thead>
                    ),
                    th: ({ children }) => (
                      <th className="text-left px-4 py-3 font-semibold text-sm">{children}</th>
                    ),
                    tr: ({ children }) => (
                      <tr className="even:bg-blush">{children}</tr>
                    ),
                    td: ({ children }) => (
                      <td className="px-4 py-3 text-foreground border-t border-border">{children}</td>
                    ),
                    hr: () => (
                      <hr className="my-10 border-t-2 border-border" />
                    ),
                  }}
                >
                  {article.content}
                </ReactMarkdown>

                {/* Article CTA Card */}
                <div className="mt-16 p-8 md:p-10 rounded-xl bg-white border border-border shadow-lg border-t-4 border-t-coral">
                  <h2 className="text-2xl font-bold text-primary mb-3 text-center">Need Professional HVAC Help?</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto text-center">
                    Blue Pacific Cape Cod offers trusted HVAC services throughout Cape Cod.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-coral text-white font-bold btn-pop"
                    >
                      Contact Blue Pacific <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0 space-y-8">
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
