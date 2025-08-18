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
    text: "Upload JD",
    completed: false,
    current: false
  }, {
    text: "AI Analysis",
    completed: false,
    current: false
  }, {
    text: "Generate Template",
    completed: false,
    current: false
  }, {
    text: "Ready to Schedule",
    completed: false,
    current: false
  }];
  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isActive]);
  const progressSteps = steps.map((step, index) => ({
    ...step,
    completed: index < currentStep,
    current: index === currentStep
  }));
  return <Card className="glass hover-scale max-w-3xl mx-auto">
      <CardHeader className="pb-4">
        
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            {progressSteps.map((step, index) => <div key={index} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${step.completed ? 'bg-green-500 text-white' : step.current ? 'bg-primary text-primary-foreground animate-pulse' : 'bg-muted text-muted-foreground'}`}>
                  {step.completed ? '✓' : index + 1}
                </div>
                {index < progressSteps.length - 1 && <div className={`flex-1 h-1 mx-3 rounded transition-all duration-500 ${step.completed ? 'bg-green-500' : 'bg-muted'}`}></div>}
              </div>)}
          </div>
          
          {/* Step Labels */}
          <div className="grid grid-cols-4 gap-3 text-sm">
            {progressSteps.map((step, index) => <div key={index} className={`text-center transition-colors duration-500 leading-tight ${step.completed ? 'text-green-600 dark:text-green-400' : step.current ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {step.text}
              </div>)}
          </div>
        </div>
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
    text: "Upload Candidates",
    completed: false,
    current: false
  }, {
    text: "Filter & Qualify",
    completed: false,
    current: false
  }, {
    text: "Send Invites",
    completed: false,
    current: false
  }, {
    text: "Schedule Interviews",
    completed: false,
    current: false
  }];
  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isActive]);
  const progressSteps = steps.map((step, index) => ({
    ...step,
    completed: index < currentStep,
    current: index === currentStep
  }));
  return <Card className="glass hover-scale max-w-3xl mx-auto">
      <CardHeader className="pb-4">
        
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            {progressSteps.map((step, index) => <div key={index} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${step.completed ? 'bg-green-500 text-white' : step.current ? 'bg-primary text-primary-foreground animate-pulse' : 'bg-muted text-muted-foreground'}`}>
                  {step.completed ? '✓' : index + 1}
                </div>
                {index < progressSteps.length - 1 && <div className={`flex-1 h-1 mx-3 rounded transition-all duration-500 ${step.completed ? 'bg-green-500' : 'bg-muted'}`}></div>}
              </div>)}
          </div>
          
          {/* Step Labels */}
          <div className="grid grid-cols-4 gap-3 text-sm">
            {progressSteps.map((step, index) => <div key={index} className={`text-center transition-colors duration-500 leading-tight ${step.completed ? 'text-green-600 dark:text-green-400' : step.current ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {step.text}
              </div>)}
          </div>
        </div>
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
    text: "Process Interviews",
    completed: false,
    current: false
  }, {
    text: "Analyze Responses",
    completed: false,
    current: false
  }, {
    text: "Generate Insights",
    completed: false,
    current: false
  }, {
    text: "Final Report",
    completed: false,
    current: false
  }];
  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isActive]);
  const progressSteps = steps.map((step, index) => ({
    ...step,
    completed: index < currentStep,
    current: index === currentStep
  }));
  return <Card className="glass hover-scale max-w-3xl mx-auto">
      <CardHeader className="pb-4">
        
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            {progressSteps.map((step, index) => <div key={index} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${step.completed ? 'bg-green-500 text-white' : step.current ? 'bg-primary text-primary-foreground animate-pulse' : 'bg-muted text-muted-foreground'}`}>
                  {step.completed ? '✓' : index + 1}
                </div>
                {index < progressSteps.length - 1 && <div className={`flex-1 h-1 mx-3 rounded transition-all duration-500 ${step.completed ? 'bg-green-500' : 'bg-muted'}`}></div>}
              </div>)}
          </div>
          
          {/* Step Labels */}
          <div className="grid grid-cols-4 gap-3 text-sm">
            {progressSteps.map((step, index) => <div key={index} className={`text-center transition-colors duration-500 leading-tight ${step.completed ? 'text-green-600 dark:text-green-400' : step.current ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {step.text}
              </div>)}
          </div>
          
          {/* Results Preview */}
          {currentStep === 3 && <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-800 dark:text-green-200">Alex Johnson</span>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">8.5/10</span>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                Strong technical skills • Low risk • Recommended
              </p>
            </div>}
        </div>
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
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-step') || '0');
        if (entry.isIntersecting) {
          setActiveStep(index);
        } else if (activeStep === index) {
          setActiveStep(null);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-20% 0px'
    });
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [activeStep]);
  return <section className="py-16 md:py-24 min-h-screen bg-gradient-subtle relative">
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
          <div className="space-y-48 md:space-y-56">
            {processSteps.map((step, index) => {
            const isVisible = activeStep === index;
            const StepComponent = step.component;
            const IconComponent = step.icon;
            return <div key={index} ref={el => stepRefs.current[index] = el} data-step={index} className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-12'}`}>
                  {/* Step Icon */}
                  <div className={`absolute left-4 md:left-12 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isVisible ? 'bg-primary border-primary scale-110' : 'bg-background border-muted scale-100'}`}>
                    <IconComponent className={`w-4 h-4 transition-colors duration-500 ${isVisible ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-20 md:ml-32 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-8'}`}>
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
                    <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-50 translate-x-8 scale-95'}`}>
                      <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl transition-all duration-300 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
                        <div className="relative">
                          <StepComponent isActive={isVisible} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Process;