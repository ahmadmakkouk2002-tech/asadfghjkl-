import openWrench from '../assets/partners2/openwrench-new-logo-black.svg';
import ramp from '../assets/partners2/RSS-CarouselLogo-ramp-800x400-2.webp';
import salesforce from '../assets/partners2/RSS-CarouselLogo-SalesForce-800x400-1.jpg';
import serviceChannel from '../assets/partners2/RSS-CarouselLogo-ServiceChannel-800x400-2.webp';
import corrigo from '../assets/partners2/RSS-CarouselLogo-Corrigo-800x400-2.webp';
import fexa from '../assets/partners2/RSS-CarouselLogo-Fexa-800x400-2.webp';
import fmPilot from '../assets/partners2/RSS-CarouselLogo-fmPilot-800x400-2.webp';
import officeTrak from '../assets/partners2/RSS-CarouselLogo-Officetra-800x400-2.webp';

const logos = [
  { name: "OpenWrench", src: openWrench },
  { name: "Ramp", src: ramp },
  { name: "Salesforce", src: salesforce },
  { name: "ServiceChannel", src: serviceChannel },
  { name: "Corrigo", src: corrigo },
  { name: "Fexa", src: fexa },
  { name: "fmPilot", src: fmPilot },
  { name: "Officetrak", src: officeTrak },
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
          {[...logos, ...logos].map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center justify-center w-40 h-16 bg-background rounded-lg border border-border px-4">
              <img src={logo.src} alt={logo.name} className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
