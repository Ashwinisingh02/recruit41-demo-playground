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
  return <section id="pricing" className="py-12 sm:py-16 md:py-24 border-t">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-display">Need a custom solution?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 px-2 sm:px-0">Get pricing tailored to your organization's specific needs and scale. Our team will work with you to create a plan that fits your unique requirements.</p>
          
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 glass">
            <div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {["Resume screening", "Interview scheduling", "Virtual interviews", "AI score analytics", "Customizable assessments", "Comprehensive analytics", "Interview report insights", "Advanced integrations", "Dedicated support", "Enterprise security", "Customization options"].map(feature => <div key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check className="text-primary mt-0.5 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t">
              <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-sm sm:text-base">contact@recruit41.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Pricing;