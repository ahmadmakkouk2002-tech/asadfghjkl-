import { motion } from "framer-motion";

const PartnershipSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">
              Crafting your dream home.
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
              Ready to transform your house into the home of your dreams? At Jibran Construction, we bring over 25 years of experience in residential and commercial construction throughout the San Diego area.
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
              From custom builds and full renovations to facility maintenance and emergency repairs — we deliver quality craftsmanship with clear communication at every phase. Contact us today to schedule a consultation with one of our experts.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
