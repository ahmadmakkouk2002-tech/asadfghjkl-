import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HardHat,
  PaintRoller,
  CheckCircle2,
  Phone,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image6 from "@/assets/image6.jpg";
import image9 from "@/assets/image9.jpg";
import basementImage from "@/assets/Gemini_Generated_Image_q6sfceq6sfceq6sf.png";
import interiorImage from "@/assets/6-300x200.jpg";

interface Feature {
  text: string;
  image: string;
}

const mainServices = [
  {
    id: "construction",
    icon: HardHat,
    number: "01",
    title: "Construction Services",
    tagline: "Building with precision. Delivering on time.",
    description:
      "From ground-up builds to large-scale renovations, Jibran Construction brings over 25 years of expertise serving California. We handle commercial, residential, and mixed-use projects with a focus on quality craftsmanship and clear communication at every phase.",
    features: [
      { text: "Custom home construction and additions", image: image1 },
      { text: "Tenant improvements and build-outs", image: image9 },
      { text: "Project management and general contracting", image: image4 },
      { text: "Site preparation and demolition", image: image6 },
    ] as Feature[],
  },
  {
    id: "remodeling",
    icon: PaintRoller,
    number: "02",
    title: "Remodeling Services",
    tagline: "Transforming spaces. Exceeding expectations.",
    description:
      "We specialize in transforming existing spaces to better suit your needs. Whether it's a complete kitchen overhaul, a modern bathroom update, or a full interior renovation, our team works with you to bring your vision to life with minimal disruption.",
    features: [
      { text: "Kitchen and bathroom renovations", image: image3 },
      { text: "Full home and apartment remodeling", image: image2 },
      { text: "Basement and attic conversions", image: basementImage },
      { text: "Interior design and space planning", image: interiorImage },
    ] as Feature[],
  },
];

const ConstructionRemodeling = () => {
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

      {/* Hero */}
      <section className="pt-28 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-gold mb-6 leading-tight">
              Construction & Remodeling
            </h1>
            <p className="text-lg md:text-xl font-body text-gold-light/60 max-w-2xl">
              From ground-up builds to beautiful renovations, we are your trusted partner for quality construction and remodeling.
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

      {/* Link to Other Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Facility & Emergency Services
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
              We also offer a complete range of facility maintenance and 24/7 emergency response services to keep your business running smoothly.
            </p>
            <Link 
              to="/facility-emergency" 
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ConstructionRemodeling;
