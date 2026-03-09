import {
  Wrench,
  Hammer,
  Truck,
  Thermometer, // Changed from Wind
  Plug,
  Lightbulb,
  PaintRoller,
  Building,
  AlertTriangle,
  Zap,
  RefreshCw,
  Droplets, // Added for Plumbing
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import buildingMap from "@/assets/building-map.png";
import { useState } from "react";

const services = [
  {
    id: "hvac",
    icon: Thermometer, // Changed from Wind
    label: "HVAC",
    description: "Heating, ventilation, and air conditioning.",
    href: "/facility-emergency",
    x: "28%",
    y: "35%",
    color: "gold",
  },
  {
    id: "Safety regulation",
    icon: AlertTriangle,
    label: "Safety regulation",
    description: "enforcing safety standards and procedures.",
    href: "/facility-emergency",
    x: "44%",
    y: "63%",
    color: "gold",
  },
  {
    id: "electrical",
    icon: Zap,
    label: "Electrical",
    description: "Power, lighting, and electrical systems.",
    href: "/facility-emergency",
    x: "97%",
    y: "70%",
    color: "gold",
  },
  {
    id: "plumbing",
    icon: Droplets, // Changed from Wrench
    label: "Plumbing",
    description: "Water, drainage, and sewage systems.",
    href: "/facility-emergency",
    x: "25%",
    y: "48%",
    color: "gold",
  },
  {
    id: "signage",
    icon: Lightbulb,
    label: "Lighting & Signs",
    description: "Installation and maintenance.",
    href: "/construction-remodeling",
    x: "89%",
    y: "40%",
    color: "grey",
  },
  {
    id: "construction",
    icon: Hammer,
    label: "Construction",
    description: "Building and remodeling projects.",
    href: "/construction-remodeling",
    x: "30%",
    y: "75%",
    color: "grey",
  },
  
  {
    id: "painting-drywall",
    icon: PaintRoller,
    label: "Painting & Drywall",
    description: "Interior and exterior painting and drywall.",
    href: "/construction-remodeling",
    x: "90%",
    y: "70%",
    color: "grey",
  },
  {
    id: "parking-lot-repairs",
    icon: Truck,
    label: "Parking Lot Repairs",
    description: "Asphalt and concrete repairs.",
    href: "/facility-emergency",
    x: "15%",
    y: "80%",
    color: "gold",
  },
  {
    id: "remodeling",
    icon: RefreshCw,
    label: "Remodeling",
    description: "Transforming spaces to meet your needs.",
    href: "/construction-remodeling",
    x: "49.5%",
    y: "72%",
    color: "grey",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-primary text-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-display text-gold leading-tight mb-6">
              Learn About Our Services
            </h2>
            <p className="text-lg text-gold-light/70 font-body mb-8">
              Click the map to explore our construction and facility maintenance
              services. Our expert team can complete any job, big or small.
            </p>

            <p className="font-body font-semibold mb-4 text-gold">
              Click to learn more!
            </p>

            <ul className="space-y-4 font-body tracking-widest uppercase text-sm">
              <li className="flex items-center text-gold">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gold mr-4">
                  <Wrench className="w-4 h-4 text-black-soft" />
                </div>
                <span>Facility Management</span>
              </li>
              <li className="flex items-center text-gold">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gold mr-4">
                  <AlertTriangle className="w-4 h-4 text-black-soft" />
                </div>
                <span>Emergency Services</span>
              </li>
              <li className="flex items-center text-warm-gray">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black-soft mr-4">
                  <Hammer className="w-4 h-4 text-warm-gray" />
                </div>
                <span>Construction Services</span>
              </li>
              <li className="flex items-center text-warm-gray">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black-soft mr-4">
                  <Building className="w-4 h-4 text-warm-gray" />
                </div>
                <span>Remodeling Services</span>
              </li>
            </ul>
            <div className="w-32 h-px bg-accent/50 mt-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl mx-auto aspect-[4/3] mt-16 lg:mt-0"
          >
            <img
              src={buildingMap}
              alt="Building services map"
              className="w-full h-full object-contain"
            />
            {services.map((service) => (
              <ServiceTooltip key={service.id} {...service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceTooltip = ({
  id,
  icon: Icon,
  label,
  description,
  href,
  x,
  y,
  color,
}: {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  href: string;
  x: string;
  y: string;
  color: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const colorClasses = {
    gold: "bg-gold text-black-soft border-gold-dark",
    grey: "bg-black-soft text-warm-gray border-warm-gray-dark",
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
    >
      <motion.div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        whileHover={{ scale: 1.1 }}
        className="relative inline-block"
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${colorClasses[color]} border`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-primary border border-gold/10 rounded-lg shadow-2xl p-4 text-center z-10"
            >
              <h4 className="font-bold font-body text-gold text-sm">{label}</h4>
              <p className="text-xs text-gold-light/70 mt-1 mb-2 font-body">
                {description}
              </p>
              <Link
                to={href}
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-gold-dark hover:underline"
              >
                Click to learn more!
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
