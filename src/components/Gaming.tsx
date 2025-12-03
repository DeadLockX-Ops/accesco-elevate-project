import { Gamepad2, Gift, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gaming = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Play & Win Rewards</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Accesco <span className="text-primary">Gaming Arena</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Play exciting games and stand a chance to win lucky coupons! Use your rewards across all Accesco venture programs including Mart, Hub, Style, Eat, and Dineout.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Fun Games</p>
                    <p className="text-xs text-muted-foreground">Play Daily</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Win Coupons</p>
                    <p className="text-xs text-muted-foreground">Exclusive Deals</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Leaderboards</p>
                    <p className="text-xs text-muted-foreground">Compete & Win</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/gaming">
                  <Button size="lg" className="group">
                    <Gamepad2 className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Start Playing Now
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Visual Side */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-border/30">
                <div className="grid grid-cols-2 gap-4">
                  {/* Game Cards */}
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">🎰</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Spin & Win</h4>
                    <p className="text-sm text-muted-foreground">Daily spins</p>
                  </div>
                  
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Quiz Time</h4>
                    <p className="text-sm text-muted-foreground">Test knowledge</p>
                  </div>
                  
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">🃏</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Card Match</h4>
                    <p className="text-sm text-muted-foreground">Memory game</p>
                  </div>
                  
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">🎲</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Lucky Dice</h4>
                    <p className="text-sm text-muted-foreground">Roll to win</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  🎁 Win Up to 50% Off!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gaming;
