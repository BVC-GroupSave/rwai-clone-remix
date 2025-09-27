import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass transition-smooth">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold gradient-text">rwai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#timeline" className="text-muted-foreground hover:text-primary transition-smooth">
              Timeline
            </a>
            <a href="#utility" className="text-muted-foreground hover:text-primary transition-smooth">
              Utility
            </a>
            <a href="#tokenomics" className="text-muted-foreground hover:text-primary transition-smooth">
              Tokenomics
            </a>
            <a href="#follow" className="text-muted-foreground hover:text-primary transition-smooth">
              Follow us
            </a>
          </div>

          <Button className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow">
            Launch Agent
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;