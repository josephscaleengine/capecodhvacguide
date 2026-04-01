import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryBySlug, getArticlesByCategory, categories } from "@/data/articles";
import { getCategoryIcon, categoryColors } from "@/lib/categoryIcons";

const Category = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || "");
  const categoryArticles = getArticlesByCategory(categorySlug || "");

  if (!category) return <Navigate to="/resources" replace />;

  const Icon = getCategoryIcon(category.slug);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4">
            <Link to="/resources" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-peach" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{category.name}</h1>
                <p className="text-white/60">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {categoryArticles.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {categoryArticles.map((article) => {
                  const AIcon = getCategoryIcon(article.categorySlug);
                  const colorClass = categoryColors[article.categorySlug] || "bg-gray-100 text-gray-700";
                  return (
                    <Link
                      key={article.slug}
                      to={`/resources/${article.slug}`}
                      className="group flex flex-col p-6 rounded-xl bg-white border border-border card-hover"
                    >
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4 ${colorClass}`}>
                        <AIcon className="w-3.5 h-3.5" />
                        {article.category}
                      </span>
                      <h2 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" /> {article.readTime}
                        </span>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-blush rounded-xl max-w-xl mx-auto">
                <p className="text-muted-foreground">No articles in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Other Topics */}
        <section className="py-16 bg-blush">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary mb-8">Browse Other Topics</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((cat) => {
                  const CIcon = getCategoryIcon(cat.slug);
                  return (
                    <Link
                      key={cat.slug}
                      to={`/resources/category/${cat.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border text-muted-foreground hover:text-accent hover:border-accent/30 transition-all text-sm font-medium"
                    >
                      <CIcon className="w-4 h-4" />
                      {cat.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
