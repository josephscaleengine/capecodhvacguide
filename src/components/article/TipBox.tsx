import { Lightbulb } from "lucide-react";

interface TipBoxProps {
  tip: string;
  label?: string;
}

const TipBox = ({ tip, label = "Cape Cod Tip" }: TipBoxProps) => (
  <div className="my-6 p-5 rounded-xl bg-yellow-accent/30 border border-yellow-accent/50">
    <div className="flex gap-3">
      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary/70 block mb-1">{label}</span>
        <p className="text-foreground leading-relaxed">{tip}</p>
      </div>
    </div>
  </div>
);

export default TipBox;
