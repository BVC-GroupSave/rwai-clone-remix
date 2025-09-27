const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient orb */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
      
      {/* Medium gradient orb */}
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-primary opacity-15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Small accent orbs */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent opacity-20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-1/3 left-2/3 w-24 h-24 bg-primary opacity-25 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Tiny floating particles */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-primary opacity-40 rounded-full animate-glow"></div>
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent opacity-50 rounded-full animate-glow" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-5 h-5 bg-primary opacity-30 rounded-full animate-glow" style={{animationDelay: '3s'}}></div>
    </div>
  );
};

export default FloatingShapes;