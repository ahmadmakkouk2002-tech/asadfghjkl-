import { motion } from "framer-motion";
import wahoos from "@/assets/partners/wahoos.png";
import hawkers from "@/assets/partners/hawkers.png";
import petSupermarket from "@/assets/partners/pet-supermarket.png";
import bevmo from "@/assets/partners/bevmo.png";
import bathBodyWorks from "@/assets/partners/bath-body-works.png";
import tacoBell from "@/assets/partners/taco-bell.png";

const partners = [
  { name: "Wahoo's", logo: wahoos },
  { name: "Hawkers", logo: hawkers },
  { name: "Pet Supermarket", logo: petSupermarket },
  { name: "BevMo!", logo: bevmo },
  { name: "Bath & Body Works", logo: bathBodyWorks },
  { name: "Taco Bell", logo: tacoBell },
];

const TestimonialsSection = () => {
  return (
    <section id="partners" className="py-24 bg-warm-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2">Trusted Partners</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">Brands that count on Jibran.</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center justify-center bg-background rounded-2xl p-6 shadow-sm border border-border h-28"
            >
              <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
