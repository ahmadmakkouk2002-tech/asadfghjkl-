import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-display mb-6 text-gold">
              Ready to transform your home?
            </h2>
            <p className="text-lg font-body text-gold-light/60 mb-10 max-w-xl mx-auto">
              Contact us today to schedule a consultation with one of our experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/#contact" className="px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors text-lg">
                Schedule a Consultation
              </a>
              <a href="tel:7608056351" className="flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full font-body font-semibold text-gold hover:bg-gold/10 transition-colors">
                <Phone className="w-5 h-5" />
                (760) 805-6351
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-left sm:text-center">
              <div className="flex sm:flex-col items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-body text-gold-light/80 text-sm">531 Encinitas Blvd. Suite 201</p>
                  <p className="font-body text-gold-light/80 text-sm">Encinitas, CA 92024</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:bassam@jibranconstruction.com" className="font-body text-gold-light/80 text-sm hover:text-accent transition-colors">
                  bassam@jibranconstruction.com
                </a>
              </div>
              <div className="flex sm:flex-col items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:7608056351" className="font-body text-gold-light/80 text-sm hover:text-accent transition-colors">
                  (760) 805-6351
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
