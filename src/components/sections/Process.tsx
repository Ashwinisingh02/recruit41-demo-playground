import { ArrowRight, Upload, FileText, Zap, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Automated demo component for step 1
const InterviewCreationDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { 
      icon: <Upload className="w-6 h-6 text-primary" />, 
      text: "Uploading job description...", 
      subtext: "SDE-1 Position.pdf" 
    },
    { 
      icon: <Zap className="w-6 h-6 text-primary animate-pulse" />, 
      text: "AI analyzing requirements...", 
      subtext: "Extracting key skills and requirements" 
    },
    { 
      icon: <FileText className="w-6 h-6 text-primary" />, 
      text: "Generating interview for SDE-1", 
      subtext: "Creating customized technical questions" 
    },
    { 
      icon: <CheckCircle className="w-6 h-6 text-green-500" />, 
      text: "Interview template created!", 
      subtext: "Ready to schedule candidates" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass hover-scale max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          {steps[currentStep].icon}
          {steps[currentStep].text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{steps[currentStep].subtext}</p>
        {currentStep === 3 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
              <span>JavaScript & React</span>
              <span className="text-primary">15 min</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
              <span>Problem Solving</span>
              <span className="text-primary">20 min</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
              <span>System Design</span>
              <span className="text-primary">25 min</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const processSteps = [
  {
    number: "1",
    title: "Create & Customize Your Interview",
    description: "Design comprehensive technical interview plans in minutes, not hours. Our platform offers pre-built templates for various roles and levels, with fully customizable questions and scoring criteria.",
    mockup: <InterviewCreationDemo />
  },
  {
    number: "2",
    title: "Invite Candidates & Schedule",
    description: "Seamlessly invite candidates to your custom technical assessments. Our scheduling system integrates with your calendar and sends automated reminders to ensure candidates are prepared and on time.",
    mockup: (
      <Card className="glass hover-scale max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-foreground">Candidate Scheduling</CardTitle>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Available</span>
            <span className="text-sm text-muted-foreground">4 Slots Today</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded">
            <span className="text-foreground">10:00 AM - 11:00 AM</span>
            <span className="text-sm text-primary">Available</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded">
            <span className="text-foreground">1:30 PM - 2:30 PM</span>
            <span className="text-sm text-primary">Available</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded">
            <span className="text-foreground">4:00 PM - 5:00 PM</span>
            <span className="text-sm text-destructive">Booked</span>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    number: "3",
    title: "Review AI-Powered Insights",
    description: "Our AI analyzes candidate performance across multiple dimensions, providing objective scoring and detailed insights. Compare candidates side-by-side and make data-driven hiring decisions with confidence.",
    mockup: (
      <Card className="glass hover-scale max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Alex Johnson</CardTitle>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-primary">8.5</span>
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <div key={star} className={`w-4 h-4 ${star <= 4 ? 'text-primary' : 'text-muted'}`}>★</div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded">
            <h4 className="font-medium text-foreground mb-2">AI Summary</h4>
            <p className="text-sm text-muted-foreground">Strong technical foundation with solid React knowledge. Excellent problem-solving approach and communication skills.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 p-3 rounded">
              <div className="text-sm font-medium text-primary">Risk Assessment</div>
              <div className="text-xs text-primary/80">Low Risk</div>
            </div>
            <div className="bg-accent/20 p-3 rounded">
              <div className="text-sm font-medium text-accent-foreground">Technical Skills</div>
              <div className="text-xs text-muted-foreground">Excellent</div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
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
    <section className="py-16 md:py-24 border-t">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-foreground">How Recruit41 Works</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Streamline your hiring process with our intelligent three-step approach that saves time and improves candidate quality.
          </p>
          <p className="text-muted-foreground">From interview creation to final insights, we've got you covered.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
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
                  transitionDelay: `${index * 200}ms` 
                }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-elegant mx-auto mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
                
                {/* Mockup */}
                <div className="flex justify-center mb-6">
                  {step.mockup}
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group story-link">
                    Learn more 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;