import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HardHat,
  PaintRoller,
  CheckCircle2,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/1 (1).jpg";
import image3 from "@/assets/3.jpg.jpeg";
import workImage2 from "@/assets/2.jpg";
import image6 from "@/assets/image6.jpg";
import image9 from "@/assets/image9.jpg";
import basementImage from "@/assets/Gemini_Generated_Image_q6sfceq6sfceq6sf.png";
import interiorImage from "@/assets/6-300x200.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import newImage from "@/assets/work/toilet/172_window_AquitaneCt_May2023.webp";
import newSmallestImage from "@/assets/work/kitchen/9.jpg";

import kitchen1 from "@/assets/work/kitchen/096_AquitaineCt_May2023.webp";
import kitchen2 from "@/assets/work/kitchen/1.jpg";
import kitchen3 from "@/assets/work/kitchen/10.jpg";
import kitchen4 from "@/assets/work/kitchen/11.jpg";
import kitchen5 from "@/assets/work/kitchen/115_AquitaneCt_May2023.webp";
import kitchen6 from "@/assets/work/kitchen/128_AquitaineCt_May2023.webp";
import kitchen7 from "@/assets/work/kitchen/2-5(4).jpg";
import kitchen8 from "@/assets/work/kitchen/2.jpg";
import kitchen9 from "@/assets/work/kitchen/3.jpg";
import kitchen10 from "@/assets/work/kitchen/4.webp";
import kitchen11 from "@/assets/work/kitchen/5.jpg";
import kitchen12 from "@/assets/work/kitchen/6.jpg";
import kitchen13 from "@/assets/work/kitchen/9.jpg";
import kitchen14 from "@/assets/work/kitchen/DSC_0322-EditFinal.webp";
import kitchen15 from "@/assets/work/kitchen/DSC_0334-EditFinal.jpg";
import kitchen16 from "@/assets/work/kitchen/DSC_0352-HDR-EditFinal.jpg";
import kitchen17 from "@/assets/work/kitchen/IMG_1625.jpeg";
import kitchen18 from "@/assets/work/kitchen/IMG_1639.jpeg";

import room1 from "@/assets/work/room/051_AquitaineCt_May2023(1).jpg";
import room2 from "@/assets/work/room/085_TV_AquitaneCt_May2023(1).jpg";
import room3 from "@/assets/work/room/151_AquitaineCt_May2023(1).jpg";
import room4 from "@/assets/work/room/182_AquitaneCt_May2023(1).jpg";
import room5 from "@/assets/work/room/196_AquitaineCt_May2023(1).jpg";
import room6 from "@/assets/work/room/2-5(16)(1).jpg";
import room7 from "@/assets/work/room/2-5(5)(1).jpg";
import room8 from "@/assets/work/room/DSC_0229-HDR-EditFinal(1).jpg";
import room9 from "@/assets/work/room/DSC_0250-EditFinal(1).jpg";
import room10 from "@/assets/work/room/DSC_0267-HDR-EditFinal(1).jpg";
import room11 from "@/assets/work/room/DSC_0280-HDR-EditFinal(1).jpg";
import room12 from "@/assets/work/room/DSC_0295-EditFinal(1).jpg";
import room13 from "@/assets/work/room/DSC_0375-HDR-EditFinal(1).jpg";
import room14 from "@/assets/work/room/DSC_0391-HDR-EditFinal(1).jpg";
import room15 from "@/assets/work/room/DSC_0452-HDR-EditFinal(1).jpg";
import room16 from "@/assets/work/room/Final-1-2(1).jpg";
import room17 from "@/assets/work/room/Hulbert(1).jpg";
import room18 from "@/assets/work/room/IMG_1626(1).jpeg";
import room19 from "@/assets/work/room/IMG_1634(1).jpeg";
import room20 from "@/assets/work/room/New(1).jpg";

import toilet1 from "@/assets/work/toilet/024_Final_AquitaineCt_May2023.webp";
import toilet2 from "@/assets/work/toilet/172_window_AquitaneCt_May2023.webp";
import toilet3 from "@/assets/work/toilet/2-5(11)(1).jpg";
import toilet4 from "@/assets/work/toilet/2-5(11).jpg";
import toilet5 from "@/assets/work/toilet/2-5(11).webp";
import toilet6 from "@/assets/work/toilet/2-5(20)(1).jpg";
import toilet7 from "@/assets/work/toilet/2-5(20).jpg";
import toilet8 from "@/assets/work/toilet/Final-5(1).jpg";
import toilet9 from "@/assets/work/toilet/Final-5.jpg";
import toilet10 from "@/assets/work/toilet/Final-5.webp";
import toilet11 from "@/assets/work/toilet/IMG_1628(1).jpeg";
import toilet12 from "@/assets/work/toilet/IMG_1628.jpeg";
import toilet13 from "@/assets/work/toilet/IMG_1629(1).jpeg";
import toilet14 from "@/assets/work/toilet/IMG_1629.jpeg";
import toilet15 from "@/assets/work/toilet/IMG_1632(1).jpeg";
import toilet16 from "@/assets/work/toilet/IMG_1632.jpeg";

const categories = [
  { id: "all", label: "All Work" },
  { id: "kitchens", label: "Kitchens" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "living-rooms", label: "Living Rooms" },
] as const;

type Category = (typeof categories)[number]["id"];

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  tall?: boolean;
  wide?: boolean;
}

const galleryImages: GalleryImage[] = [
  { src: kitchen1, alt: "Kitchen 1", category: "kitchens", tall: true },
  { src: kitchen2, alt: "Kitchen 2", category: "kitchens" },
  { src: kitchen3, alt: "Kitchen 3", category: "kitchens" },
  { src: kitchen4, alt: "Kitchen 4", category: "kitchens", wide: true },
  { src: kitchen5, alt: "Kitchen 5", category: "kitchens" },
  { src: kitchen6, alt: "Kitchen 6", category: "kitchens", tall: true },
  { src: kitchen7, alt: "Kitchen 7", category: "kitchens" },
  { src: kitchen8, alt: "Kitchen 8", category: "kitchens" },

  { src: toilet1, alt: "Bathroom 1", category: "bathrooms", wide: true },
  { src: toilet2, alt: "Bathroom 2", category: "bathrooms" },
  { src: toilet3, alt: "Bathroom 3", category: "bathrooms", tall: true },
  { src: toilet4, alt: "Bathroom 4", category: "bathrooms" },
  { src: toilet5, alt: "Bathroom 5", category: "bathrooms" },
  { src: toilet6, alt: "Bathroom 6", category: "bathrooms" },
  { src: toilet7, alt: "Bathroom 7", category: "bathrooms", tall: true },
  { src: toilet8, alt: "Bathroom 8", category: "bathrooms" },

  { src: room1, alt: "Living room 1", category: "living-rooms", tall: true },
  { src: room2, alt: "Living room 2", category: "living-rooms" },
  { src: room3, alt: "Living room 3", category: "living-rooms", wide: true },
  { src: room4, alt: "Living room 4", category: "living-rooms" },
  { src: room5, alt: "Living room 5", category: "living-rooms" },
  { src: room6, alt: "Living room 6", category: "living-rooms", tall: true },
  { src: room7, alt: "Living room 7", category: "living-rooms" },
  { src: room8, alt: "Living room 8", category: "living-rooms" },
];

const countByCategory = (cat: string) =>
  galleryImages.filter((img) => img.category === cat).length;


interface Feature {
  text: string;
  image: string;
}

const mainServices = [
  {
    id: "remodeling",
    icon: PaintRoller,
    number: "01",
    title: "Remodeling Services",
    tagline: "Transforming spaces. Exceeding expectations.",
    description:
      "We specialize in transforming existing spaces to better suit your needs. Whether it's a complete kitchen overhaul, a modern bathroom update, or a full interior renovation, our team works with you to bring your vision to life with minimal disruption.",
    features: [
      { text: "Kitchen and bathroom renovations", image: toilet6 },
      { text: "Full home and apartment remodeling", image: room1 },
      { text: "Basement and attic conversions", image: basementImage },
      { text: "Interior design and space planning", image: interiorImage },
    ] as Feature[],
  },
  {
    id: "construction",
    icon: HardHat,
    number: "02",
    title: "Construction Services",
    tagline: "Building with precision. Delivering on time.",
    description:
      "From ground-up builds to large-scale renovations, Jibran Construction brings over 25 years of expertise serving California. We handle commercial, residential, and mixed-use projects with a focus on quality craftsmanship and clear communication at every phase.",
    features: [
      { text: "Custom home construction and additions", image: image1 },
      { text: "Tenant improvements and build-outs", image: image9 },
      { text: "Project management and general contracting", image: workImage2 },
      { text: "Site preparation and demolition", image: image6 },
    ] as Feature[],
  },
];

const ConstructionRemodeling = () => {
  const { hash } = useLocation();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

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
  
    const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
            <img src={image1} alt="Renovated room" className="rounded-lg" style={{ transform: 'rotate(-8deg)' }} />
        </motion.div>

        <motion.div
            className="hidden xl:block absolute top-3/4 left-[20%] w-32 h-auto rounded-lg shadow-2xl"
            animate={{ y: [22, -22] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        >
            <img src={newSmallestImage} alt="Construction site" className="rounded-lg" style={{ transform: 'rotate(10deg)' }} />
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
              Construction & Remodeling
            </h1>
            <p className="text-lg md:text-xl font-body text-gold-light/80 max-w-2xl mx-auto">
              From ground-up builds to beautiful renovations, we are your trusted partner for quality construction and remodeling.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <a
                href="tel:7608056351"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (760) 805-6351
              </a>
              <a
                href="/quote"
                className="px-6 py-3 border border-gold/30 text-gold font-body font-semibold rounded-full hover:bg-gold/10 transition-colors text-sm text-center"
              >
                Get a Free Estimate
              </a>
            </div>
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
                        href="/quote"
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
              Facility Management & Emergencies
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
              We also offer a complete range of Facility Management and 24/7 emergency response services to keep your business running smoothly.
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
      
      {/* Sticky Category Tabs */}
      <section className="sticky top-16 z-30 bg-primary/80 backdrop-blur-xl border-b border-gold/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-1.5 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 whitespace-nowrap"
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeCategory === cat.id
                      ? "text-accent-foreground"
                      : "text-gold-light/40 hover:text-gold"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.category}-${img.alt}`}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-gold/5 cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={`w-full object-cover ${
                        img.tall
                          ? "h-[380px] md:h-[460px]"
                          : img.wide
                            ? "h-[200px] md:h-[240px]"
                            : "h-[260px] md:h-[320px]"
                      }`}
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div
                      initial={false}
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/90 text-accent-foreground font-body text-[10px] font-bold uppercase tracking-wider">
                        {img.category.replace("-", " ")}
                      </span>
                      <div className="flex items-end justify-between mt-3">
                        <p className="font-display text-gold text-base">{img.alt}</p>
                        <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:text-accent-foreground transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>


      <CTASection />
      <Footer />
    </div>
  );
};

export default ConstructionRemodeling;
