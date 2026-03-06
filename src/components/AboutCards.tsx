import { motion } from "framer-motion";

const cards = [
  {
    title: "who we are",
    description:
      "Jibran Construction has been proudly serving California community for over 25 years — delivering quality craftsmanship in residential ,commercial construction and Facility management.",
  },
  {
    title: "our mission",
    description:
      "To transform houses into dream homes through expert construction, renovation, and uncompromising attention to detail.",
  },
  {
    title: "core values",
    description:
      "Quality craftsmanship. Honest communication. On-time delivery. Client satisfaction above all.",
  },
];

const AboutCards = () => {
  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-primary text-gold rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold mb-4 lowercase">
                {card.title}
              </h3>
              <p className="font-body text-gold-light/70 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
