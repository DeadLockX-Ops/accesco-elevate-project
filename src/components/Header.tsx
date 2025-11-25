import { useState } from "react";
import { Menu, X, ShoppingCart, Heart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const mobileNavItems = [
    { name: "Home", href: "#home" },
    { name: "Your Transactions", href: "#transactions" },
    { name: "Wishlist", href: "#wishlist", icon: Heart },
    { name: "Wallet", href: "#wallet", icon: Wallet },
    { name: "Your Cart", href: "#cart", icon: ShoppingCart },
    { name: "General Info", href: "#info" },
    { name: "Help & Support", href: "#support" },
    { name: "Contact Us", href: "#contact" },
    { name: "Settings", href: "#settings" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-elegant group-hover:scale-105 transition-smooth">
              <span className="text-primary-foreground font-bold text-lg lg:text-xl">A</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
              ACCESCO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="text-xl font-bold text-foreground">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {mobileNavItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-smooth"
                        >
                          {item.icon && <item.icon className="h-5 w-5 text-primary" />}
                          <span className="font-medium">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-border space-y-3">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                  <Button variant="hero" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
