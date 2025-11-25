import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <img
          src={heroBanner}
          alt="ACCESCO Corporate Environment"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/75 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/30 backdrop-blur-sm text-primary font-semibold text-sm rounded-full border border-accent">
              Welcome to the Future of Digital Services
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Digital Experience with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ACCESCO
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 leading-relaxed max-w-2xl">
            ACCESCO brings together digital services, intelligent tools, and lifestyle experiences 
            into one unified ecosystem — designed for simplicity, speed, and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group hover-scale">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 lg:mt-16">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">500K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">4.8/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
