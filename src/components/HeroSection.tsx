import heroVideo from "@/assets/Photoshoot (2).mp4";
import workImage11 from "@/assets/work/11.jpg.jpeg";
import workImage13 from "@/assets/work/13.jpg.jpeg";
import workImage1 from "@/assets/work/1.jpg";
import workImage2 from "@/assets/work/2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent mb-4">
              California
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-gold leading-tight mb-6">
              Elevating Facility Performance Across Every Property.
            </h1>
            <p className="text-lg text-gold-light/70 font-body mb-8 max-w-lg">
              For over 25 years, we’ve supported commercial and industrial facilities across California — delivering reliable service, operational efficiency, and unmatched workmanship.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl h-[280px]">
                  <img src={workImage2} alt="Commercial construction work" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl h-[180px]">
                  <img src={workImage1} alt="Electrical work" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl h-[180px]">
                  <img src={workImage13} alt="HVAC maintenance" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl h-[280px] relative">
                  <img src={workImage11} alt="Team at work" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-gold text-sm font-semibold">25+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
