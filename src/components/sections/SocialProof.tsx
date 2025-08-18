import { Users, Target, Clock, Star } from "lucide-react";
const SocialProof = () => {
  const stats = [{
    value: "2M+",
    title: "Candidate Interactions",
    subtitle: "Processed through our AI platform",
    icon: Users
  }, {
    value: "87%",
    title: "Better Hiring Accuracy",
    subtitle: "Compared to traditional methods",
    icon: Target
  }, {
    value: "65%",
    title: "Time Reduction",
    subtitle: "In overall hiring process",
    icon: Clock
  }, {
    value: "93%",
    title: "Client Satisfaction",
    subtitle: "Across all our implementations",
    icon: Star
  }];
  return <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className="text-center hover-scale">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  {stat.title}
                </h3>
                
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default SocialProof;