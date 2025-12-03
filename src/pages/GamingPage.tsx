import { useState } from "react";
import { Gamepad2, Gift, Trophy, ArrowLeft, Sparkles, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const GamingPage = () => {
  const { toast } = useToast();
  const [spinResult, setSpinResult] = useState<string | null>(null);

  const games = [
    {
      id: 1,
      title: "Spin & Win",
      description: "Spin the wheel daily for a chance to win exciting coupons!",
      icon: "🎰",
      rewards: "Up to 50% off",
      players: "2.5K+",
      color: "from-primary/20 to-accent/20",
    },
    {
      id: 2,
      title: "Quiz Challenge",
      description: "Test your knowledge about Accesco and win rewards!",
      icon: "🎯",
      rewards: "Flat ₹100 off",
      players: "1.8K+",
      color: "from-accent/20 to-secondary/20",
    },
    {
      id: 3,
      title: "Memory Match",
      description: "Match the cards and unlock hidden discounts!",
      icon: "🃏",
      rewards: "Up to 30% off",
      players: "3.2K+",
      color: "from-secondary/20 to-primary/20",
    },
    {
      id: 4,
      title: "Lucky Dice",
      description: "Roll the dice and multiply your rewards!",
      icon: "🎲",
      rewards: "2x-5x rewards",
      players: "1.5K+",
      color: "from-primary/15 to-accent/25",
    },
    {
      id: 5,
      title: "Scratch Cards",
      description: "Scratch and reveal instant prizes!",
      icon: "🎫",
      rewards: "Instant wins",
      players: "4.1K+",
      color: "from-accent/25 to-secondary/15",
    },
    {
      id: 6,
      title: "Treasure Hunt",
      description: "Find hidden treasures and claim exclusive deals!",
      icon: "🏆",
      rewards: "Mystery prizes",
      players: "2.0K+",
      color: "from-secondary/25 to-primary/15",
    },
  ];

  const handlePlayGame = (gameTitle: string) => {
    toast({
      title: "🎮 Game Starting!",
      description: `Get ready to play ${gameTitle}! Win exciting coupons for Accesco ventures.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-xl text-foreground">ACCESCO</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <Gift className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">My Coupons: 3</span>
              </div>
              <Button variant="outline" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Gaming Arena</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Play Games, <span className="text-primary">Win Rewards!</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Enjoy exciting games and earn lucky coupons to use across all Accesco venture programs — Mart, Hub, Style, Eat & Dineout!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Trophy className="h-5 w-5 text-primary" />
                <span>15K+ Winners</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gift className="h-5 w-5 text-primary" />
                <span>₹50L+ Rewards Given</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <span>6 Fun Games</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Game</h2>
            <p className="text-muted-foreground">Pick a game, play, and win instant coupons!</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {games.map((game) => (
              <Card 
                key={game.id} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${game.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {game.icon}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {game.players}
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-4">{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-primary">{game.rewards}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>2-5 min</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    variant="outline"
                    onClick={() => handlePlayGame(game.title)}
                  >
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground">Three simple steps to start winning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Choose a Game</h3>
              <p className="text-sm text-muted-foreground">Pick from our exciting collection of games</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Play & Win</h3>
              <p className="text-sm text-muted-foreground">Complete challenges and earn lucky coupons</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Redeem Rewards</h3>
              <p className="text-sm text-muted-foreground">Use coupons across all Accesco ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/10 rounded-3xl p-8 md:p-12 border border-border/30">
            <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sign Up & Get Bonus Spins!
            </h2>
            <p className="text-muted-foreground mb-6">
              Create your account today and receive 5 free spins to kickstart your winning journey!
            </p>
            <Button size="lg">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Accesco Gaming Arena. All rights reserved. | Part of Accesco Ventures
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GamingPage;
