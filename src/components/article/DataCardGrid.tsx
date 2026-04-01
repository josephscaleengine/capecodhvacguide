import { DollarSign } from "lucide-react";

interface DataCard {
  label: string;
  value: string;
  sublabel?: string;
}

interface DataCardGridProps {
  cards: DataCard[];
  title?: string;
}

const DataCardGrid = ({ cards, title }: DataCardGridProps) => (
  <div className="my-6">
    {title && <h4 className="font-bold text-primary text-lg mb-4">{title}</h4>}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <div key={i} className="p-5 rounded-xl bg-white border border-border shadow-sm text-center">
          <DollarSign className="w-5 h-5 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary mb-1">{card.value}</div>
          <div className="text-sm font-medium text-foreground">{card.label}</div>
          {card.sublabel && <div className="text-xs text-muted-foreground mt-1">{card.sublabel}</div>}
        </div>
      ))}
    </div>
  </div>
);

export default DataCardGrid;
