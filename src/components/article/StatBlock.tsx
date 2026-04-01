interface StatBlockProps {
  value: string;
  label: string;
  color?: "coral" | "accent" | "primary";
}

const colorMap = {
  coral: "text-coral",
  accent: "text-accent",
  primary: "text-primary",
};

const StatBlock = ({ value, label, color = "coral" }: StatBlockProps) => (
  <div className="my-8 p-8 rounded-xl bg-yellow-accent/20 border border-yellow-accent/40 text-center">
    <div className={`text-4xl md:text-5xl font-bold ${colorMap[color]} mb-2`}>{value}</div>
    <div className="text-muted-foreground text-sm md:text-base">{label}</div>
  </div>
);

export default StatBlock;
