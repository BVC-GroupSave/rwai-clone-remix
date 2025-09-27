import { CheckCircle, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Monitor crypto markets 24/7 with advanced AI algorithms"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive project evaluation and risk scoring"
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      description: "Deep insights into market trends and opportunities"
    },
    {
      icon: CheckCircle,
      title: "Launch Support",
      description: "End-to-end guidance for successful token launches"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why <span className="gradient-text">RWAI</span> is Different
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RWAI isn't just another AI tool – it's your dedicated crypto research partner. 
                Built on cutting-edge technology and backed by industry leaders, RWAI provides 
                unparalleled insights into the rapidly evolving crypto landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold gradient-text mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-8 space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h3 className="text-xl font-bold gradient-text mb-2">
                  Advanced AI Engine
                </h3>
                <p className="text-muted-foreground text-sm">
                  Powered by state-of-the-art machine learning algorithms
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <span className="text-sm font-medium">Market Analysis</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <span className="text-sm font-medium">Risk Assessment</span>
                  <div className="text-sm gradient-text font-semibold">99.8% Accuracy</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <span className="text-sm font-medium">Launch Optimization</span>
                  <div className="text-sm gradient-text font-semibold">Real-time</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-primary opacity-20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;