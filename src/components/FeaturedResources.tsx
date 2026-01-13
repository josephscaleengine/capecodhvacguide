import ResourceCard from "./ResourceCard";

const resources = [
  {
    emoji: "🏠",
    category: "Older Homes",
    title: "HVAC Challenges in Older Falmouth Homes",
    description: "Historic Falmouth homes have unique heating and cooling challenges. Learn what to watch for and how to protect your vintage property.",
    readTime: "5 min read",
    tag: "falmouth",
  },
  {
    emoji: "❄️",
    category: "Seasonal Tips",
    title: "Preparing Your Heat Pump for Cape Cod Winters",
    description: "The unique Cape Cod climate demands special attention for heat pump maintenance. Here's what you need to know.",
    readTime: "6 min read",
  },
  {
    emoji: "🌊",
    category: "Coastal Living",
    title: "Salt Air & HVAC Equipment Corrosion on Cape Cod",
    description: "Living near the ocean has its perks, but salt air can accelerate HVAC deterioration. Learn how to protect your system.",
    readTime: "6 min read",
  },
  {
    emoji: "🏖️",
    category: "Seasonal Tips",
    title: "How to Winterize Your Cape Cod Vacation Home HVAC",
    description: "Protect your seasonal Cape Cod property from costly freeze damage with this complete winterization guide.",
    readTime: "7 min read",
  },
];

const FeaturedResources = () => {
  return (
    <section id="resources" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth guides on common HVAC and heating challenges facing Cape Cod homeowners.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Resources
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
