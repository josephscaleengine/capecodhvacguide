const topics = [
  { emoji: "❄️", title: "Seasonal Tips", count: 2 },
  { emoji: "🚨", title: "Emergency Guides", count: 2 },
  { emoji: "🔧", title: "Maintenance", count: 4 },
  { emoji: "🏠", title: "Older Homes", count: 2 },
  { emoji: "🌊", title: "Coastal Living", count: 2 },
];

const TopicsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Topic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the information you need, organized by common HVAC and heating concerns.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topics.map((topic) => (
            <a
              key={topic.title}
              href="#"
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-4xl mb-3">{topic.emoji}</span>
              <h3 className="font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {topic.count} articles
              </p>
              <span className="mt-3 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
