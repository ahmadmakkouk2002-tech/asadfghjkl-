import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Droplets,
  Thermometer,
  PaintRoller,
  Signpost,
  Square,
  Bolt,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import workImage13 from "@/assets/13.jpg.jpeg";
import facility2 from "@/assets/facility2.jpg";
import workImage7 from "@/assets/7.jpg.jpeg";
import workImage10 from "@/assets/10.jpg.jpeg";
import workImage8 from "@/assets/8.jpg.jpeg";
import workImage1 from "@/assets/1.jpg";
import workImage6 from "@/assets/6.jpg.jpeg";
import workImage3 from "@/assets/3.jpg.jpeg";
import heroBg from "@/assets/work/room/Hulbert(1).jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import newImage from "@/assets/2.jpg";

interface Feature {
  text: string;
  image: string;
}

const mainServices = [
  {
    id: "facility-maintenance",
    icon: Wrench,
    number: "01",
    title: "Facility Management",
    tagline: "reactive care. Fewer surprises.",
    description:
      "Our Facility Management programs are designed to keep your buildings running smoothly year-round. We specialize in a reactive approach — responding fast when the unexpected happens to get you back on track with minimal downtime.",
    features: [
      { text: "Preventative maintenance programs", image: workImage13 },
      { text: "HVAC, plumbing, and electrical repairs", image: facility2 },
      { text: "Interior and exterior upkeep", image: workImage7 },
      { text: "Smart scheduling and walkthroughs", image: workImage10 },
    ] as Feature[],
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    number: "02",
    title: "Emergency Services",
    tagline: "When it can't wait, we don't.",
    description:
      "Midnight call? Flooded floor? Failed system? Jibran's emergency response team is available around the clock. We dispatch fast, act with urgency, and stay until it's solved — protecting your property, your people, and your bottom line.",
    features: [
      { text: "24/7 emergency dispatch", image: workImage8 },
      { text: "Flood, fire, and storm damage response", image: workImage1 },
      { text: "Electrical and plumbing emergencies", image: workImage6 },
      { text: "Board-up and temporary securing", image: workImage3 },
    ] as Feature[],
  },
];

const otherServices = [
  {
    icon: Droplets,
    title: "Plumbing & Hydro-Jetting",
    description:
      "Comprehensive drain cleaning, leak repair, and fixture installation.",
  },
  {
    icon: Thermometer,
    title: "HVAC Services",
    description:
      "Installation, repair, and maintenance for heating and cooling systems.",
  },
  {
    icon: Bolt,
    title: "Electrical Services",
    description:
      "Full-range electrical services including repairs, wiring, and panel upgrades.",
  },
  {
    icon: PaintRoller,
    title: "Painting & Drywall",
    description:
      "Professional interior/exterior painting and drywall installation/repair.",
  },
  {
    icon: Signpost,
    title: "Signage & Lighting",
    description: "Custom sign fabrication, installation, and lighting maintenance.",
  },
  {
    icon: Square,
    title: "Glass & Window Repair",
    description:
      "Fast and reliable repair and replacement for windows, doors, and storefronts.",
  },
  {
    icon: Wrench,
    title: "Parking Lot Repairs",
    description: "Asphalt patching, crack sealing, and striping for parking facilities.",
  },
];


const FacilityEmergency = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="pt-40 pb-24 bg-cover bg-fixed bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        
        {/* Floating Images */}
        <motion.div
            className="hidden lg:block absolute top-1/4 left-[5%] w-48 h-auto rounded-lg shadow-2xl"
            animate={{ y: [-20, 20], x: [-10, 10] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
            <img src={image4} alt="Renovated room" className="rounded-lg" style={{ transform: 'rotate(-8deg)' }} />
        </motion.div>

        <motion.div
            className="hidden xl:block absolute top-3/4 left-[20%] w-32 h-auto rounded-lg shadow-2xl"
            animate={{ y: [22, -22] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        >
            <img src={image5} alt="Construction site" className="rounded-lg" style={{ transform: 'rotate(10deg)' }} />
        </motion.div>

        <motion.div
            className="hidden lg:block absolute top-[20%] right-[8%] w-56 h-auto rounded-lg shadow-2xl"
            animate={{ y: [-25, 25], x: [10, -10] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        >
            <img src={newImage} alt="Modern interior" className="rounded-lg" style={{ transform: 'rotate(5deg)' }} />
        </motion.div>

        <div className="absolute inset-0 bg-primary/60" />


        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-gold mb-6 leading-tight">
              Facility Management & Emergencies
            </h1>
            <p className="text-lg md:text-xl font-body text-gold-light/80 max-w-2xl mx-auto">
              Keeping your operations running smoothly, 24/7. reactive maintenance and rapid-response emergency services you can rely on.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {mainServices.map((svc, i) => (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="scroll-mt-24 bg-primary rounded-3xl border border-gold/10 overflow-hidden hover:border-gold/25 transition-colors"
              >
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
                  <div className="p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-5xl md:text-6xl font-display font-bold text-accent/20">
                          {svc.number}
                        </span>
                        <svc.icon className="w-10 h-10 text-accent" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display text-gold mb-3">
                        {svc.title}
                      </h2>
                      <p className="text-lg font-display italic text-gold-light/50 mb-6">
                        {svc.tagline}
                      </p>
                      <p className="font-body text-gold-light/60 leading-relaxed text-base">
                        {svc.description}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:7608056351"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        (760) 805-6351
                      </a>
                      <a
                        href="/#contact"
                        className="px-6 py-3 border border-gold/30 text-gold font-body font-semibold rounded-full hover:bg-gold/10 transition-colors text-sm text-center"
                      >
                        Get a Quote
                      </a>
                    </div>
                  </div>

                  <div className="bg-secondary/50 border-t lg:border-t-0 lg:border-l border-gold/10 px-10 lg:px-14 py-10 lg:py-14">
                    <h3 className="text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-8">
                      What's Included
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {svc.features.map((feat, idx) => (
                        <motion.div
                          key={feat.text}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.08,
                          }}
                          className="rounded-xl overflow-hidden border border-gold/10"
                        >
                          <div className="h-28 md:h-32 overflow-hidden">
                            <img
                              src={feat.image}
                              alt={feat.text}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-start gap-2.5 p-3 bg-primary/80">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="font-body text-gold-light/70 text-xs leading-relaxed">
                              {feat.text}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Carousel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Our Other Services
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              We offer a complete range of construction and maintenance
              services to handle any job, big or small.
            </p>
          </div>
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {otherServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <div className="bg-primary border border-gold/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-gold/25 transition-all h-full">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                        <service.icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="font-display text-2xl text-gold mb-3">
                        {service.title}
                      </h3>
                      <p className="font-body text-gold-light/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Link to Other Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Construction & Remodeling Services
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
              From ground-up builds to beautiful renovations, we are your trusted partner for quality construction and remodeling.
            </p>
            <Link 
              to="/construction-remodeling" 
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Your Vision. Our Mission."
        phone="(760) 424-5436"
        email="procurement@jibranconstruction.com"
      />
      <Footer />
    </div>
  );
};

export default FacilityEmergency;
