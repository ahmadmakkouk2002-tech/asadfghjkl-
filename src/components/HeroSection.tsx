import heroVideo from "@/assets/Photoshoot (2).mp4";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 500); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 text-center">
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-accent mb-4 font-semibold">
            California
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-gold leading-tight mb-6 font-bold">
            Elevating Facility Performance Across Every Property.
          </h1>
          {showSubtitle && (
            <p className="text-lg text-gold-light/70 font-body mb-8 max-w-lg mx-auto font-bold">
              With over 25 years of experience, we specialize in residential remodeling, delivering quality craftsmanship and operational efficiency.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
