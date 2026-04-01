import { CheckCircle, AlertTriangle } from "lucide-react";

interface ComparisonCardsProps {
  optionA: { title: string; items: string[]; };
  optionB: { title: string; items: string[]; };
}

const ComparisonCards = ({ optionA, optionB }: ComparisonCardsProps) => (
  <div className="my-6 grid md:grid-cols-2 gap-4">
    <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
      <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
        <CheckCircle className="w-5 h-5" />
        {optionA.title}
      </h4>
      <ul className="space-y-2">
        {optionA.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-5 rounded-xl bg-coral/5 border border-coral/20">
      <h4 className="font-bold text-coral mb-3 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5" />
        {optionB.title}
      </h4>
      <ul className="space-y-2">
        {optionB.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <AlertTriangle className="w-3.5 h-3.5 text-coral flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ComparisonCards;
