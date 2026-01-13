import falmouthImg from "@/assets/towns/falmouth.jpg";
import mashpeeImg from "@/assets/towns/mashpee.jpg";
import sandwichImg from "@/assets/towns/sandwich.jpg";
import bourneImg from "@/assets/towns/bourne.jpg";
import ostervilleImg from "@/assets/towns/osterville.jpg";
import hyannisImg from "@/assets/towns/hyannis.jpg";

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
  }
];

export const getTownBySlug = (slug: string): Town | undefined => {
  return towns.find(town => town.slug === slug);
};
