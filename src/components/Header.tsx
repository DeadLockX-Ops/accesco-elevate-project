import { ShoppingCart, Heart, Wallet, Home, Receipt, Info, HelpCircle, Phone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const sidebarItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: ShoppingCart },
    { name: "About", href: "#about", icon: Info },
    { name: "Resources", href: "#resources", icon: Info },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const mobileNavItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Your Transactions", href: "#transactions", icon: Receipt },
    { name: "Wishlist", href: "#wishlist", icon: Heart },
    { name: "Wallet", href: "#wallet", icon: Wallet },
    { name: "Your Cart", href: "#cart", icon: ShoppingCart },
    { name: "General Info", href: "#info", icon: Info },
    { name: "Help & Support", href: "#support", icon: HelpCircle },
    { name: "Contact Us", href: "#contact", icon: Phone },
    { name: "Settings", href: "#settings", icon: Settings },
  ];

  return (
    <Sidebar side="left" className="border-r border-border/50 bg-background">
      <SidebarContent>
        {/* Logo in Sidebar */}
        <div className="p-6 border-b border-border/50 bg-background">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-elegant group-hover:scale-105 transition-smooth">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              ACCESCO
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <SidebarGroup className="hidden lg:block">
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 hover:bg-accent/50 active:bg-accent/70 data-[active=true]:bg-accent/60 backdrop-blur-sm transition-smooth"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Mobile Navigation */}
        <SidebarGroup className="lg:hidden">
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mobileNavItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 hover:bg-accent/50 active:bg-accent/70 data-[active=true]:bg-accent/60 backdrop-blur-sm transition-smooth"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* CTA Buttons */}
        <div className="p-6 mt-auto border-t border-border/50 space-y-3">
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
          <Button variant="hero" className="w-full">
            Sign Up
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/78 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left side: Logo and Sidebar Trigger stacked */}
          <div className="flex flex-col items-start gap-1">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-elegant group-hover:scale-110 transition-smooth animate-fade-in">
                <span className="text-primary-foreground font-bold text-lg lg:text-xl">A</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
                ACCESCO
              </span>
            </a>
            {/* Sidebar Trigger below logo */}
            <SidebarTrigger className="hover:bg-accent/50 transition-smooth ml-1" />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hover-scale">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="hover-scale">
              Sign Up
            </Button>
          </div>

          {/* Mobile placeholder */}
          <div className="w-10 lg:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
