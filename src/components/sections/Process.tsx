import { Upload, FileText, Zap, CheckCircle, Calendar, Users, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Automated demo component for step 1
const InterviewCreationDemo = ({
  isActive
}: {
  isActive: boolean;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{
    icon: <Upload className="w-6 h-6 text-primary" />,
    text: "Uploading job description...",
    subtext: "SDE-1 Position.pdf"
  }, {
    icon: <Zap className="w-6 h-6 text-primary animate-pulse" />,
    text: "AI analyzing requirements...",
    subtext: "Extracting key skills and requirements"
  }, {
    icon: <FileText className="w-6 h-6 text-primary" />,
    text: "Generating interview for SDE-1",
    subtext: "Creating customized technical questions"
  }, {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    text: "Interview template created!",
    subtext: "Ready to schedule candidates"
  }];
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isActive]);
  return <Card className="glass hover-scale max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          {steps[currentStep].icon}
          {steps[currentStep].text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{steps[currentStep].subtext}</p>
        {currentStep === 3 && <div className="space-y-2">
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
          </div>}
      </CardContent>
    </Card>;
};

// Automated demo component for step 2
const SchedulingDemo = ({
  isActive
}: {
  isActive: boolean;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{
    icon: <Upload className="w-6 h-6 text-primary" />,
    text: "Uploading candidates.csv...",
    subtext: "Loading candidate database"
  }, {
    icon: <Users className="w-6 h-6 text-primary animate-pulse" />,
    text: "Selecting qualified candidates",
    subtext: "3 candidates match criteria"
  }, {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    text: "Sending interview invites...",
    subtext: "Email invitations in progress"
  }, {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    text: "Invitations sent successfully!",
    subtext: "Waiting for candidate responses"
  }];
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isActive]);
  return <Card className="glass hover-scale max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          {steps[currentStep].icon}
          {steps[currentStep].text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{steps[currentStep].subtext}</p>
        {currentStep === 1 && <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-primary/10 rounded text-sm border border-primary/20">
              <span className="text-foreground">Alex Johnson</span>
              <span className="text-primary">Selected</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-primary/10 rounded text-sm border border-primary/20">
              <span className="text-foreground">Sarah Chen</span>
              <span className="text-primary">Selected</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
              <span className="text-foreground">Mike Wilson</span>
              <span className="text-muted-foreground">Not qualified</span>
            </div>
          </div>}
        {currentStep === 3 && <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded text-sm">
              <span className="text-foreground">Alex Johnson</span>
              <span className="text-green-600 dark:text-green-400">Sent ✓</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded text-sm">
              <span className="text-foreground">Sarah Chen</span>
              <span className="text-green-600 dark:text-green-400">Sent ✓</span>
            </div>
          </div>}
      </CardContent>
    </Card>;
};

// Automated demo component for step 3
const InsightsDemo = ({
  isActive
}: {
  isActive: boolean;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{
    name: "Processing interviews...",
    score: 0,
    progress: 0
  }, {
    name: "Analyzing responses...",
    score: 6.5,
    progress: 45
  }, {
    name: "Generating insights...",
    score: 8.2,
    progress: 78
  }, {
    name: "Alex Johnson",
    score: 8.5,
    progress: 85
  }];
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isActive]);
  const currentData = steps[currentStep];
  return <Card className="glass hover-scale max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {currentData.name}
          </CardTitle>
          {currentStep === 3 && <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-primary">{currentData.score}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => <div key={star} className={`w-4 h-4 ${star <= 4 ? 'text-primary' : 'text-muted'}`}>★</div>)}
              </div>
            </div>}
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{
          width: `${currentData.progress}%`
        }}></div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {currentStep === 3 ? <>
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
          </> : <div className="text-center py-8">
            <div className="animate-pulse text-muted-foreground">
              AI analyzing candidate performance...
            </div>
          </div>}
      </CardContent>
    </Card>;
};

const processSteps = [{
  number: "01",
  title: "Create Interviews in Minutes",
  description: "Design comprehensive technical interview plans in minutes, not hours. Our platform offers pre-built templates for various roles and levels, with fully customizable questions and scoring criteria.",
  component: InterviewCreationDemo,
  icon: Upload
}, {
  number: "02", 
  title: "Invite Candidates & Schedule",
  description: "Upload candidate database and automatically send interview invites to qualified applicants.",
  component: SchedulingDemo,
  icon: Users
}, {
  number: "03",
  title: "Review AI-Powered Insights", 
  description: "Our AI analyzes candidate performance across multiple dimensions, providing objective scoring and detailed insights. Compare candidates side-by-side and make data-driven hiring decisions with confidence.",
  component: InsightsDemo,
  icon: BarChart3
}];

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-step') || '0');
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 min-h-screen bg-gradient-subtle relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-foreground">
            How Recruit41 Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Streamline your hiring process with our intelligent three-step approach that saves time and improves candidate quality.
          </p>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          {/* Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const isVisible = visibleSteps.has(index);
              const StepComponent = step.component;
              const IconComponent = step.icon;
              
              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step={index}
                  className={`relative transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-30 translate-y-12'
                  }`}
                >
                  {/* Step Icon */}
                  <div className={`absolute left-4 md:left-12 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isVisible 
                      ? 'bg-primary border-primary scale-110' 
                      : 'bg-background border-muted scale-100'
                  }`}>
                    <IconComponent className={`w-4 h-4 transition-colors duration-500 ${
                      isVisible ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-20 md:ml-32 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className={`space-y-4 transition-all duration-700 delay-200 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-8'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          STEP - {step.number}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Demo Component */}
                    <div className={`transition-all duration-700 delay-500 ${
                      isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-50 translate-x-8 scale-95'
                    }`}>
                      <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                        <div className="relative">
                          <StepComponent isActive={isVisible} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;