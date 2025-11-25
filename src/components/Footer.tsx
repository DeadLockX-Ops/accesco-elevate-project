import { Calculator, Heart, ShoppingCart, Wallet, CreditCard, Building2, Phone, HelpCircle, FileText, Shield, Info } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about", icon: Building2 },
        { name: "Contact Us", href: "#contact", icon: Phone },
        { name: "Help & Support", href: "#support", icon: HelpCircle },
        { name: "General Info", href: "#info", icon: Info },
      ],
    },
    {
      title: "User Tools",
      links: [
        { name: "Wishlist", href: "#wishlist", icon: Heart },
        { name: "Your Cart", href: "#cart", icon: ShoppingCart },
        { name: "Wallet", href: "#wallet", icon: Wallet },
        { name: "Transactions", href: "#transactions", icon: CreditCard },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Metrics & Certificates", href: "#metrics" },
        { name: "QTC Videos", href: "#videos" },
        { name: "Blogs", href: "#blogs" },
        { name: "Tutorials", href: "#tutorials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy", icon: Shield },
        { name: "Terms & Conditions", href: "#terms", icon: FileText },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-muted pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Calculator Highlight Section */}
        <div className="mb-16 animate-fade-in">
          <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl shadow-elegant">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-background/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0">
                <Calculator className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                  ACCESCO Calculator
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Advanced metrics & computation tools for professional analysis
                </p>
              </div>
              <button className="px-8 py-3 bg-background hover:bg-background/90 text-primary font-semibold rounded-lg shadow-lg hover:scale-105 transition-smooth">
                Launch Tool
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-elegant">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-foreground">ACCESCO</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Empowering digital excellence through innovative solutions and seamless experiences.
            </p>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 bg-accent/20 hover:bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-smooth group"
                >
                  <span className="text-primary group-hover:text-primary-foreground transition-smooth">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground font-bold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center text-muted-foreground hover:text-primary transition-smooth group"
                    >
                      {link.icon && (
                        <link.icon className="h-4 w-4 mr-2 text-primary opacity-60 group-hover:opacity-100 transition-smooth" />
                      )}
                      <span className="group-hover:translate-x-1 transition-smooth">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 ACCESCO. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="hover:text-primary transition-smooth">
                Privacy
              </a>
              <a href="#terms" className="hover:text-primary transition-smooth">
                Terms
              </a>
              <a href="#cookies" className="hover:text-primary transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
