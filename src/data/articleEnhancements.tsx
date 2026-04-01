import { ReactNode } from "react";
import ChecklistCard from "@/components/article/ChecklistCard";
import WarningCard from "@/components/article/WarningCard";
import TipBox from "@/components/article/TipBox";
import StatBlock from "@/components/article/StatBlock";
import TimelineSteps from "@/components/article/TimelineSteps";
import ComparisonCards from "@/components/article/ComparisonCards";
import HorizontalBarChart from "@/components/article/HorizontalBarChart";
import DataCardGrid from "@/components/article/DataCardGrid";
import SeasonalPanel from "@/components/article/SeasonalPanel";
import TemperatureScale from "@/components/article/TemperatureScale";

// Inject visuals after specific h2 section indices (0-based)
export interface ArticleEnhancement {
  afterSection?: Record<number, ReactNode>;
  beforeContent?: ReactNode;
}

export const articleEnhancements: Record<string, ArticleEnhancement> = {
  "cape-cod-heat-pump-switch": {
    afterSection: {
      0: (
        <>
          <HorizontalBarChart
            title="Annual Heating Cost Comparison"
            bars={[
              { label: "Oil Heating", value: 3150, displayValue: "$2,500–$3,800/yr", color: "bg-coral" },
              { label: "Heat Pump", value: 1150, displayValue: "$800–$1,500/yr", color: "bg-accent" },
            ]}
            maxValue={4000}
          />
          <StatBlock value="40–60%" label="Average annual savings when switching from oil to heat pumps" color="accent" />
        </>
      ),
      3: (
        <DataCardGrid
          title="Heat Pump System Costs"
          cards={[
            { label: "Single-Zone Mini-Split", value: "$3,000–$5,000", sublabel: "Covers one room or area" },
            { label: "Multi-Zone (3-4 zones)", value: "$8,000–$15,000", sublabel: "One outdoor unit, multiple indoor" },
            { label: "Whole-Home Ducted", value: "$10,000–$18,000", sublabel: "Complete coverage" },
            { label: "After Mass Save Rebates", value: "40–100% less", sublabel: "Significant savings available" },
          ]}
        />
      ),
      4: (
        <TimelineSteps
          title="Making the Switch"
          steps={[
            { title: "Schedule Energy Assessment", description: "Free Mass Save assessment evaluates your home's needs" },
            { title: "Get Installer Quotes", description: "Compare 2-3 local heat pump installers for best value" },
            { title: "Apply for Rebates", description: "Submit applications for Mass Save and federal incentives" },
            { title: "Schedule Installation", description: "Spring or fall is best for minimal disruption" },
            { title: "Enjoy the Savings", description: "Lower bills and year-round comfort from day one" },
          ]}
        />
      ),
    },
  },

  "salt-air-hvac-corrosion-cape-cod": {
    afterSection: {
      0: (
        <HorizontalBarChart
          title="Equipment Lifespan: Standard vs Coastal-Rated"
          bars={[
            { label: "Standard Equipment", value: 6.5, displayValue: "5–8 years", color: "bg-coral" },
            { label: "Coastal-Rated Equipment", value: 13.5, displayValue: "12–15+ years", color: "bg-accent" },
          ]}
          maxValue={16}
        />
      ),
      3: (
        <WarningCard
          title="Signs of Salt Damage"
          items={[
            "White or green residue on outdoor components",
            "Pitting or flaking on aluminum fins",
            "Reduced cooling/heating efficiency",
            "Unusual noises from fans or compressors",
            "Rust stains around the base of outdoor units",
          ]}
        />
      ),
      4: (
        <StatBlock value="2x" label="Lifespan of coastal-rated equipment vs standard units near the ocean" color="accent" />
      ),
    },
  },

  "preparing-heat-pump-cape-cod-winters": {
    afterSection: {
      1: (
        <TemperatureScale
          title="Heat Pump Performance by Temperature"
          zones={[
            { label: "Great Efficiency", range: "Above 30°F", color: "#22C55E", description: "Heat pump operates at peak efficiency" },
            { label: "Good Efficiency", range: "15–30°F", color: "#EAB308", description: "Still efficient, slight performance drop" },
            { label: "Backup Recommended", range: "Below 15°F", color: "#EF4444", description: "Auxiliary heat may be needed" },
          ]}
        />
      ),
      2: (
        <TimelineSteps
          title="How Defrost Cycles Work"
          steps={[
            { title: "Ice Forms", description: "Moisture in the air freezes on the outdoor coils during cold weather" },
            { title: "Defrost Activates", description: "System reverses flow briefly to warm outdoor coils (1-10 min)" },
            { title: "Ice Clears", description: "Coils return to normal, steam is normal during this process" },
          ]}
        />
      ),
      4: (
        <StatBlock value="15%" label="Efficiency loss from dirty air filters — check monthly in winter" color="coral" />
      ),
    },
  },

  "winterizing-cape-cod-vacation-home-hvac": {
    afterSection: {
      0: (
        <StatBlock value="55°F" label="Minimum thermostat setting to prevent pipe freezing" color="coral" />
      ),
      2: (
        <ComparisonCards
          optionA={{
            title: "Complete Shutdown",
            items: [
              "Drain all water systems completely",
              "Turn off fuel supply",
              "Lowest energy costs when away",
              "Requires full restart in spring",
            ],
          }}
          optionB={{
            title: "Minimal Heat Maintenance",
            items: [
              "Set thermostat to 55°F minimum",
              "Keep fuel supply topped off",
              "Higher energy costs but easier",
              "Prevents mold and structural damage",
            ],
          }}
        />
      ),
      4: (
        <TimelineSteps
          title="Spring Opening Steps"
          steps={[
            { title: "Inspect Equipment", description: "Check all visible equipment for winter damage" },
            { title: "Check for Pests", description: "Look for rodent activity in HVAC components" },
            { title: "Replace Filters", description: "Fresh filters for the new season" },
            { title: "Test System", description: "Turn on breaker first, wait 24hrs before cooling mode" },
          ]}
        />
      ),
    },
  },

  "emergency-hvac-guide-cape-cod": {
    afterSection: {
      0: (
        <TimelineSteps
          title="Emergency Steps When Heat Fails"
          steps={[
            { title: "Check Thermostat", description: "Ensure it's set to heat and temperature is correct" },
            { title: "Check Power", description: "Look for tripped breakers or blown fuses" },
            { title: "Check Fuel Supply", description: "Verify oil or propane levels if applicable" },
            { title: "Call a Professional", description: "If basic checks don't resolve it, call for emergency service" },
          ]}
        />
      ),
      1: (
        <TemperatureScale
          title="Indoor Temperature Safety Zones"
          zones={[
            { label: "Safe Zone", range: "Above 55°F", color: "#22C55E", description: "Home and pipes are safe" },
            { label: "Caution Zone", range: "40–55°F", color: "#EAB308", description: "Risk of pipe freezing, act quickly" },
            { label: "Danger Zone", range: "Below 40°F", color: "#EF4444", description: "Evacuate, drain water systems immediately" },
          ]}
        />
      ),
      4: (
        <>
          <WarningCard
            title="Never Use These for Indoor Heating"
            items={[
              "Gas ovens or stovetops",
              "Outdoor propane heaters",
              "Generators inside the home",
              "Charcoal grills or camp stoves",
            ]}
          />
          <StatBlock value="55°F" label="Minimum safe indoor temperature to prevent pipe freezing" color="coral" />
        </>
      ),
    },
  },

  "carbon-monoxide-safety-heating-systems": {
    afterSection: {
      0: (
        <WarningCard
          title="Symptoms of CO Poisoning"
          items={[
            "Headache and dizziness",
            "Nausea and confusion",
            "Fatigue and shortness of breath",
            "Symptoms improve when you leave the house",
          ]}
        />
      ),
      2: (
        <TimelineSteps
          title="If Your CO Detector Alarms"
          steps={[
            { title: "Don't Ignore It", description: "Take every alarm seriously" },
            { title: "Open Windows", description: "If safely possible, ventilate the area" },
            { title: "Evacuate Everyone", description: "Get all people and pets out immediately" },
            { title: "Call 911", description: "Call from outside the building" },
            { title: "Don't Re-enter", description: "Wait for fire department to clear the home" },
          ]}
        />
      ),
      4: (
        <StatBlock value="5-7 years" label="CO detector replacement interval — mark your calendar" color="coral" />
      ),
    },
  },

  "annual-hvac-maintenance-guide": {
    afterSection: {
      0: (
        <SeasonalPanel
          title="Seasonal Maintenance Overview"
          seasons={[
            { season: "spring", tasks: ["Replace air filters", "Test AC on warm day", "Clear debris from outdoor units", "Schedule professional tune-up"] },
            { season: "summer", tasks: ["Monthly filter checks", "Rinse coils after pollen", "Monitor energy bills", "Run dehumidifier in coastal areas"] },
            { season: "fall", tasks: ["Professional heating inspection", "Test heating system", "Check CO detectors", "Stock up on filters"] },
            { season: "winter", tasks: ["Monthly filter checks", "Monitor fuel levels", "Clear snow from heat pump", "Watch for ice dams"] },
          ]}
        />
      ),
      4: (
        <HorizontalBarChart
          title="Cost of Neglect vs Maintenance"
          bars={[
            { label: "Avg Repair (No Maintenance)", value: 1400, displayValue: "$800–$2,000", color: "bg-coral" },
            { label: "Annual Maintenance Cost", value: 250, displayValue: "$150–$350", color: "bg-accent" },
          ]}
          maxValue={2000}
        />
      ),
      5: (
        <>
          <ComparisonCards
            optionA={{
              title: "DIY Tasks",
              items: [
                "Regular filter replacement",
                "Keeping areas around equipment clean",
                "Basic thermostat operation",
                "Visual inspections",
                "Rinsing outdoor coils",
              ],
            }}
            optionB={{
              title: "Professional Tasks",
              items: [
                "Refrigerant level checks",
                "Electrical component testing",
                "Combustion analysis",
                "Deep coil cleaning",
                "Safety inspections",
              ],
            }}
          />
          <StatBlock value="15%" label="Efficiency loss from skipping annual maintenance" color="coral" />
        </>
      ),
    },
  },

  "choosing-right-hvac-system-cape-cod": {
    afterSection: {
      0: (
        <DataCardGrid
          title="Cape Cod Climate Snapshot"
          cards={[
            { label: "Winter Avg", value: "25–40°F", sublabel: "Occasional drops below 10°F" },
            { label: "Summer Avg", value: "70–85°F", sublabel: "High humidity, often 70%+" },
            { label: "Salt Exposure", value: "Year-round", sublabel: "Impacts equipment lifespan" },
            { label: "Storm Season", value: "Nov–Mar", sublabel: "Coastal ice and snow" },
          ]}
        />
      ),
      1: (
        <ComparisonCards
          optionA={{
            title: "Heat Pump Advantages",
            items: [
              "Heats and cools with one system",
              "300-400% efficiency rating",
              "No fossil fuel combustion",
              "Mass Save rebates available",
            ],
          }}
          optionB={{
            title: "Heat Pump Considerations",
            items: [
              "Efficiency drops in extreme cold",
              "May need backup for coldest days",
              "Outdoor units need salt protection",
              "Higher upfront investment",
            ],
          }}
        />
      ),
      4: (
        <StatBlock value="40-60%" label="Of home energy use goes to heating and cooling" color="accent" />
      ),
    },
  },

  "improving-indoor-air-quality": {
    afterSection: {
      1: (
        <DataCardGrid
          title="MERV Filter Ratings"
          cards={[
            { label: "MERV 1-4", value: "Basic", sublabel: "Standard fiberglass filters" },
            { label: "MERV 5-8", value: "Better", sublabel: "Pleated filters, good for most" },
            { label: "MERV 9-12", value: "Superior", sublabel: "Extended pleated, recommended" },
            { label: "MERV 13-16", value: "Hospital-Grade", sublabel: "For severe allergies" },
          ]}
        />
      ),
      2: (
        <StatBlock value="30–50%" label="Ideal indoor relative humidity level" color="accent" />
      ),
    },
  },

  "hvac-energy-efficiency-tips": {
    afterSection: {
      0: (
        <StatBlock value="40–60%" label="Of home energy use goes to HVAC — optimize for big savings" color="accent" />
      ),
      1: (
        <TipBox
          tip="Every 1°F adjustment on your thermostat saves 2-3% on energy costs. Setting heat to 68°F when home and 62°F when away can save hundreds per year."
          label="Pro Tip"
        />
      ),
      3: (
        <HorizontalBarChart
          title="ROI Priority for Energy Savings"
          bars={[
            { label: "Air Sealing & Insulation", value: 95, displayValue: "Often free via Mass Save", color: "bg-accent" },
            { label: "Smart Thermostat", value: 85, displayValue: "Pays for itself in 1-2 yrs", color: "bg-accent" },
            { label: "Regular Maintenance", value: 75, displayValue: "$150-$350/year", color: "bg-primary" },
            { label: "Heat Pump Upgrade", value: 70, displayValue: "40-60% savings", color: "bg-coral" },
          ]}
          maxValue={100}
        />
      ),
    },
  },

  "coastal-humidity-hvac-solutions": {
    afterSection: {
      0: (
        <TemperatureScale
          title="Indoor Humidity Zones"
          zones={[
            { label: "Too Dry", range: "Below 30%", color: "#EAB308", description: "Dry skin, static, respiratory irritation" },
            { label: "Ideal Range", range: "30–50%", color: "#22C55E", description: "Comfortable, healthy, safe for home" },
            { label: "High Humidity", range: "50–60%", color: "#F97316", description: "Dust mites thrive, some discomfort" },
            { label: "Danger Zone", range: "Above 60%", color: "#EF4444", description: "Mold growth, structural damage risk" },
          ]}
        />
      ),
      1: (
        <WarningCard
          title="Signs of Humidity Problems"
          items={[
            "Condensation on windows",
            "Musty odors throughout the home",
            "Visible mold or mildew growth",
            "Peeling paint or wallpaper",
            "Warped wood floors or sticky doors",
          ]}
        />
      ),
      4: (
        <StatBlock value="50%" label="Ideal indoor relative humidity for Cape Cod homes" color="accent" />
      ),
    },
  },

  "historic-homes-hvac-solutions": {
    afterSection: {
      0: (
        <StatBlock value="60%+" label="Of Cape Cod homes were built before 1980" color="primary" />
      ),
      1: (
        <ComparisonCards
          optionA={{
            title: "Ductless Mini-Splits",
            items: [
              "Only a 3-inch wall hole needed",
              "No ductwork required",
              "Individual room control",
              "Heating and cooling in one",
            ],
          }}
          optionB={{
            title: "High-Velocity Mini-Duct",
            items: [
              "2-inch tubing fits in walls",
              "Less visible than conventional",
              "Good air distribution",
              "Higher installation cost",
            ],
          }}
        />
      ),
      4: (
        <TimelineSteps
          title="Recommended Phased Approach"
          steps={[
            { title: "Efficiency First", description: "Start with air sealing and insulation improvements" },
            { title: "Add Heating", description: "Install primary heating if that's the greater need" },
            { title: "Add Cooling", description: "Consider cooling as a second phase" },
            { title: "Upgrade Over Time", description: "Improve systems as budget allows" },
          ]}
        />
      ),
    },
  },

  "hvac-challenges-older-falmouth-homes": {
    afterSection: {
      0: (
        <WarningCard
          title="Common Issues in Older Homes"
          items={[
            "Minimal insulation in walls and attics",
            "Original single-pane windows causing 25-30% heat loss",
            "No existing ductwork for central HVAC",
            "Outdated heating systems (radiators, boilers)",
          ]}
        />
      ),
      1: (
        <ComparisonCards
          optionA={{
            title: "Ductless Mini-Splits",
            items: [
              "Small hole through exterior wall",
              "Both heating and cooling",
              "Zone control for rooms",
              "Quiet and efficient",
            ],
          }}
          optionB={{
            title: "High-Velocity Mini-Duct",
            items: [
              "Flexible 2-inch tubing",
              "Minimal visual impact",
              "Excellent air distribution",
              "Fits in existing wall cavities",
            ],
          }}
        />
      ),
      3: (
        <StatBlock value="25–30%" label="Of heating/cooling costs lost through original single-pane windows" color="coral" />
      ),
    },
  },

  "average-hvac-costs-cape-cod-2026": {
    afterSection: {
      0: (
        <DataCardGrid
          title="Heat Pump Installation Costs"
          cards={[
            { label: "Single-Zone Mini-Split", value: "$3,000–$5,000", sublabel: "Covers one room" },
            { label: "Multi-Zone (2-3 zones)", value: "$6,000–$12,000", sublabel: "Multiple rooms" },
            { label: "Whole-Home Ducted", value: "$10,000–$18,000", sublabel: "Complete coverage" },
            { label: "After Mass Save Rebates", value: "40–100% less", sublabel: "Significant savings" },
          ]}
        />
      ),
      2: (
        <HorizontalBarChart
          title="Annual Operating Cost by System"
          bars={[
            { label: "Oil Furnace", value: 3150, displayValue: "$2,500–$3,800/yr", color: "bg-coral" },
            { label: "Gas Furnace", value: 1600, displayValue: "$1,200–$2,000/yr", color: "bg-primary" },
            { label: "Ducted Heat Pump", value: 1150, displayValue: "$800–$1,500/yr", color: "bg-accent" },
            { label: "Ductless Mini-Split", value: 900, displayValue: "$600–$1,200/yr", color: "bg-accent" },
          ]}
          maxValue={4000}
        />
      ),
      3: (
        <>
          <TipBox tip="Schedule maintenance during off-peak seasons (spring/fall), get multiple quotes, and always ask about Mass Save rebates before any major installation." label="Ways to Save" />
          <StatBlock value="$10,000" label="Maximum Mass Save rebate for whole-home heat pump systems" color="accent" />
        </>
      ),
    },
  },

  "ductless-mini-splits-cape-cod": {
    afterSection: {
      0: (
        <ChecklistCard
          title="Why Mini-Splits Fit Cape Cod"
          items={[
            "No ductwork required — perfect for pre-1970 homes",
            "Both heating and cooling from one system",
            "Individual zone control saves energy",
            "Whisper-quiet operation (as low as 19 dB)",
          ]}
        />
      ),
      1: (
        <TimelineSteps
          title="Installation Process"
          steps={[
            { title: "Home Evaluation", description: "Technician assesses your heating/cooling needs" },
            { title: "Location Selection", description: "Indoor unit locations chosen (usually high on walls)" },
            { title: "Wall Penetration", description: "Small 3-inch hole drilled through exterior wall" },
            { title: "Connect & Test", description: "Refrigerant lines connected, system tested and calibrated" },
          ]}
        />
      ),
      2: (
        <DataCardGrid
          title="Mini-Split Cost Breakdown"
          cards={[
            { label: "Single Zone", value: "$3,000–$5,000", sublabel: "Up to ~500 sq ft" },
            { label: "Multi-Zone (3-4)", value: "$8,000–$15,000", sublabel: "Whole-home coverage" },
          ]}
        />
      ),
      4: (
        <StatBlock value="15–20 years" label="Average ductless mini-split lifespan with proper maintenance" color="accent" />
      ),
    },
  },

  "mass-save-rebates-cape-cod": {
    afterSection: {
      1: (
        <DataCardGrid
          title="Available HVAC Rebates (2026)"
          cards={[
            { label: "Ductless Mini-Split", value: "Up to $10,000", sublabel: "Per system" },
            { label: "Ducted Heat Pump", value: "Up to $10,000", sublabel: "Whole-home systems" },
            { label: "Ground-Source HP", value: "Up to $15,000", sublabel: "Geothermal systems" },
            { label: "Income-Eligible", value: "Up to 100%", sublabel: "Full costs covered" },
          ]}
        />
      ),
      2: (
        <TimelineSteps
          title="How to Get Started"
          steps={[
            { title: "Schedule Energy Assessment", description: "Call 866-527-SAVE — it's free and takes 2-3 hours" },
            { title: "Review Recommendations", description: "Get a customized report of efficiency opportunities" },
            { title: "Choose Upgrades", description: "Get quotes and apply rebates to reduce costs" },
            { title: "Schedule Installation", description: "Use 0% financing if needed" },
            { title: "Receive Rebate", description: "Savings applied to your project costs" },
          ]}
        />
      ),
      4: (
        <>
          <TipBox
            tip="Income-eligible households may qualify for 100% of costs covered — including free insulation, air sealing, heat pumps, and smart thermostats."
            label="Important"
          />
          <StatBlock value="$10,000" label="Maximum Mass Save rebate for whole-home heat pump installation" color="accent" />
        </>
      ),
    },
  },

  "winterizing-vacation-home-hvac-cape-cod": {
    afterSection: {
      0: (
        <SeasonalPanel
          title="Year-Round HVAC Strategy"
          seasons={[
            { season: "summer", tasks: ["Set AC to 72-74°F for guests", "Change filters monthly", "Monitor humidity levels"] },
            { season: "fall", tasks: ["Schedule professional maintenance", "Check for rodent activity", "Test all zones"] },
            { season: "winter", tasks: ["Maintain minimum 55°F", "Install smart thermostat alerts", "Have local contact check property"] },
            { season: "spring", tasks: ["Professional AC tune-up", "Replace all filters", "Clean outdoor coils"] },
          ]}
        />
      ),
      2: (
        <WarningCard
          title="Freeze Damage Prevention"
          items={[
            "Never set heat below 55°F in winter",
            "Open cabinet doors under sinks during cold snaps",
            "Insulate pipes in crawl spaces and exterior walls",
            "Consider automatic water shutoff valves",
          ]}
        />
      ),
      4: (
        <StatBlock value="55°F" label="Minimum thermostat setting to prevent costly freeze damage" color="coral" />
      ),
    },
  },
};
