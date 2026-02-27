const logos = [
  "OpenWrench", "Ramp", "Salesforce", "ServiceChannel",
  "Corrigo", "Fexa", "fmPilot", "Officetrak",
];

const LogoCarousel = () => {
  return (
    <section className="py-16 bg-warm-gray overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-display text-foreground text-center">
          Seamlessly integrated with the platforms you already use.
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left gap-16 w-max">
          {[...logos, ...logos].map((name, i) => (
            <div key={`${name}-${i}`} className="flex items-center justify-center w-40 h-16 bg-background rounded-lg border border-border px-4">
              <span className="font-body font-semibold text-muted-foreground text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
