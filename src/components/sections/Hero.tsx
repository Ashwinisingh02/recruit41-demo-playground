import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-recruit41.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxA = `translateY(${offset * 0.08}px)`;
  const parallaxB = `translateY(${offset * 0.14}px)`;

  return (
    <section className="relative overflow-hidden pt-8 md:pt-14">
      {/* Background gradient + glows */}
      <div className="absolute inset-0 -z-10 hero-gradient" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-20 -left-24 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/.35), transparent)", transform: parallaxA }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-40 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary-glow)/.32), transparent)", transform: parallaxB }}
        aria-hidden
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
        <div className="animate-enter">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            ✨ Futuristic AI Hiring
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight font-display">
            The Intelligent Solution for Talent Acquisition
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Interview platform that combines structured AI interviews with cutting‑edge analytics to revolutionize your hiring process.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/demo"><Button variant="hero" size="lg">Get started free</Button></Link>
            <a href="#features"><Button variant="outline" size="lg">Explore features</Button></a>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            ★★★★★ Based on 100+ reviews
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="glass rounded-xl shadow-[var(--shadow-elegant)] p-2">
            <img
              src={heroImage}
              alt="Recruit41 platform UI screenshot"
              className="w-full h-auto rounded-md"
              loading="lazy"
              style={{ transform: parallaxB }}
            />
          </div>
        </div>
      </div>

      {/* Dark technology band with rotating demo badge */}
      <div className="container mx-auto">
        <div className="relative mx-auto overflow-hidden rounded-2xl px-6 py-16 text-center shadow-[var(--shadow-glow)] technology-band">
          <h2 className="mx-auto max-w-4xl text-xl md:text-2xl font-medium">
            Our intelligent system seamlessly coordinates interview slots, taking availability of both candidates and interviewers into account.
          </h2>
          {/* Rotating badge */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative h-36 w-36">
              <svg className="absolute inset-0 h-full w-full spin-slower" viewBox="0 0 100 100" aria-hidden>
                <defs>
                  <path id="circle" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                </defs>
                <text fontSize="8" fill="currentColor">
                  <textPath href="#circle" startOffset="0%">
                    LIVE INTERACTIVE DEMO • RECRUIT41 • LIVE INTERACTIVE DEMO • 
                  </textPath>
                </text>
              </svg>
              <Link to="/demo" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Button variant="hero" size="sm">Try Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
