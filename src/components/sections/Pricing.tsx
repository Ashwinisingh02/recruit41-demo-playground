import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    subtitle: "For startups and small businesses",
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
    features: [
      "Advanced integrations",
      "Dedicated support",
      "Enterprise security",
      "Customization options",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 border-t">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Choose the Perfect Plan for Your Hiring Needs
          </h2>
          <p className="text-muted-foreground mb-6">
            Get pricing tailored to your organization's specific needs and scale.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span>Contact us at <a href="mailto:contact@recruit41.com" className="text-primary font-medium hover:underline">contact@recruit41.com</a> for pricing</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 hover-scale ${p.highlighted ? "shadow-[var(--shadow-glow)]" : ""} glass relative`}>
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-2 text-lg font-semibold text-foreground">{p.name}</div>
              <div className="mb-6 text-muted-foreground">{p.subtitle}</div>
              
              <ul className="space-y-3 text-sm mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 w-4 h-4 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button 
                  variant={p.highlighted ? "default" : "outline"} 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:contact@recruit41.com?subject=Pricing Inquiry - ' + p.name}
                >
                  Get Pricing
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Need a custom solution? Our team will work with you to create a plan that fits your unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
