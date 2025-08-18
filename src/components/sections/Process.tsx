import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Brain, Video, BarChart3, ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Upload Job Requirements",
    description: "Define your role requirements and let our AI understand your needs",
    icon: Upload,
    features: ["Custom job templates", "Skill mapping", "Role-specific criteria"]
  },
  {
    number: "02", 
    title: "AI-Powered Screening",
    description: "Our intelligent agents automatically screen and rank candidates",
    icon: Brain,
    features: ["Resume analysis", "Skill assessment", "Cultural fit evaluation"]
  },
  {
    number: "03",
    title: "Automated Interviews", 
    description: "Conduct consistent, unbiased interviews at scale",
    icon: Video,
    features: ["Video interviews", "Technical assessments", "Behavioral analysis"]
  },
  {
    number: "04",
    title: "Intelligent Insights",
    description: "Get comprehensive reports and recommendations", 
    icon: BarChart3,
    features: ["Detailed analytics", "Hiring recommendations", "Performance predictions"]
  }
];

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(processSteps.length).fill(false));
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-white dark:from-orange-950/20 dark:to-background" />
      
      {/* Floating blur elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
            Streamlined Hiring Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From job posting to final decision, our AI agents work together to deliver exceptional hiring outcomes
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps[index];
            
            return (
              <div
                key={step.number}
                ref={el => stepRefs.current[index] = el}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <Card className="glass group hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 border-white/20 dark:border-white/10">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-4">
                      {/* Step number with gradient */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.number}
                        </div>
                        {index < processSteps.length - 1 && (
                          <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 text-primary/60 hidden lg:block" size={20} />
                        )}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl md:text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="text-green-600 dark:text-green-400" size={12} />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;