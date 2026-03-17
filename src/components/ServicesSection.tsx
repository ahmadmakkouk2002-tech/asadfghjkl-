import {
  Wrench,
  Hammer,
  Truck,
  Thermometer,
  Lightbulb,
  PaintRoller,
  Building,
  AlertTriangle,
  Zap,
  RefreshCw,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import buildingMap from "@/assets/building-map.png";
import { useState, useRef, useLayoutEffect } from "react";

const services = [
  {
    id: "hvac",
    icon: Thermometer,
    label: "HVAC",
    description: "Heating, ventilation, and air conditioning.",
    href: "/facility-emergency",
    x: "28%",
    y: "35%",
    category: "facility-emergency",
  },
  {
    id: "Safety regulation",
    icon: AlertTriangle,
    label: "Safety regulation",
    description: "enforcing safety standards and procedures.",
    href: "/facility-emergency",
    x: "44%",
    y: "63%",
    category: "facility-emergency",
  },
  {
    id: "electrical",
    icon: Zap,
    label: "Electrical",
    description: "Power, lighting, and electrical systems.",
    href: "/facility-emergency",
    x: "97%",
    y: "70%",
    category: "facility-emergency",
  },
  {
    id: "plumbing",
    icon: Droplets,
    label: "Plumbing",
    description: "Water, drainage, and sewage systems.",
    href: "/facility-emergency",
    x: "25%",
    y: "48%",
    category: "facility-emergency",
  },
  {
    id: "signage",
    icon: Lightbulb,
    label: "Lighting & Signs",
    description: "Installation and maintenance.",
    href: "/construction-remodeling",
    x: "89%",
    y: "40%",
    category: "construction-remodeling",
  },
  {
    id: "construction",
    icon: Hammer,
    label: "Construction",
    description: "Building and remodeling projects.",
    href: "/construction-remodeling",
    x: "30%",
    y: "75%",
    category: "construction-remodeling",
  },
  {
    id: "painting-drywall",
    icon: PaintRoller,
    label: "Painting & Drywall",
    description: "Interior and exterior painting and drywall.",
    href: "/construction-remodeling",
    x: "90%",
    y: "70%",
    category: "construction-remodeling",
  },
  {
    id: "parking-lot-repairs",
    icon: Truck,
    label: "Parking Lot Repairs",
    description: "Asphalt and concrete repairs.",
    href: "/facility-emergency",
    x: "15%",
    y: "80%",
    category: "facility-emergency",
  },
  {
    id: "remodeling",
    icon: RefreshCw,
    label: "Remodeling",
    description: "Transforming spaces to meet your needs.",
    href: "/construction-remodeling",
    x: "49.5%",
    y: "72%",
    category: "construction-remodeling",
  },
];

const legendItems = [
    {
      id: "facility",
      label: "Facility Management & Emergency Services",
      icon: Wrench,
      category: "facility-emergency",
    },
    {
      id: "construction",
      label: "Construction & Remodeling Services",
      icon: Hammer,
      category: "construction-remodeling",
    },
  ];

const ServicesSection = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const hoveredService = services.find((s) => s.id === hoveredId);
    const hoveredCategory = hoveredService?.category;

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
              Click the map to explore our construction and Facility Management
              services. Our expert team can complete any job, big or small.
            </p>

            <p className="font-body font-semibold mb-4 text-gold">
              Click to learn more!
            </p>

            <ul className="space-y-4 font-body tracking-widest uppercase text-sm">
            {legendItems.map((item) => {
                const isGold = hoveredCategory === item.category;
                return (
                  <li
                    key={item.id}
                    className={`flex items-center transition-colors duration-300 ${
                      isGold ? "text-gold" : "text-warm-gray"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${
                        isGold ? "bg-gold" : "bg-black-soft"
                      }`}
                    >
                      <item.icon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isGold ? "text-black-soft" : "text-warm-gray"
                        }`}
                      />
                    </div>
                    <span>{item.label}</span>
                  </li>
                );
              })}
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
              <ServiceDot key={service.id} {...service} 
              setHoveredId={setHoveredId}
              isHovered={hoveredId === service.id} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceDot = ({
    id,
    icon: Icon,
    href,
    x,
    y,
    setHoveredId,
    isHovered,
    label,
    description
  }: {
    id: string;
    icon: React.ElementType;
    href: string;
    x: string;
    y: string;
    setHoveredId: (id: string | null) => void;
    isHovered: boolean;
    label: string;
    description: string;
  }) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [positionClass, setPositionClass] = useState('left-1/2 -translate-x-1/2');

    const colorClasses = isHovered
    ? "bg-gold text-black-soft border-gold-dark"
    : "bg-black-soft text-warm-gray border-warm-gray-dark";

    useLayoutEffect(() => {
        if (isHovered && tooltipRef.current) {
            const rect = tooltipRef.current.getBoundingClientRect();
            
            if (rect.right > window.innerWidth) {
                setPositionClass('right-0');
            } else if (rect.left < 0) {
                setPositionClass('left-0');
            }
        } else if (!isHovered) {
             setPositionClass('left-1/2 -translate-x-1/2');
        }
    }, [isHovered]);
  
    return (
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y }}
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
      >
          <Link to={href}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="relative inline-block"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${colorClasses} border`}
              >
                <Icon className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute bottom-full mb-3 w-64 bg-black-soft/90 backdrop-blur-sm border border-gold/20 rounded-xl shadow-2xl p-5 text-center z-10 pointer-events-none ${positionClass}`}
            >
              <h4 className="font-display font-bold text-gold text-lg mb-2">{label}</h4>
              <p className="font-body text-gold-light/80 text-sm mb-4">
                {description}
              </p>
              <div
                className="inline-block px-4 py-2 bg-gold text-black-soft font-body font-bold rounded-full text-xs uppercase tracking-wider"
              >
                Click to learn more!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

export default ServicesSection;
