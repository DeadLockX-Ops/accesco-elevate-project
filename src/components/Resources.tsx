import { Award, Video, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      icon: Award,
      title: "Metrics & Certificates",
      description: "View our achievements, certifications, and performance metrics",
      color: "from-primary to-primary-light",
    },
    {
      icon: Video,
      title: "QTC Videos",
      description: "Quality training content and video tutorials for users",
      color: "from-accent-dark to-primary",
    },
    {
      icon: BookOpen,
      title: "Blogs",
      description: "Industry insights, updates, and expert articles",
      color: "from-primary-light to-accent",
    },
    {
      icon: GraduationCap,
      title: "Tutorials",
      description: "Step-by-step guides to help you get the most from ACCESCO",
      color: "from-primary to-accent-dark",
    },
  ];

  return (
    <section id="resources" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Resources
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Learn, Grow, and Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Access valuable resources to enhance your ACCESCO experience
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className="group relative overflow-hidden p-8 bg-gradient-subtle rounded-2xl shadow-card hover:shadow-elegant transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${resource.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-smooth duration-700`} />
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 transition-smooth`}>
                  <resource.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold group-hover:translate-x-2 transition-smooth"
                >
                  Explore →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
