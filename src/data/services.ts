export interface Service {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  whyCapeCod: string;
  warningSigns: string[];
  costRange: string;
  bluePacificOffers: boolean;
}

export const services: Service[] = [
  {
    slug: "heat-pump-installation-repair",
    name: "Heat Pump Installation & Repair",
    icon: "Zap",
    shortDescription: "Efficient heating and cooling with modern heat pump technology.",
    description: "Heat pumps are the fastest-growing HVAC solution on Cape Cod. These systems provide both heating and cooling from a single unit, using electricity to transfer heat rather than generate it. Modern cold-climate heat pumps can operate efficiently even in Cape Cod's coldest winter temperatures.",
    whyCapeCod: "Cape Cod's moderate maritime climate makes heat pumps exceptionally efficient here. Combined with Mass Save rebates covering up to 100% of installation costs, heat pumps are becoming the default choice for Cape Cod homeowners replacing aging oil or propane systems.",
    warningSigns: [
      "Rising energy bills despite normal usage",
      "System struggling to maintain temperature in moderate cold",
      "Unusual noises from outdoor unit",
      "Ice buildup that doesn't clear during defrost cycles",
      "Reduced airflow from indoor units"
    ],
    costRange: "$4,500 – $9,000",
    bluePacificOffers: true
  },
  {
    slug: "furnace-installation-repair",
    name: "Furnace Installation & Repair",
    icon: "Flame",
    shortDescription: "Expert furnace services for oil and gas heating systems.",
    description: "Whether you have a gas or oil furnace, proper installation and maintenance are critical for safe, efficient operation. Cape Cod homes rely heavily on furnaces during the long heating season, making professional service essential.",
    whyCapeCod: "Many Cape Cod homes still rely on oil furnaces, and natural gas availability varies by town. Understanding your fuel options and choosing the right furnace for your property's infrastructure is essential for Cape Cod homeowners.",
    warningSigns: [
      "Yellow or flickering pilot light (should be blue)",
      "Strange noises — banging, rattling, or squealing",
      "Frequent cycling on and off",
      "Uneven heating throughout the home",
      "Soot or rust around the furnace"
    ],
    costRange: "$3,500 – $8,000",
    bluePacificOffers: true
  },
  {
    slug: "ductless-mini-split-systems",
    name: "Ductless Mini-Split Systems",
    icon: "Wind",
    shortDescription: "Zone-controlled comfort without invasive ductwork installation.",
    description: "Ductless mini-split systems provide targeted heating and cooling without the need for traditional ductwork. Each indoor unit operates independently, giving you precise temperature control room by room.",
    whyCapeCod: "Many Cape Cod homes — especially older and historic properties — lack existing ductwork. Installing traditional ducts can be invasive, expensive, and may compromise historic features. Ductless systems require only a small hole through an exterior wall, making them the ideal retrofit solution.",
    warningSigns: [
      "Rooms that are always too hot or too cold",
      "Window AC units that are noisy and inefficient",
      "No existing ductwork for central air",
      "High energy bills from electric baseboard heat",
      "Wanting to add AC to a home addition"
    ],
    costRange: "$3,000 – $6,000 per zone",
    bluePacificOffers: true
  },
  {
    slug: "central-air-conditioning",
    name: "Central Air Conditioning",
    icon: "Snowflake",
    shortDescription: "Whole-home cooling with central AC systems.",
    description: "Central air conditioning provides consistent, whole-home cooling through your existing ductwork. Modern systems are significantly more efficient than older units, with SEER ratings of 15+ delivering substantial energy savings.",
    whyCapeCod: "Cape Cod summers are getting warmer and more humid. Central AC provides reliable whole-home comfort during the busy summer season, which is especially important for vacation rental properties and homes near the water where humidity is highest.",
    warningSigns: [
      "AC running constantly without cooling effectively",
      "Strange odors when system turns on",
      "Water leaks around indoor unit",
      "Thermostat readings don't match actual room temperature",
      "System is over 12 years old"
    ],
    costRange: "$3,500 – $7,000",
    bluePacificOffers: true
  },
  {
    slug: "boiler-services",
    name: "Boiler Services",
    icon: "Gauge",
    shortDescription: "Maintenance, repair, and installation for hydronic heating systems.",
    description: "Boiler systems provide comfortable, even heat through radiators or radiant floor heating. Many Cape Cod homes rely on boilers for their primary heat, and proper maintenance is essential for safety and efficiency.",
    whyCapeCod: "A significant number of Cape Cod homes, particularly older properties, use hydronic boiler systems. The salt air environment can accelerate corrosion in boiler components, making regular professional maintenance even more critical for coastal properties.",
    warningSigns: [
      "Radiators not heating evenly",
      "Unusual noises from the boiler — banging or kettling",
      "Water leaks or pressure drops",
      "Pilot light issues on older systems",
      "Rising fuel consumption"
    ],
    costRange: "$4,000 – $10,000 (replacement)",
    bluePacificOffers: true
  },
  {
    slug: "duct-cleaning-sealing",
    name: "Duct Cleaning & Sealing",
    icon: "Fan",
    shortDescription: "Improve air quality and efficiency with professional duct services.",
    description: "Over time, ductwork accumulates dust, allergens, and debris. Leaky ducts can waste 20–30% of your heating and cooling energy. Professional cleaning and sealing restores efficiency and improves indoor air quality.",
    whyCapeCod: "Cape Cod's sandy environment means more particulate matter enters homes. Seasonal homes that sit closed for months can develop mold and mildew in ductwork. Regular cleaning is especially important for allergy sufferers and homes near the beach.",
    warningSigns: [
      "Visible dust blowing from vents",
      "Musty or stale odors when system runs",
      "Uneven airflow between rooms",
      "Higher than expected energy bills",
      "Family members experiencing increased allergies"
    ],
    costRange: "$300 – $700",
    bluePacificOffers: true
  },
  {
    slug: "thermostat-installation",
    name: "Thermostat Installation",
    icon: "Thermometer",
    shortDescription: "Upgrade to smart or programmable thermostats for better control.",
    description: "Modern thermostats offer precise temperature control, learning capabilities, and remote access. Upgrading from a basic thermostat to a smart model can save 10–15% on heating and cooling costs through better scheduling and optimization.",
    whyCapeCod: "Smart thermostats are especially valuable for Cape Cod vacation homeowners who need to monitor and control temperatures remotely. They can alert you to dangerous temperature drops in winter, potentially preventing frozen pipe disasters in unoccupied homes.",
    warningSigns: [
      "Thermostat doesn't accurately read room temperature",
      "System short-cycles frequently",
      "No programmable scheduling capability",
      "Unable to monitor home temperature remotely",
      "Incompatibility with new HVAC equipment"
    ],
    costRange: "$150 – $500 installed",
    bluePacificOffers: true
  },
  {
    slug: "hvac-maintenance-plans",
    name: "HVAC Maintenance Plans",
    icon: "ClipboardCheck",
    shortDescription: "Preventive maintenance to extend system life and prevent breakdowns.",
    description: "Regular professional maintenance keeps your HVAC system running at peak efficiency and helps prevent unexpected breakdowns. Most manufacturers require annual professional maintenance to maintain warranty coverage.",
    whyCapeCod: "Cape Cod's coastal environment is harder on HVAC equipment than inland locations. Salt air, sand, and humidity accelerate wear and reduce system lifespan. Regular maintenance is the single most effective way to combat these environmental challenges.",
    warningSigns: [
      "It's been over a year since last professional service",
      "System efficiency seems to be declining",
      "Equipment is making new or unusual sounds",
      "Energy bills are creeping up",
      "You want to protect your warranty"
    ],
    costRange: "$150 – $350/year",
    bluePacificOffers: true
  },
  {
    slug: "emergency-heating-repair",
    name: "Emergency Heating Repair",
    icon: "AlertTriangle",
    shortDescription: "24/7 emergency response when your heating system fails.",
    description: "When your heating system fails in the middle of a Cape Cod winter, you need fast, reliable service. Emergency heating repair gets your system back online quickly to protect your family and your property from freeze damage.",
    whyCapeCod: "Cape Cod winter storms can knock out heating systems when you need them most. The risk of frozen pipes and property damage makes emergency heating repair a critical service, especially for the many seasonal properties that maintain minimal heat through winter.",
    warningSigns: [
      "Complete loss of heat",
      "Burning smell from heating equipment",
      "Carbon monoxide detector alarm",
      "Water leaking from boiler or pipes",
      "Temperatures dropping below 50°F indoors"
    ],
    costRange: "$150 – $500 (service call + repair)",
    bluePacificOffers: true
  },
  {
    slug: "energy-audits-efficiency",
    name: "Energy Audits & Efficiency",
    icon: "Leaf",
    shortDescription: "Identify energy waste and optimize your home's performance.",
    description: "A professional energy audit identifies where your home is losing energy and provides a prioritized plan for improvements. Many Cape Cod homeowners discover they can significantly reduce energy costs with targeted upgrades.",
    whyCapeCod: "Many Cape Cod homes are older and were built before modern energy codes. An energy audit can identify cost-effective improvements that dramatically reduce heating costs. Mass Save offers free or subsidized energy audits for Cape Cod homeowners.",
    warningSigns: [
      "Energy bills seem high compared to neighbors",
      "Drafty rooms even when windows are closed",
      "Ice dams forming on the roof in winter",
      "Second floor is much hotter than first in summer",
      "HVAC system runs constantly"
    ],
    costRange: "Free – $400 (often subsidized by Mass Save)",
    bluePacificOffers: false
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality Solutions",
    icon: "AirVent",
    shortDescription: "Breathe easier with air purification and ventilation systems.",
    description: "Indoor air quality solutions include air purifiers, humidifiers, dehumidifiers, UV germicidal lights, and ventilation systems. These products work with your HVAC system to create a healthier indoor environment.",
    whyCapeCod: "Cape Cod's coastal humidity can create mold and mildew issues, while tightly sealed modern homes may lack adequate ventilation. Seasonal properties that sit closed for months especially benefit from air quality solutions to combat musty air and allergens.",
    warningSigns: [
      "Persistent musty or stale odors",
      "Excessive humidity or condensation on windows",
      "Family members with frequent allergies or respiratory issues",
      "Visible mold in bathrooms or near HVAC equipment",
      "Dry air causing static, cracking wood, or discomfort"
    ],
    costRange: "$500 – $3,000",
    bluePacificOffers: false
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};