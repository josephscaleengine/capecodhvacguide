import {
  Snowflake,
  AlertTriangle,
  Wrench,
  Home,
  Waves,
  Zap,
  DollarSign,
  BookOpen,
  Leaf,
  Thermometer,
} from "lucide-react";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  seasonal: Snowflake,
  emergency: AlertTriangle,
  maintenance: Wrench,
  "older-homes": Home,
  coastal: Waves,
  "heat-pumps": Zap,
  "cost-guides": DollarSign,
  "homeowner-guides": BookOpen,
  "energy-efficiency": Leaf,
  "vacation-homes": Home,
};

export const getCategoryIcon = (slug: string) => categoryIconMap[slug] || Thermometer;

export const categoryColors: Record<string, string> = {
  seasonal: "bg-blue-100 text-blue-700",
  emergency: "bg-red-100 text-red-700",
  maintenance: "bg-green-100 text-green-700",
  "older-homes": "bg-amber-100 text-amber-700",
  coastal: "bg-cyan-100 text-cyan-700",
  "heat-pumps": "bg-violet-100 text-violet-700",
  "cost-guides": "bg-emerald-100 text-emerald-700",
  "homeowner-guides": "bg-indigo-100 text-indigo-700",
  "energy-efficiency": "bg-lime-100 text-lime-700",
  "vacation-homes": "bg-orange-100 text-orange-700",
};