import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FloatingShapes from "@/components/FloatingShapes";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingShapes />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default Index;
