import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Why Jibran", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    dropdown: [
      { label: "Construction Services", href: "/services#construction" },
      { label: "Facility Maintenance", href: "/services#facility-maintenance" },
      { label: "Emergency Services", href: "/services#emergency" },
    ],
  },
  {
    label: "Who We Serve",
    href: "/industries",
    dropdown: [
      { label: "Restaurants", href: "/industries#restaurants" },
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Retail", href: "/industries#retail" },
      { label: "Financial", href: "/industries#financial" },
      { label: "Distribution", href: "/industries#distribution" },
      { label: "Residential", href: "/industries#residential" },
    ],
  },
  {
    label: "Work with Us",
    href: "/join",
    dropdown: [
      { label: "Join Our Team", href: "/join" },
      { label: "Become a Client", href: "/quote" },
    ],
  },
  
];

const DropdownMenu = ({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 w-56 bg-primary border border-gold/20 rounded-lg shadow-xl z-50 overflow-hidden"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          onClick={onClose}
          className="block px-5 py-3 text-sm font-body text-gold-light/80 hover:bg-gold/10 hover:text-gold transition-colors border-b border-gold/5 last:border-b-0"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Jibran Construction" className="h-12 w-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-lg font-display font-bold text-gold leading-tight">
              JIBRAN
            </span>
            <span className="text-[9px] font-body font-semibold text-gold-light/70 uppercase tracking-[0.2em]">
              Construction
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={() => item.dropdown && handleMouseLeave()}
            >
              <Link
                to={item.href}
                className="flex items-center gap-1 text-sm font-body font-medium text-gold-light/80 hover:text-gold transition-colors"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
              <AnimatePresence>
                {item.dropdown && openDropdown === item.label && (
                  <DropdownMenu items={item.dropdown} onClose={() => setOpenDropdown(null)} />
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            to="/quote"
            className="ml-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold font-body rounded-full hover:bg-gold-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-primary border-b border-gold/20"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gold-light font-body font-medium py-2 block"
                    onClick={() => !item.dropdown && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 flex flex-col gap-1 mb-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="text-gold-light/60 font-body text-sm py-1.5 hover:text-gold transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/quote"
                className="mt-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold font-body rounded-full text-center hover:bg-gold-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
