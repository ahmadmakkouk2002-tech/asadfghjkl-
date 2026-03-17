import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroWorker from "@/assets/Photoshoot (2) (1).jpg";

const Quote = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-8 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gold"
          >
            Get In Touch
          </motion.h1>
        </div>
      </section>

      {/* Form + Image */}
      <section className="pb-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-light mb-1">
                Let's Get It <span className="text-accent">Done.</span>
              </h2>
              <p className="font-body text-gold-light/60 mt-3 mb-8 leading-relaxed">
                Need a quote, fast repair, or site dispatch? You're in the right place.<br />
                Fill out the form below and our team will respond within one business day — typically sooner.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Contact Name *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-secondary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
                  <input type="tel" placeholder="Direct Phone *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-secondary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
                </div>
                <input type="email" placeholder="Business Email *" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-secondary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
                <input type="text" placeholder="Service Area / City" className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-secondary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50" />
                <textarea placeholder="Your Inquiry *" rows={5} className="w-full px-5 py-3 rounded-lg border border-gold/20 bg-secondary text-gold-light placeholder:text-gold-light/30 font-body text-sm focus:outline-none focus:border-gold/50 resize-none" />
                <button type="submit" className="px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:bg-gold-dark transition-colors">
                  Send Now
                </button>
              </form>
            </motion.div>

            {/* Right - Image */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="hidden lg:block">
              <img src={heroWorker} alt="Jibran Construction worker" className="rounded-xl w-full h-[500px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-display font-semibold text-gold mb-1">Phone</h3>
              <a href="tel:7604345436" className="font-body text-gold-light/60 hover:text-accent transition-colors">(760) 434-5436</a>
            </div>
            <div>
              <Mail className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-display font-semibold text-gold mb-1">Email</h3>
              <a href="mailto:procurement@jibranconstruction.com" className="font-body text-gold-light/60 hover:text-accent transition-colors">procurement@jibranconstruction.com</a>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-display font-semibold text-gold mb-1">Office</h3>
              <p className="font-body text-gold-light/60">531 Encinitas Blvd. Suite 201<br />Encinitas, CA 92024</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
