import { Zap, Shield, Smartphone, Layers, Lock, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Enterprise-grade security to protect your data and privacy",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Seamless experience across all your devices and platforms",
    },
    {
      icon: Layers,
      title: "All-in-One Ecosystem",
      description: "Multiple services integrated into one unified platform",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data belongs to you. We never compromise on privacy",
    },
    {
      icon: TrendingUp,
      title: "Always Improving",
      description: "Regular updates and new features to enhance your experience",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose ACCESCO
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Built for Excellence, Designed for You
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading features that set us apart from the competition
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background rounded-2xl shadow-card hover:shadow-elegant hover-scale transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-smooth shadow-elegant">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
