interface Step {
  title: string;
  description: string;
}

interface TimelineStepsProps {
  steps: Step[];
  title?: string;
}

const TimelineSteps = ({ steps, title }: TimelineStepsProps) => (
  <div className="my-6">
    {title && <h4 className="font-bold text-primary text-lg mb-5">{title}</h4>}
    <div className="relative pl-8 space-y-0">
      <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-accent/30" />
      {steps.map((step, i) => (
        <div key={i} className="relative pb-6 last:pb-0">
          <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-md">
            {i + 1}
          </div>
          <div className="ml-4 p-4 rounded-xl bg-white border border-border shadow-sm">
            <div className="font-semibold text-primary mb-1">{step.title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TimelineSteps;
