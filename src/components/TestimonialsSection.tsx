import { motion } from "framer-motion";
import wahoos from "@/assets/partners/wahoos.png";
import hawkers from "@/assets/partners/hawkers.png";
import petSupermarket from "@/assets/partners/pet-supermarket.png";
import bevmo from "@/assets/partners/bevmo.png";
import bathBodyWorks from "@/assets/partners/bath-body-works.png";
import tacoBell from "@/assets/partners/taco-bell.png";
import tesla from '@/assets/partners/pngimg.com - tesla_logo_PNG12.png';
import victoriasSecret from '@/assets/partners/png-clipart-logo-victoria-s-secret-graphics-brand-victorias-secret-stores-llc-givenchy-perfume-for-women-thumbnail.png';
import abercrombie from '@/assets/partners/images (6).png';


const partners = [
  { name: "Wahoo's", logo: wahoos },
  { name: "Hawkers", logo: hawkers },
  { name: "Pet Supermarket", logo: petSupermarket },
  { name: "BevMo!", logo: bevmo },
  { name: "Bath & Body Works", logo: bathBodyWorks },
  { name: "Taco Bell", logo: tacoBell },
  { name: "Tesla", logo: tesla },
  { name: "Victoria's Secret", logo: victoriasSecret },
  { name: "Abercrombie", logo: abercrombie },
];

const TestimonialsSection = () => {
  return (
    <section id="partners" className="py-24 bg-warm-gray overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2">Proudly Servicing</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">Brands that count on Jibran.</h2>
        </motion.div>
        <div className="relative">
          <div className="flex animate-scroll-left gap-16 w-max">
            {[...partners, ...partners].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center justify-center w-40 h-28 bg-background rounded-2xl p-6 shadow-sm border border-border">
                <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;