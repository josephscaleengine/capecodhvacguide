import falmouthImg from "@/assets/towns/falmouth.jpg";
import mashpeeImg from "@/assets/towns/mashpee.jpg";
import sandwichImg from "@/assets/towns/sandwich.jpg";
import bourneImg from "@/assets/towns/bourne.jpg";
import ostervilleImg from "@/assets/towns/osterville.jpg";
import hyannisImg from "@/assets/towns/hyannis.jpg";
import barnstableImg from "@/assets/towns/barnstable.jpg";
import yarmouthImg from "@/assets/towns/yarmouth.jpg";
import dennisImg from "@/assets/towns/dennis.jpg";
import brewsterImg from "@/assets/towns/brewster.jpg";
import harwichImg from "@/assets/towns/harwich.jpg";
import chathamImg from "@/assets/towns/chatham.jpg";
import orleansImg from "@/assets/towns/orleans.jpg";
import easthamImg from "@/assets/towns/eastham.jpg";
import wellfleetImg from "@/assets/towns/wellfleet.jpg";
import truroImg from "@/assets/towns/truro.jpg";
import provincetownImg from "@/assets/towns/provincetown.jpg";

export interface Town {
  slug: string;
  name: string;
  description: string;
  image: string;
  articleCount: number;
  longDescription: string;
  hvacChallenges: string[];
  tips: string[];
}

export const towns: Town[] = [
  {
    slug: "falmouth",
    name: "Falmouth",
    description: "Coastal community with historic homes and modern developments",
    image: falmouthImg,
    articleCount: 1,
    longDescription: "Falmouth is one of Cape Cod's most beloved coastal communities, featuring a mix of historic Victorian homes, mid-century cottages, and modern developments. The town's proximity to the ocean creates unique HVAC challenges that homeowners must address to maintain comfort year-round.",
    hvacChallenges: [
      "Salt air corrosion on outdoor HVAC units and heat pumps",
      "High humidity levels requiring proper dehumidification",
      "Historic homes with limited space for modern HVAC systems",
      "Seasonal temperature swings from coastal weather patterns"
    ],
    tips: [
      "Schedule bi-annual HVAC maintenance to combat salt air damage",
      "Consider ductless mini-splits for historic homes without existing ductwork",
      "Install whole-home dehumidifiers to combat coastal humidity",
      "Use corrosion-resistant coatings on outdoor equipment"
    ]
  },
  {
    slug: "mashpee",
    name: "Mashpee",
    description: "Growing community with diverse housing stock",
    image: mashpeeImg,
    articleCount: 1,
    longDescription: "Mashpee is a rapidly growing Cape Cod community featuring everything from waterfront estates to modern subdivisions. The diverse housing stock means HVAC needs vary significantly, from updating systems in older homes to optimizing efficiency in newer constructions.",
    hvacChallenges: [
      "Varying insulation quality across different-era homes",
      "Large homes requiring zoned heating and cooling",
      "Proximity to ponds and wetlands increasing humidity",
      "New construction requiring proper HVAC sizing"
    ],
    tips: [
      "Have a professional load calculation done before installing new equipment",
      "Consider zoned systems for larger homes to improve efficiency",
      "Upgrade insulation in older homes before replacing HVAC systems",
      "Regular filter changes are essential in wooded areas"
    ]
  },
  {
    slug: "sandwich",
    name: "Sandwich",
    description: "Cape Cod's oldest town with many historic properties",
    image: sandwichImg,
    articleCount: 1,
    longDescription: "As Cape Cod's oldest town, Sandwich is home to numerous historic properties that present unique heating and cooling challenges. Many homes date back centuries and require careful consideration when updating HVAC systems to preserve their historic character while improving comfort.",
    hvacChallenges: [
      "Historic preservation requirements limiting exterior modifications",
      "Original construction with minimal insulation",
      "Old chimneys and flues that may need updating for modern heating",
      "Uneven heating due to original floor plans"
    ],
    tips: [
      "Work with HVAC contractors experienced in historic home retrofits",
      "Consider high-velocity mini-duct systems that fit in small spaces",
      "Have chimneys inspected before using for venting modern equipment",
      "Use smart thermostats to balance comfort and efficiency"
    ]
  },
  {
    slug: "bourne",
    name: "Bourne",
    description: "Gateway to Cape Cod with canal-adjacent properties",
    image: bourneImg,
    articleCount: 1,
    longDescription: "Bourne serves as the gateway to Cape Cod, with properties ranging from canal-side homes to inland neighborhoods. The unique microclimate created by the Cape Cod Canal affects local weather patterns and HVAC needs throughout the town.",
    hvacChallenges: [
      "Canal-effect winds increasing heating demands in winter",
      "Mix of year-round and seasonal properties with different needs",
      "Older homes near the canal with moisture issues",
      "Variable weather patterns requiring flexible HVAC systems"
    ],
    tips: [
      "Ensure proper weatherization to combat canal winds",
      "Consider heat pumps with cold-climate ratings for efficiency",
      "Install programmable thermostats for seasonal properties",
      "Regular maintenance before opening and closing seasonal homes"
    ]
  },
  {
    slug: "osterville",
    name: "Osterville",
    description: "Upscale village with waterfront estates",
    image: ostervilleImg,
    articleCount: 1,
    longDescription: "Osterville is known for its upscale waterfront estates and charming village center. The high-end properties in this area often require sophisticated HVAC solutions that provide optimal comfort while maintaining energy efficiency and aesthetic appeal.",
    hvacChallenges: [
      "Large square footage requiring powerful, efficient systems",
      "Waterfront exposure to salt air and harsh weather",
      "High expectations for quiet, invisible HVAC operation",
      "Multiple zones for guest houses and outbuildings"
    ],
    tips: [
      "Invest in premium, quiet HVAC equipment for luxury homes",
      "Use marine-grade coatings on all outdoor equipment",
      "Consider geothermal systems for large properties",
      "Implement whole-home automation for climate control"
    ]
  },
  {
    slug: "hyannis",
    name: "Hyannis",
    description: "Commercial center with varied residential areas",
    image: hyannisImg,
    articleCount: 1,
    longDescription: "Hyannis serves as Cape Cod's commercial and transportation hub, featuring a diverse mix of residential neighborhoods, from historic Main Street properties to modern apartments. The variety of building types creates diverse HVAC needs throughout the community.",
    hvacChallenges: [
      "Mixed-use buildings requiring commercial and residential solutions",
      "Urban heat island effects in the downtown area",
      "Older multi-family buildings with outdated systems",
      "Noise considerations in densely populated areas"
    ],
    tips: [
      "Consider VRF systems for mixed-use and multi-family buildings",
      "Regular maintenance prevents costly emergency repairs",
      "Upgrade to high-efficiency systems to reduce operating costs",
      "Use sound barriers around outdoor equipment in dense areas"
    ]
  },
  {
    slug: "barnstable",
    name: "Barnstable",
    description: "Historic county seat with diverse villages and harbors",
    image: barnstableImg,
    articleCount: 0,
    longDescription: "Barnstable is the county seat and one of Cape Cod's largest towns, encompassing several distinct villages. From the historic courthouse district to waterfront neighborhoods, the town's varied architecture demands flexible HVAC solutions suited to each area's unique character.",
    hvacChallenges: [
      "Wide variety of home ages and construction styles",
      "Coastal exposure in harbor-adjacent neighborhoods",
      "Large municipal buildings with complex HVAC needs",
      "Seasonal population fluctuations affecting energy demand"
    ],
    tips: [
      "Match HVAC system type to your home's era and construction",
      "Consider dual-fuel systems for maximum flexibility",
      "Schedule maintenance in spring and fall to avoid peak season waits",
      "Insulate attics and crawl spaces before upgrading HVAC equipment"
    ]
  },
  {
    slug: "yarmouth",
    name: "Yarmouth",
    description: "Mid-Cape community with Bass River charm",
    image: yarmouthImg,
    articleCount: 0,
    longDescription: "Yarmouth sits in the heart of Cape Cod, offering a mix of year-round residences and vacation properties along the Bass River and Nantucket Sound. The town's mid-Cape location means homeowners experience the full range of Cape Cod weather extremes.",
    hvacChallenges: [
      "Older vacation homes with deferred HVAC maintenance",
      "Humidity from Bass River and nearby wetlands",
      "Mixed-age housing stock with varying insulation levels",
      "High summer cooling demand from seasonal residents"
    ],
    tips: [
      "Upgrade aging window AC units to efficient mini-splits",
      "Add dehumidification to combat riverside moisture",
      "Have ductwork inspected for leaks in older homes",
      "Install smart thermostats to manage seasonal occupancy"
    ]
  },
  {
    slug: "dennis",
    name: "Dennis",
    description: "Scenic town spanning bay to sound",
    image: dennisImg,
    articleCount: 0,
    longDescription: "Dennis stretches from Cape Cod Bay on the north to Nantucket Sound on the south, giving homeowners exposure to two distinct coastal microclimates. The town's popular beaches and historic villages make it a desirable year-round and vacation destination.",
    hvacChallenges: [
      "Dual-coast exposure creating variable wind and humidity patterns",
      "Many older Cape-style homes with limited ductwork space",
      "Salt air affecting equipment on both north and south sides",
      "Vacation rentals requiring durable, tenant-proof systems"
    ],
    tips: [
      "Choose corrosion-resistant equipment regardless of which coast you're on",
      "Ductless systems work well in classic Cape-style homes",
      "Set up remote monitoring for vacation rental HVAC systems",
      "Clean or replace filters monthly during peak summer rental season"
    ]
  },
  {
    slug: "brewster",
    name: "Brewster",
    description: "Quiet bayside town with kettle ponds and nature trails",
    image: brewsterImg,
    articleCount: 0,
    longDescription: "Brewster is known for its tranquil bayside setting, kettle ponds, and Nickerson State Park. Many homes are tucked among mature trees and near freshwater ponds, creating unique humidity and air quality considerations for HVAC systems.",
    hvacChallenges: [
      "Tree canopy and pollen affecting outdoor unit performance",
      "Pond-adjacent homes with elevated humidity levels",
      "Many homes on well water affecting humidification options",
      "Wooded lots limiting airflow around outdoor equipment"
    ],
    tips: [
      "Keep outdoor units clear of leaves and debris year-round",
      "Consider whole-home air filtration for pollen and allergens",
      "Ensure adequate clearance around outdoor equipment in wooded lots",
      "Add UV air purifiers to combat mold in humid, shaded areas"
    ]
  },
  {
    slug: "harwich",
    name: "Harwich",
    description: "Charming harbor town with cranberry bog heritage",
    image: harwichImg,
    articleCount: 0,
    longDescription: "Harwich is a quintessential Cape Cod town known for its picturesque harbor, cranberry bogs, and welcoming community. The town offers a mix of waterfront properties, village homes, and rural residences, each with distinct heating and cooling needs.",
    hvacChallenges: [
      "Harbor-area salt exposure on HVAC equipment",
      "Low-lying cranberry bog areas with moisture issues",
      "Older village homes with space constraints for new systems",
      "Seasonal tourism increasing demand on local HVAC contractors"
    ],
    tips: [
      "Book HVAC maintenance early — contractors fill up fast in summer",
      "Use raised pads for outdoor units in low-lying areas",
      "Consider heat pump water heaters for additional energy savings",
      "Seal and insulate older homes before investing in new equipment"
    ]
  },
  {
    slug: "chatham",
    name: "Chatham",
    description: "Elegant seaside town at Cape Cod's elbow",
    image: chathamImg,
    articleCount: 0,
    longDescription: "Chatham sits at the 'elbow' of Cape Cod, fully exposed to Atlantic weather. This prestigious seaside community features elegant homes that demand high-performance HVAC systems capable of handling intense coastal conditions while maintaining quiet comfort.",
    hvacChallenges: [
      "Direct Atlantic exposure with severe salt air and wind",
      "Frequent fog and moisture requiring constant dehumidification",
      "High-end homes expecting whisper-quiet HVAC operation",
      "Storm surge risk requiring elevated or protected equipment"
    ],
    tips: [
      "Invest in marine-rated equipment designed for severe coastal environments",
      "Install whole-home dehumidification — Chatham's fog is relentless",
      "Elevate outdoor units above potential flood levels",
      "Schedule quarterly maintenance to combat accelerated salt corrosion"
    ]
  },
  {
    slug: "orleans",
    name: "Orleans",
    description: "Gateway to the Outer Cape with year-round community",
    image: orleansImg,
    articleCount: 0,
    longDescription: "Orleans marks the transition to the Outer Cape and maintains a strong year-round community alongside its summer population. The town's position between Cape Cod Bay and the Atlantic creates a unique microclimate that affects heating and cooling needs.",
    hvacChallenges: [
      "Dual-coast wind exposure from bay and ocean sides",
      "Year-round residents needing reliable cold-weather heating",
      "Sandy soil making ground-source heat pump installation complex",
      "Older downtown buildings with retrofit challenges"
    ],
    tips: [
      "Cold-climate heat pumps are ideal for Orleans' year-round residents",
      "Ensure backup heating for the coldest January and February weeks",
      "Air-source heat pumps are easier to install than ground-source in sandy soil",
      "Weatherize older homes to reduce heating costs during long winters"
    ]
  },
  {
    slug: "eastham",
    name: "Eastham",
    description: "Outer Cape town within the National Seashore",
    image: easthamImg,
    articleCount: 0,
    longDescription: "Eastham is the first town fully within the Cape Cod National Seashore, offering stunning natural beauty alongside unique building restrictions. Homeowners here must balance HVAC needs with environmental regulations and the exposed Outer Cape climate.",
    hvacChallenges: [
      "National Seashore regulations limiting exterior modifications",
      "Extreme wind exposure on the Outer Cape",
      "Sandy, shifting landscapes complicating equipment placement",
      "Limited local HVAC contractors serving the Outer Cape"
    ],
    tips: [
      "Check local building codes before installing visible outdoor equipment",
      "Use wind barriers or strategic landscaping to protect outdoor units",
      "Plan HVAC projects well in advance — Outer Cape contractors book quickly",
      "Mini-splits with low-profile outdoor units work well in regulated areas"
    ]
  },
  {
    slug: "wellfleet",
    name: "Wellfleet",
    description: "Artistic harbor community famous for oysters",
    image: wellfleetImg,
    articleCount: 0,
    longDescription: "Wellfleet is a small, tight-knit community known for its oyster industry, art galleries, and stunning harbor. The town's remote Outer Cape location and mix of modest cottages and renovated homes create specific HVAC challenges for year-round and seasonal residents.",
    hvacChallenges: [
      "Remote location with longer response times for HVAC emergencies",
      "Many small cottages originally built without central heating",
      "Harbor moisture and fog affecting equipment longevity",
      "Limited natural gas service — most homes use propane or oil"
    ],
    tips: [
      "Heat pumps can eliminate dependence on propane or oil delivery",
      "Keep emergency portable heaters for power outage situations",
      "Ductless mini-splits are perfect for converting unheated cottages",
      "Establish a relationship with a reliable HVAC contractor before emergencies"
    ]
  },
  {
    slug: "truro",
    name: "Truro",
    description: "Secluded dune landscape approaching Provincetown",
    image: truroImg,
    articleCount: 0,
    longDescription: "Truro is one of Cape Cod's most secluded and sparsely populated towns, characterized by rolling dunes, dramatic bluffs, and scattered homes. The exposed landscape and limited infrastructure create unique HVAC considerations for this small Outer Cape community.",
    hvacChallenges: [
      "Extreme exposure to wind and weather with minimal shelter",
      "Very limited local HVAC service providers",
      "Many homes are seasonal with winterization needs",
      "Sandy terrain making some installations challenging"
    ],
    tips: [
      "Invest in wind-rated equipment designed for exposed locations",
      "Properly winterize HVAC systems if closing your home for the season",
      "Consider battery backup for heat pumps during winter power outages",
      "Build relationships with contractors from neighboring towns early"
    ]
  },
  {
    slug: "provincetown",
    name: "Provincetown",
    description: "Vibrant tip of Cape Cod with dense village center",
    image: provincetownImg,
    articleCount: 0,
    longDescription: "Provincetown sits at the very tip of Cape Cod, surrounded by water on three sides. The town's dense village center, historic buildings, and extreme coastal exposure make HVAC installation and maintenance uniquely challenging — but also critically important for year-round comfort.",
    hvacChallenges: [
      "Surrounded by ocean — maximum salt air and moisture exposure",
      "Dense downtown with tight building spacing and noise concerns",
      "Historic district restrictions on visible equipment",
      "Most remote Cape town with longest contractor travel times"
    ],
    tips: [
      "Marine-grade equipment is essential — standard units corrode rapidly",
      "Ductless mini-splits solve space and noise issues in dense downtown",
      "Schedule all maintenance during shoulder seasons for better availability",
      "Whole-home dehumidification is a must at the tip of the Cape"
    ]
  }
];

export const getTownBySlug = (slug: string): Town | undefined => {
  return towns.find(town => town.slug === slug);
};
