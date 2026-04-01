import { Sun, Snowflake, Leaf, Flower2 } from "lucide-react";

interface SeasonData {
  season: "spring" | "summer" | "fall" | "winter";
  tasks: string[];
}

interface SeasonalPanelProps {
  seasons: SeasonData[];
  title?: string;
}

const seasonConfig = {
  spring: { icon: Flower2, bg: "bg-green-50", border: "border-green-200", iconColor: "text-green-600", label: "Spring" },
  summer: { icon: Sun, bg: "bg-amber-50", border: "border-amber-200", iconColor: "text-amber-600", label: "Summer" },
  fall: { icon: Leaf, bg: "bg-orange-50", border: "border-orange-200", iconColor: "text-orange-600", label: "Fall" },
  winter: { icon: Snowflake, bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-600", label: "Winter" },
};

const SeasonalPanel = ({ seasons, title }: SeasonalPanelProps) => (
  <div className="my-6">
    {title && <h4 className="font-bold text-primary text-lg mb-4">{title}</h4>}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {seasons.map((s) => {
        const cfg = seasonConfig[s.season];
        const Icon = cfg.icon;
        return (
          <div key={s.season} className={`p-5 rounded-xl ${cfg.bg} border ${cfg.border}`}>
            <div className="flex items-center gap-2 mb-3">
              <Icon className={`w-5 h-5 ${cfg.iconColor}`} />
              <span className="font-bold text-primary">{cfg.label}</span>
            </div>
            <ul className="space-y-2">
              {s.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${cfg.iconColor.replace("text-", "bg-")} flex-shrink-0 mt-2`} />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
);

export default SeasonalPanel;
