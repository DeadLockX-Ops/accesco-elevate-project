import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
              <img
                src={aboutTeam}
                alt="ACCESCO Team"
                className="w-full h-auto object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About ACCESCO
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empowering Digital Excellence Since Day One
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                ACCESCO is a modern digital platform offering multi-category services across 
                lifestyle, utilities, shopping, community, and financial tools.
              </p>
              
              <p>
                Our mission is to empower users with seamless experiences, intuitive interfaces, 
                and smart digital solutions — all in one place.
              </p>
              
              <p className="font-semibold text-foreground">
                We believe in simplifying complexity, connecting communities, and creating 
                value through innovative technology.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 bg-background rounded-lg shadow-card hover:shadow-elegant hover-scale transition-smooth">
                <div className="text-2xl font-bold text-primary mb-2">Innovation</div>
                <p className="text-sm text-muted-foreground">Cutting-edge solutions</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-card hover:shadow-elegant hover-scale transition-smooth">
                <div className="text-2xl font-bold text-primary mb-2">Trust</div>
                <p className="text-sm text-muted-foreground">Security first approach</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-card hover:shadow-elegant hover-scale transition-smooth">
                <div className="text-2xl font-bold text-primary mb-2">Excellence</div>
                <p className="text-sm text-muted-foreground">Premium quality</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-card hover:shadow-elegant hover-scale transition-smooth">
                <div className="text-2xl font-bold text-primary mb-2">Community</div>
                <p className="text-sm text-muted-foreground">User-centered design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
