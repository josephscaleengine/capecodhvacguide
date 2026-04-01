import { CheckCircle } from "lucide-react";

interface ChecklistCardProps {
  items: string[];
  title?: string;
  icon?: React.ReactNode;
}

const ChecklistCard = ({ items, title, icon }: ChecklistCardProps) => (
  <div className="my-6">
    {title && (
      <h4 className="font-bold text-primary text-lg mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h4>
    )}
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border shadow-sm">
          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <span className="text-foreground leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ChecklistCard;
