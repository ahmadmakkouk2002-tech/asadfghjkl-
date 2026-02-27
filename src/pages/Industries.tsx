import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  HeartPulse,
  Store,
  Landmark,
  Truck,
  Home,
  CheckCircle2,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const industries = [
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    title: "Restaurants",
    headline: "Jibran Services for the Restaurant Industry",
    tagline: "Nationwide coverage. Local care.",
    description:
      "Restaurant operations never stop, and neither do we. At Jibran, we help restaurant and QSR brands keep locations open, compliant, and on brand, no matter where they're located. From emergency plumbing and electrical issues to full-scale refreshes, we understand the pace and pressure of food service environments.",
    features: [
      "Rapid Response — Fast turnaround for emergencies, even during off-hours",
      "Multi-Trade Coverage — Plumbing, electrical, carpentry, pest control, signage, and more",
      "Flexible Scheduling — Work coordinated around open hours and high-traffic windows",
      "Health & Safety Focus — Clean, compliant fixes that protect staff and customers",
      "Nationwide Consistency — Standardized processes across every store",
      "Clear Communication — Real-time updates from someone who knows your account",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    headline: "Jibran Services for Healthcare Facilities",
    tagline: "Clean. Compliant. Discreet.",
    description:
      "Healthcare facilities require a higher standard of care — for both patients and infrastructure. Jibran delivers facility maintenance that meets strict compliance requirements while minimizing disruption to daily operations, patient care, and staff workflows.",
    features: [
      "HIPAA-aware facility repairs and maintenance",
      "Infection control-conscious work practices",
      "After-hours and weekend scheduling",
      "Emergency plumbing, electrical, and HVAC response",
      "Compliance documentation and reporting",
      "Multi-site coordination for health systems",
    ],
  },
  {
    id: "retail",
    icon: Store,
    title: "Retail",
    headline: "Jibran Services for Retail Locations",
    tagline: "Keep stores open. Keep customers happy.",
    description:
      "From broken doors to nationwide rollouts, we keep retail locations safe, open, and running without disruption. Jibran understands the urgency of retail — every hour a store is down costs revenue. We respond fast and fix it right the first time.",
    features: [
      "Storefront and interior repairs",
      "Lighting, signage, and fixture installation",
      "Roll-out and refresh programs",
      "Loss prevention-related repairs",
      "ADA compliance updates",
      "Multi-location vendor management",
    ],
  },
  {
    id: "financial",
    icon: Landmark,
    title: "Financial",
    headline: "Jibran Services for Financial Institutions",
    tagline: "Trusted care. Single point of contact.",
    description:
      "Financial institutions demand discretion, security, and reliability. Jibran provides trusted facility care for banks, credit unions, and corporate offices with urgent response and a dedicated account manager for every engagement.",
    features: [
      "Security-conscious facility repairs",
      "ATM area and lobby maintenance",
      "HVAC, plumbing, and electrical services",
      "After-hours and weekend scheduling",
      "Dedicated account management",
      "Emergency board-up and restoration",
    ],
  },
  {
    id: "distribution",
    icon: Truck,
    title: "Distribution",
    headline: "Jibran Services for Logistics & Distribution",
    tagline: "Keep goods moving. Minimize downtime.",
    description:
      "Plumbing, power, or safety issues in a distribution center can halt operations and cost thousands per hour. Jibran responds fast to keep goods moving and downtime minimal across warehouses, fulfillment centers, and logistics hubs.",
    features: [
      "Dock door and loading area repairs",
      "Industrial plumbing and electrical",
      "Concrete and flooring maintenance",
      "Fire suppression system support",
      "Lighting upgrades and replacements",
      "Preventative maintenance programs",
    ],
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential",
    headline: "Jibran Services for Residential Properties",
    tagline: "Quality craftsmanship. Personal attention.",
    description:
      "Whether you're building a new home, renovating an existing property, or need reliable maintenance, Jibran brings the same professionalism and urgency to residential work that we deliver commercially. Your home deserves the best.",
    features: [
      "Custom home construction and additions",
      "Kitchen and bathroom renovations",
      "Roofing, siding, and exterior work",
      "Plumbing, electrical, and HVAC services",
      "Property maintenance programs",
      "Emergency repair response",
    ],
  },
];

const Industries = () => {
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-gold mb-4"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-body text-gold-light/60 max-w-2xl mx-auto"
          >
            Whether you manage restaurants, retail stores, or residential properties — we adapt fast, communicate clearly, and solve with care.
          </motion.p>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-24 scroll-mt-20 ${i % 2 === 0 ? "bg-background" : "bg-primary"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <ind.icon
                className={`w-14 h-14 mx-auto mb-6 ${
                  i % 2 === 0 ? "text-accent" : "text-gold"
                }`}
              />
              <h2
                className={`text-3xl md:text-4xl font-display mb-3 ${
                  i % 2 === 0 ? "text-foreground" : "text-gold"
                }`}
              >
                {ind.headline}
              </h2>
              <p
                className={`text-xl font-display italic ${
                  i % 2 === 0 ? "text-muted-foreground" : "text-gold-light/70"
                }`}
              >
                {ind.tagline}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className={`font-body leading-relaxed text-lg mb-8 ${
                    i % 2 === 0 ? "text-muted-foreground" : "text-gold-light/60"
                  }`}
                >
                  {ind.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:7608056351"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (760) 805-6351
                  </a>
                  <a
                    href="/#contact"
                    className={`px-6 py-3 border rounded-full font-body font-semibold text-center transition-colors ${
                      i % 2 === 0
                        ? "border-foreground/20 text-foreground hover:bg-foreground/5"
                        : "border-gold/30 text-gold hover:bg-gold/10"
                    }`}
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`rounded-2xl p-8 border ${
                  i % 2 === 0
                    ? "bg-primary border-gold/10"
                    : "bg-black-light/50 border-gold/10"
                }`}
              >
                <h3 className="text-lg font-display font-semibold text-gold mb-6">
                  Why Jibran for {ind.title}
                </h3>
                <ul className="space-y-4">
                  {ind.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gold-light/70">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
      <Footer />
    </div>
  );
};

export default Industries;
