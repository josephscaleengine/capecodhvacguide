import TownCard from "./TownCard";
import falmouthImg from "@/assets/towns/falmouth.jpg";
import mashpeeImg from "@/assets/towns/mashpee.jpg";
import sandwichImg from "@/assets/towns/sandwich.jpg";
import bourneImg from "@/assets/towns/bourne.jpg";
import ostervilleImg from "@/assets/towns/osterville.jpg";
import hyannisImg from "@/assets/towns/hyannis.jpg";

const towns = [
  {
    name: "Falmouth",
    description: "Coastal community with historic homes and modern developments",
    image: falmouthImg,
    articleCount: 1,
  },
  {
    name: "Mashpee",
    description: "Growing community with diverse housing stock",
    image: mashpeeImg,
    articleCount: 1,
  },
  {
    name: "Sandwich",
    description: "Cape Cod's oldest town with many historic properties",
    image: sandwichImg,
    articleCount: 1,
  },
  {
    name: "Bourne",
    description: "Gateway to Cape Cod with canal-adjacent properties",
    image: bourneImg,
    articleCount: 1,
  },
  {
    name: "Osterville",
    description: "Upscale village with waterfront estates",
    image: ostervilleImg,
    articleCount: 1,
  },
  {
    name: "Hyannis",
    description: "Commercial center with varied residential areas",
    image: hyannisImg,
    articleCount: 1,
  },
];

const TownsSection = () => {
  return (
    <section id="towns" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            HVAC Resources by Town
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every Cape Cod town has unique heating and cooling challenges. Find specific 
            guidance for your community.
          </p>
        </div>

        {/* Town Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {towns.map((town) => (
            <TownCard key={town.name} {...town} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Cape Cod Towns
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TownsSection;
