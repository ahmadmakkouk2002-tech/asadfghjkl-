import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HardHat, AlertTriangle, Paintbrush, ArrowRight } from "lucide-react";

// New images for the carousels
import scissorLift from "@/assets/scissor-lift.jpg";
import electrical from "@/assets/electrical.jpg";
import snaking from "@/assets/snaking.jpg";
import hydroTruck from "@/assets/hydro-truck.png";
import work1 from "@/assets/1.jpg";

import hvac from "@/assets/hvac.jpg";
import hoodCleaning from "@/assets/hood-cleaning.jpg";
import work6 from "@/assets/6.jpg.jpeg";
import work7 from "@/assets/7.jpg.jpeg";
import work8 from "@/assets/8.jpg.jpeg";

const constructionImages = [scissorLift, electrical, snaking, hydroTruck, work1];
const remodelingImages = [hvac, hoodCleaning, work6, work7, work8];

// Original, always-on carousel hook
const useImageCarousel = (images: string[], interval = 4000) => {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return { current: images[index], index };
};

const OwnersSection = () => {
  const construction = useImageCarousel(constructionImages);
  const remodeling = useImageCarousel(remodelingImages, 5000);

  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 min-h-[420px]">
        {/* Construction & Emergency Side */}
        <Link to="/services#construction" className="group relative overflow-hidden block">
          {constructionImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Construction and emergency services"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                i === construction.index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-primary/70 transition-opacity duration-500 group-hover:bg-primary/50" />

          {/* Door effect */}
          <div className="absolute inset-0 z-10 flex pointer-events-none">
            <div className="w-1/2 h-full bg-primary origin-left transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:-rotate-y-90"
                 style={{ transformOrigin: "left center" }} />
            <div className="w-1/2 h-full bg-primary origin-right transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:rotate-y-90"
                 style={{ transformOrigin: "right center" }} />
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full min-h-[420px] text-center px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <HardHat className="w-7 h-7 text-accent" />
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-gold leading-tight">
                Construction &<br />Emergency
              </h2>
              <p className="font-body text-gold-light/70 max-w-sm mx-auto">
                Custom builds, renovations & 24/7 emergency response — fast, reliable, and built to last.
              </p>
              <span className="inline-flex items-center gap-2 font-body font-semibold text-accent mt-4 transition-transform duration-300 group-hover:translate-x-2">
                Explore Services <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </div>
        </Link>

        {/* Remodeling Side */}
        <Link to="/services#facility-maintenance" className="group relative overflow-hidden block">
          {remodelingImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Remodeling services"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                i === remodeling.index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-secondary/75 transition-opacity duration-500 group-hover:bg-secondary/50" />

          {/* Door effect */}
          <div className="absolute inset-0 z-10 flex pointer-events-none">
            <div className="w-1/2 h-full bg-secondary origin-left transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:-rotate-y-90"
                 style={{ transformOrigin: "left center" }} />
            <div className="w-1/2 h-full bg-secondary origin-right transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:rotate-y-90"
                 style={{ transformOrigin: "right center" }} />
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full min-h-[420px] text-center px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Paintbrush className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-gold leading-tight">
                Remodeling
              </h2>
              <p className="font-body text-gold-light/70 max-w-sm mx-auto">
                Transform your space with expert remodeling — kitchens, bathrooms, full home renovations.
              </p>
              <span className="inline-flex items-center gap-2 font-body font-semibold text-accent mt-4 transition-transform duration-300 group-hover:translate-x-2">
                Explore Services <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OwnersSection;
