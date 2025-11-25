import { ShoppingBag, Users, Shirt, UtensilsCrossed, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceMart from "@/assets/service-mart.jpg";
import serviceHub from "@/assets/service-hub.jpg";
import serviceStyle from "@/assets/service-style.jpg";
import serviceEat from "@/assets/service-eat.jpg";

const Services = () => {
  const services = [
    {
      title: "ACCESCO Mart",
      description: "Your one-stop destination for daily essentials and quality products",
      image: serviceMart,
      icon: ShoppingBag,
      gradient: "from-primary/90 to-primary-dark/90",
    },
    {
      title: "ACCESCO Hub",
      description: "Rent and lend products seamlessly — access what you need, when you need it",
      image: serviceHub,
      icon: Users,
      gradient: "from-accent-dark/90 to-primary/90",
    },
    {
      title: "ACCESCO Style",
      description: "Elevate your lifestyle with premium fashion and accessories",
      image: serviceStyle,
      icon: Shirt,
      gradient: "from-primary-light/90 to-accent/90",
    },
    {
      title: "ACCESCO Eat",
      description: "Delicious meals delivered fast from your favorite restaurants",
      image: serviceEat,
      icon: UtensilsCrossed,
      gradient: "from-primary/90 to-primary-light/90",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Everything You Need, All in One Place
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive suite of digital services designed to enhance every aspect of your life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-50 group-hover:opacity-60 transition-smooth`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-background/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="h-6 w-6 lg:h-7 lg:w-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button
                  variant="secondary"
                  className="self-start group/btn bg-background/20 backdrop-blur-md hover:bg-background/30 text-primary-foreground border border-primary-foreground/20"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
