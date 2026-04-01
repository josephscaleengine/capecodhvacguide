interface Zone {
  label: string;
  range: string;
  color: string;
  description: string;
}

interface TemperatureScaleProps {
  zones: Zone[];
  title?: string;
}

const TemperatureScale = ({ zones, title }: TemperatureScaleProps) => (
  <div className="my-6 p-6 rounded-xl bg-white border border-border shadow-sm">
    {title && <h4 className="font-bold text-primary text-lg mb-5">{title}</h4>}
    <div className="space-y-3">
      {zones.map((zone, i) => (
        <div key={i} className="flex items-center gap-4 p-3 rounded-lg" style={{ backgroundColor: zone.color + "15" }}>
          <div className="w-4 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: zone.color }} />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm" style={{ color: zone.color }}>{zone.label}</span>
              <span className="text-xs text-muted-foreground">({zone.range})</span>
            </div>
            <p className="text-sm text-foreground mt-0.5">{zone.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TemperatureScale;
