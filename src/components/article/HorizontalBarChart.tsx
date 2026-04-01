interface Bar {
  label: string;
  value: number;
  displayValue: string;
  color?: string;
}

interface HorizontalBarChartProps {
  bars: Bar[];
  title?: string;
  maxValue?: number;
}

const defaultColors = ["bg-coral", "bg-accent", "bg-primary", "bg-peach"];

const HorizontalBarChart = ({ bars, title, maxValue }: HorizontalBarChartProps) => {
  const max = maxValue || Math.max(...bars.map((b) => b.value));

  return (
    <div className="my-6 p-6 rounded-xl bg-white border border-border shadow-sm">
      {title && <h4 className="font-bold text-primary text-lg mb-5">{title}</h4>}
      <div className="space-y-4">
        {bars.map((bar, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-foreground">{bar.label}</span>
              <span className="text-sm font-bold text-primary">{bar.displayValue}</span>
            </div>
            <div className="h-8 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${bar.color || defaultColors[i % defaultColors.length]} transition-all duration-700`}
                style={{ width: `${(bar.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBarChart;
