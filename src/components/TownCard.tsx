import { Link } from "react-router-dom";

interface TownCardProps {
  name: string;
  description: string;
  image: string;
  articleCount: number;
  slug: string;
}

const TownCard = ({ name, description, image, articleCount, slug }: TownCardProps) => {
  return (
    <Link
      to={`/towns/${slug}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${name}, Cape Cod, Massachusetts`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium">
          {articleCount} {articleCount === 1 ? "article" : "articles"}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all">
          View Resources
          <span className="text-lg">→</span>
        </span>
      </div>
    </Link>
  );
};

export default TownCard;
