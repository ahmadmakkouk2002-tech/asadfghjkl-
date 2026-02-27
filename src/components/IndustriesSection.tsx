import { motion } from "framer-motion";
import { Store, UtensilsCrossed, Building2, HeartPulse, Landmark, Truck } from "lucide-react";

const industries = [
  { icon: Store, title: "Retail", description: "From broken doors to nationwide rollouts, we keep stores safe, open, and running without disruption." },
  { icon: UtensilsCrossed, title: "Restaurants", description: "We handle the leaks, outages, and off-hours fixes so your kitchens and dining rooms stay on schedule." },
  { icon: Building2, title: "Property / Development", description: "From routine repairs to large-scale refreshes, we help you manage multiple sites with less stress." },
  { icon: HeartPulse, title: "Healthcare", description: "Clean, compliant, and discreet. We fix issues quickly while protecting patients, staff, and schedules." },
  { icon: Landmark, title: "Financial", description: "Trusted facility care for financial sites, with urgent response and a single point of contact every time." },
  { icon: Truck, title: "Logistics / Distribution", description: "Plumbing, power, or safety issues — we respond fast to keep goods moving and downtime minimal." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Trusted across industries.</h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl">
            Whether you manage restaurants, retail stores, or corporate campuses, we adapt fast, communicate clearly, and solve with care.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border border-border rounded-2xl p-8 hover:border-accent/40 hover:shadow-lg transition-all cursor-pointer">
              <ind.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 uppercase tracking-wide">{ind.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{ind.description}</p>
              <span className="inline-block mt-4 text-sm font-body font-semibold text-accent">Learn more →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
