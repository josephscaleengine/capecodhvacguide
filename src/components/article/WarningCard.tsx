import { AlertTriangle } from "lucide-react";

interface WarningCardProps {
  items: string[];
  title?: string;
}

const WarningCard = ({ items, title }: WarningCardProps) => (
  <div className="my-6 p-6 rounded-xl bg-[#FFF0EE] border border-coral/20">
    {title && (
      <h4 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-coral" />
        {title}
      </h4>
    )}
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/60">
          <AlertTriangle className="w-4 h-4 text-coral flex-shrink-0 mt-1" />
          <span className="text-foreground leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default WarningCard;
