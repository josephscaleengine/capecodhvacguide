import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, ArrowRight, MapPin, Phone, Mail, Shield } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";
import { articleEnhancements } from "@/data/articleEnhancements";
import ArticleSectionRenderer from "@/components/article/ArticleSectionRenderer";
import bluePacificLogo from "@/assets/blue-pacific-logo.png";

const BlogArticle = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = getArticleBySlug(articleSlug || "");

  if (!article) return <Navigate to="/resources" replace />;

  const relatedArticles = articles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== article.slug)
    .slice(0, 3);

  const Icon = getCategoryIcon(article.categorySlug);
  const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";
  const enhancements = articleEnhancements[article.slug];

  return (
    <>
      <Helmet>
        <title>{article.title} | Cape Cod HVAC Guide</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://capecodhvacguide.com/resources/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${article.title} | Cape Cod HVAC Guide`} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={`https://capecodhvacguide.com/resources/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":article.title,"description":article.description,"datePublished":article.publishedDate,"author":{"@type":"Organization","name":"Cape Cod HVAC Guide"},"publisher":{"@type":"Organization","name":"Cape Cod HVAC Guide","url":"https://capecodhvacguide.com"},"mainEntityOfPage":`https://capecodhvacguide.com/resources/${article.slug}`})}</script>
      </Helmet>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link to="/resources" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>
          </div>
          <div className="mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
              <Icon className="w-3.5 h-3.5" />
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
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

      {/* Article Content + Sidebar */}
      <section>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <ArticleSectionRenderer
                content={article.content}
                enhancements={enhancements?.afterSection}
              />
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0 py-10">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Need Help CTA */}
                <div className="p-6 rounded-xl bg-coral text-white shadow-md">
                  <h3 className="font-bold text-lg mb-2">Need Professional Help?</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    Blue Pacific Cape Cod offers trusted HVAC services throughout the Cape.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-full bg-white text-primary font-bold btn-pop text-sm"
                  >
                    Get Help <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Blue Pacific Card */}
                <div className="p-6 rounded-xl bg-navy text-white shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={bluePacificLogo} alt="Blue Pacific" className="w-10 h-10 rounded-full object-cover bg-white p-0.5" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-peach" />
                        <span className="font-bold text-sm">Blue Pacific Cape Cod</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Falmouth, MA</div>
                    <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> (508) 274-9939</div>
                    <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> BluePacificCapeCod@gmail.com</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Licensed & Insured", "20+ Years", "Emergency"].map((b) => (
                      <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-peach/30 text-peach font-medium">{b}</span>
                    ))}
                  </div>
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
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
};

export default BlogArticle;
