interface ResourceCardProps {
  emoji: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  tag?: string;
}

const ResourceCard = ({ emoji, category, title, description, readTime, tag }: ResourceCardProps) => {
  return (
    <a
      href="#"
      className="group block p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{emoji}</span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{readTime}</span>
        {tag && (
          <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
            {tag}
          </span>
        )}
      </div>
    </a>
  );
};

export default ResourceCard;
