import { Link } from "react-router-dom";
import TownCard from "./TownCard";
import { towns } from "@/data/towns";

const TownsSection = () => {
  return (
    <section id="towns" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            HVAC Resources by Town
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every Cape Cod town has unique heating and cooling challenges. Find specific 
            guidance for your community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {towns.map((town) => (
            <Link key={town.slug} to={`/towns/${town.slug}`}>
              <TownCard
                name={town.name}
                description={town.description}
                image={town.image}
                articleCount={town.articleCount}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TownsSection;
