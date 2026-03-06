import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import scissorLift from "@/assets/work/scissor-lift.jpg";
import hvac from "@/assets/work/hvac.jpg";
import facility4 from "@/assets/facility4.jpg";
import B from "@/assets/B.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent mb-4">
              California
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-gold leading-tight mb-6">
              Elevating Facility Performance Across Every Property.
            </h1>
            <p className="text-lg text-gold-light/70 font-body mb-8 max-w-lg">
              For over 25 years, we’ve supported commercial and industrial facilities across California — delivering reliable service, operational efficiency, and unmatched workmanship.
            </p>
            
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl h-[280px]">
                  <img src={B} alt="Commercial construction work" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl h-[180px]">
                  <img src={facility4} alt="Electrical work" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl h-[180px]">
                  <img src={hvac} alt="HVAC maintenance" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl h-[280px] relative">
                  <img src={scissorLift} alt="Team at work" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-gold text-sm font-semibold">25+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
