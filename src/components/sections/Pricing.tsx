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

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border p-8 glass">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {plans.map((p) => (
                <div key={p.name} className="text-center">
                  <div className="mb-2 text-lg font-semibold text-foreground">{p.name}</div>
                  <div className="text-muted-foreground text-sm">{p.subtitle}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold mb-6 text-center">All Features Included</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Resume screening",
                  "Interview scheduling", 
                  "Virtual interviews",
                  "AI score analytics",
                  "Customizable assessments",
                  "Comprehensive analytics",
                  "Interview report insights",
                  "Advanced integrations",
                  "Dedicated support",
                  "Enterprise security",
                  "Customization options"
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t">
              <Button 
                size="lg"
                onClick={() => window.location.href = 'mailto:contact@recruit41.com?subject=Pricing Inquiry'}
                className="px-8"
              >
                Get Custom Pricing
              </Button>
            </div>
          </div>
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
