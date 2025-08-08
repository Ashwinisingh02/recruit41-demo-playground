import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Basic Plan",
    subtitle: "For startups and small businesses",
    monthly: 12,
    features: [
      "Resume screening",
      "Interview scheduling",
      "Virtual interviews",
      "AI score analytics",
    ],
  },
  {
    name: "Pro Plan",
    subtitle: "For growing companies",
    monthly: 50,
    features: [
      "Everything in Basic",
      "Customizable assessments",
      "Comprehensive analytics",
      "Interview report insights",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    subtitle: "For large organizations",
    monthly: 100,
    features: [
      "Advanced integrations",
      "Dedicated support",
      "Enterprise security",
      "Customization options",
    ],
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<Billing>("monthly");
  const multiplier = billing === "yearly" ? 0.8 : 1; // 20% off

  return (
    <section id="pricing" className="py-16 md:py-24 border-t">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
            Choose the Perfect Plan for Your Hiring Needs
          </h2>
          <p className="text-muted-foreground">Pick monthly or save 20% with yearly billing.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border bg-background/70 px-1 py-1">
            <button
              className={`px-3 py-1 rounded-full text-sm ${billing === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${billing === "yearly" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly 20% off
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 hover-scale ${p.highlighted ? "shadow-[var(--shadow-glow)]" : ""} glass`}>
              <div className="mb-2 text-sm text-primary font-medium">{p.name}</div>
              <div className="mb-1 text-muted-foreground">{p.subtitle}</div>
              <div className="my-4 text-4xl font-bold">
                ${Math.round(p.monthly * multiplier)}<span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant={p.highlighted ? "hero" : "outline"} className="w-full">Choose Plan</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
