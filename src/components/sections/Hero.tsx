import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-recruit41.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { useEffect, useState } from "react";
import { ScrollHighlightText } from "@/components/ui/scroll-highlight-text";
const Hero = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const parallaxA = `translateY(${offset * 0.15}px)`;
  const parallaxB = `translateY(${offset * 0.25}px)`;
  return <section id="hero" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background gradient + glows */}
      <div className="absolute inset-0 -z-10 hero-gradient" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-20 -left-24 h-[42rem] w-[42rem] rounded-full blur-3xl transition-transform duration-100 ease-out" style={{
      background: "radial-gradient(closest-side, hsl(var(--primary)/.35), transparent)",
      transform: parallaxA
    }} aria-hidden />
      <div className="pointer-events-none absolute top-40 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl transition-transform duration-100 ease-out" style={{
      background: "radial-gradient(closest-side, hsl(var(--primary-glow)/.32), transparent)",
      transform: parallaxB
    }} aria-hidden />

      {/* Center-aligned content like Apple/Fabric */}
      <div className="container mx-auto text-center max-w-4xl px-6">
        <div className="animate-enter">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground bg-background/60 backdrop-blur mb-8">
            ✨ Agentic AI Hiring
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight font-display md:text-7xl lg:text-8xl">
            The Future of Hiring is Here. 
            
          </h1>
          
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Recruit41 automates resume screening and first-round interviews, delivering only the most qualified candidates to your team.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Try AI Interview
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">Let's Connect</Button>
            </a>
          </div>
          
          
        </div>

        {/* Product demo image */}
        <div className="relative mt-16 animate-scale-in">
          <div className="glass rounded-2xl shadow-[var(--shadow-elegant)] p-3 max-w-4xl mx-auto">
            <img src="/lovable-uploads/e84f8752-8896-4670-9729-2b9a8fae2cbe.png" alt="Recruit41 AI interviewer platform showing candidate assessment with skill visualization, proctoring analysis, and real-time evaluation dashboard" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Dark technology band with rotating demo badge */}
      <div className="container mx-auto">
        <div className="relative mx-auto overflow-hidden rounded-2xl px-6 py-16 text-center shadow-[var(--shadow-glow)] technology-band">
          <ScrollHighlightText text="Our intelligent system seamlessly coordinates interview slots, taking availability of both candidates and interviewers into account." className="mx-auto max-w-3xl text-2xl md:text-3xl lg:text-4xl font-medium" />
          {/* Demo button */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <Link to="/demo">
              <Button variant="hero" size="sm">Try Demo</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;