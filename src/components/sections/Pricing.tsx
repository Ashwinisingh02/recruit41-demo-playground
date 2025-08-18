import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";
const plans = [{
  name: "Basic Plan",
  subtitle: "For startups and small businesses",
  features: ["Resume screening", "Interview scheduling", "Virtual interviews", "AI score analytics"]
}, {
  name: "Pro Plan",
  subtitle: "For growing companies",
  features: ["Everything in Basic", "Customizable assessments", "Comprehensive analytics", "Interview report insights"],
  highlighted: true
}, {
  name: "Enterprise Plan",
  subtitle: "For large organizations",
  features: ["Advanced integrations", "Dedicated support", "Enterprise security", "Customization options"]
}];
const Pricing = () => {
  return <section id="pricing" className="py-16 md:py-24 border-t">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Need a custom solution?</h2>
          <p className="text-muted-foreground mb-6">Get pricing tailored to your organization's specific needs and scale. Our team will work with you to create a plan that fits your unique requirements.</p>
          
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border p-8 glass">
            <div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Resume screening", "Interview scheduling", "Virtual interviews", "AI score analytics", "Customizable assessments", "Comprehensive analytics", "Interview report insights", "Advanced integrations", "Dedicated support", "Enterprise security", "Customization options"].map(feature => <div key={feature} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t">
              <a 
                href="mailto:contact@recruit41.com?subject=Pricing Inquiry" 
                className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
              >
                contact@recruit41.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Pricing;