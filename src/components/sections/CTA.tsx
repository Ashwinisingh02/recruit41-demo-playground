import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl px-6 py-12 md:py-16 shadow-[var(--shadow-glow)] cta-gradient">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-bold font-display">Supercharge Your Hiring Process with Recruit41</h3>
              <p className="mt-2 text-muted-foreground">Get updates, playbooks, and early access to new features.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="you@email.com" aria-label="Email" />
              <Button variant="hero">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
