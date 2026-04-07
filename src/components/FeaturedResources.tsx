import { Link } from "react-router-dom";
import ResourceCard from "./ResourceCard";
import { articles } from "@/data/articles";

const featuredArticles = articles.slice(0, 4);

const FeaturedResources = () => {
  return (
    <section id="resources" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth guides on common HVAC and heating challenges facing Cape Cod homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.slug} to={`/resources/${article.slug}`}>
              <ResourceCard
                emoji={article.emoji}
                category={article.category}
                title={article.title}
                description={article.description}
                readTime={article.readTime}
                tag={article.tag}
              />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Resources
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
