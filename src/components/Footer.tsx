import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-gold-light/50">
      {/* Email signup */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <p className="font-body text-gold-light/70 text-sm md:text-base">
              Enter your email to get important updates and insights from the Jibran team.
            </p>
            <div className="flex mt-4 gap-3 max-w-lg">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-5 py-3 rounded-full border border-gold/20 bg-transparent text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50"
              />
              <button className="px-6 py-3 rounded-full border border-gold/30 text-gold font-body font-semibold text-sm hover:bg-gold/10 transition-colors flex items-center gap-2">
                Sign Up <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Jibran Construction" className="h-28 w-28 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-gold leading-tight">JIBRAN</span>
                <span className="text-[9px] font-body font-semibold text-gold-light/70 uppercase tracking-[0.2em]">Construction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10" />

      {/* Links grid */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-display italic text-gold text-base mb-4">why Jibran</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our People</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Promise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display italic text-gold text-base mb-4">our services</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link to="/facility-emergency" className="hover:text-accent transition-colors">Facility Management</Link></li>
              <li><Link to="/construction-remodeling" className="hover:text-accent transition-colors">Construction Services</Link></li>
              <li><Link to="/facility-emergency" className="hover:text-accent transition-colors">Emergency Response</Link></li>
              <li><Link to="/construction-remodeling" className="hover:text-accent transition-colors">Remodeling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display italic text-gold text-base mb-4">who we serve</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link to="/industries#retail" className="hover:text-accent transition-colors">Retail</Link></li>
              <li><Link to="/industries#restaurants" className="hover:text-accent transition-colors">Restaurants</Link></li>
              <li><Link to="/industries#healthcare" className="hover:text-accent transition-colors">Healthcare</Link></li>
              <li><Link to="/industries#financial" className="hover:text-accent transition-colors">Financial</Link></li>
              <li><Link to="/industries#distribution" className="hover:text-accent transition-colors">Distribution</Link></li>
              <li><Link to="/industries#residential" className="hover:text-accent transition-colors">Residential</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-8">
              <h4 className="font-display italic text-gold text-base mb-4">work with Jibran</h4>
              <ul className="space-y-2 text-sm font-body">
              <li><Link to="/join" className="hover:text-accent transition-colors">Join Our Team</Link></li>
              <li><Link to="/quote" className="hover:text-accent transition-colors">Become a Client</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-display italic text-gold text-base mb-4">get in touch</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>Jibran Construction</li>
              <li>531 Encinitas Blvd. Suite 201</li>
              <li>Encinitas, CA 92024</li>
              <li className="pt-2">
                <a href="mailto:bassam@jibranconstruction.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> bassam@jibranconstruction.com
                </a>
              </li>
              <li>
                <a href="tel:7608056351" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> (760) 805-6351
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 text-center text-xs font-body">
        © {new Date().getFullYear()} Jibran Construction. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
