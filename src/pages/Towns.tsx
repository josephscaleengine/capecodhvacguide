import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight } from "lucide-react";
import { towns } from "@/data/towns";

const Towns = () => {
  return (
    <>
      <Helmet>
        <title>HVAC Resources by Cape Cod Town | Cape Cod HVAC Guide</title>
        <meta name="description" content="Find local HVAC tips and resources for your Cape Cod town — from Falmouth and Hyannis to Provincetown and Chatham." />
        <link rel="canonical" href="https://capecodhvacguide.com/towns" />
      </Helmet>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-peach" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Local Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HVAC Resources by Town</h1>
            <p className="text-lg text-white/70 max-w-xl">
              Every Cape Cod community has unique heating and cooling considerations. Find guidance specific to your area.
            </p>
          </div>
        </section>

        {/* Towns Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {towns.map((town) => (
                <Link
                  key={town.slug}
                  to={`/towns/${town.slug}`}
                  className="group relative block rounded-xl overflow-hidden h-64 card-hover"
                >
                  <img
                    src={town.image}
                    alt={`${town.name}, Cape Cod`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-bold text-2xl text-white mb-1">{town.name}</h2>
                    <p className="text-white/70 text-sm line-clamp-1 mb-3">{town.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-peach text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default Towns;