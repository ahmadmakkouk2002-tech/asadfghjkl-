import { motion } from "framer-motion";
import { Building2, DollarSign, Clock, TrendingUp, IdCard, FileText, Award, Users, MapPin, ShieldCheck, Wrench, Droplets, Wind, Paintbrush, Lock, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Building2, title: "Steady Work", desc: "Predictable job flow across scheduled maintenance and on-call repairs." },
  { icon: DollarSign, title: "Competitive Wages", desc: "Our compensation packages are designed to be competitive." },
  { icon: Clock, title: "Weekly Pay", desc: "Get paid every week. No waiting around for your money." },
  { icon: TrendingUp, title: "Support & Growth", desc: "Clear work orders, training opportunities, and career advancement." },
];

const steps = [
  { num: "1", title: "Personal Details", desc: "Submit your personal details, experience, trades, and service areas." },
  { num: "2", title: "Verification", desc: "We verify documents, align wages and scope." },
  { num: "3", title: "Start Working", desc: "Start receiving work orders matched to trade and location." },
  { num: "4", title: "Grow With Us", desc: "Great performance leads to long-term growth." },
];

const requirements = [
  { icon: IdCard, title: "Valid ID", desc: "Government-issued identification (driver's license, passport)" },
  { icon: FileText, title: "W-9 / W-4", desc: "Required tax documentation" },
  { icon: Award, title: "Licenses", desc: "Active city / state trade licenses where required" },
  { icon: Users, title: "References", desc: "Professional references we can contact" },
  { icon: MapPin, title: "Service Areas", desc: "Areas in San Diego County and surrounding regions" },
  { icon: ShieldCheck, title: "Background Check", desc: "Willingness to undergo a background check if required" },
];

const positions = [
  { icon: Wrench, label: "General Maintenance" },
  { icon: Droplets, label: "Plumbing" },
  { icon: Lock, label: "Locksmith" },
  { icon: Wind, label: "HVAC/R" },
  { icon: Zap, label: "Electrical" },
  { icon: Paintbrush, label: "Painting" },
];

const JoinTeam = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gold mb-4"
          >
            Work at Jibran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-body text-gold-light/70 max-w-xl mx-auto"
          >
            Join our team of skilled professionals. Competitive wages, steady work, and room to grow.
          </motion.p>
        </div>
      </section>

      {/* Why Work at Jibran */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">Why Work at Jibran</h2>
            <p className="font-body text-gold-light/60 max-w-2xl mx-auto">We need skilled professionals like you. Here's what you can expect.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-primary border border-gold/10 rounded-xl p-8 text-center hover:border-gold/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-gold mb-2">{b.title}</h3>
                <p className="text-sm font-body text-gold-light/60">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold text-center mb-14">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-accent text-accent font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.num}</div>
                <h3 className="text-lg font-display font-semibold text-gold mb-2">{s.title}</h3>
                <p className="text-sm font-body text-gold-light/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Need */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold text-center mb-14">What You'll Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 bg-primary border border-gold/10 rounded-xl p-6">
                <r.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-gold mb-1">{r.title}</h3>
                  <p className="text-sm font-body text-gold-light/60">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold text-center mb-14">Positions We're Hiring</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {positions.map((p) => (
              <div key={p.label} className="flex items-center gap-2 bg-secondary border border-gold/10 rounded-full px-6 py-3">
                <p.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-body font-medium text-gold-light">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold text-center mb-4">Apply to Join Our Team</h2>
          <p className="text-center font-body text-gold-light/60 mb-10">Complete the form and our team will review and reach out with next steps.</p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-primary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
              <input type="email" placeholder="Email *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-primary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-primary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
              <input type="text" placeholder="Trade(s) / Skills *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-primary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
            </div>
            <input type="text" placeholder="Service Area / City" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-primary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
            <textarea placeholder="Tell us about your experience..." rows={4} className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-primary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50 resize-none" />
            <button type="submit" className="w-full px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:bg-gold-dark transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinTeam;
