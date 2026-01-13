import { Link } from "react-router-dom";
import { categories } from "@/data/articles";

const TopicsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Topic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the information you need, organized by common HVAC and heating concerns.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((topic) => (
            <Link
              key={topic.slug}
              to={`/blog/category/${topic.slug}`}
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-4xl mb-3">{topic.emoji}</span>
              <h3 className="font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                {topic.name}
              </h3>
              <span className="mt-3 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
