import { useParams, Link, Navigate } from "react-router-dom";
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
      {/* Hero */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">{article.description}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content — Section-Based Renderer */}
      <ArticleSectionRenderer
        content={article.content}
        enhancements={enhancements?.afterSection}
      />

      {/* Blue Pacific CTA Card */}
      <section className="py-16 bg-blush">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="p-8 md:p-10 rounded-xl bg-navy text-white text-center shadow-lg">
            <img src={bluePacificLogo} alt="Blue Pacific Cape Cod" className="w-16 h-16 rounded-full mx-auto mb-4 object-cover bg-white p-1" />
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-peach" />
              <h2 className="text-xl font-bold">Blue Pacific Cape Cod</h2>
            </div>
            <p className="text-white/60 text-sm mb-5 max-w-md mx-auto leading-relaxed">
              Trusted HVAC professionals serving homeowners throughout Cape Cod with licensed, insured service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-5">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Falmouth, MA</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> (508) 274-9939</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> BluePacificCapeCod@gmail.com</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Licensed & Insured", "20+ Years", "Emergency"].map((b) => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-peach/30 text-peach font-medium">{b}</span>
              ))}
            </div>
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-coral text-white font-bold btn-pop"
            >
              Visit Blue Pacific Cape Cod <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((r) => {
                const RIcon = getCategoryIcon(r.categorySlug);
                const rColor = categoryColors[r.categorySlug] || "bg-gray-100 text-gray-700";
                return (
                  <Link
                    key={r.slug}
                    to={`/resources/${r.slug}`}
                    className="group p-6 rounded-xl bg-white border border-border shadow-sm card-hover"
                  >
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${rColor}`}>
                      <RIcon className="w-3 h-3" />
                      {r.category}
                    </span>
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                    <span className="text-xs text-muted-foreground mt-3 block">{r.readTime}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogArticle;
