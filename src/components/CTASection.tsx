import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

interface CTASectionProps {
  title?: string;
  phone?: string;
  email?: string;
}

const CTASection = ({
  title = "Your Vision. Our Mission.",
  phone = "(760) 424-5436",
  email = "procurement@jibranconstruction.com",
}: CTASectionProps) => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display mb-6 text-gold">
              {title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full font-body font-semibold text-gold hover:bg-gold/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {phone}
              </a>
               <a
                  href={`mailto:${email}`}
                  className="font-body text-gold-light/80 text-sm hover:text-accent transition-colors"
                >
                  {email}
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
