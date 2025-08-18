import { Upload, FileText, Zap, CheckCircle, Calendar, Users, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  number: "1",
  title: "Create & Customize Your Interview",
  description: "Design comprehensive technical interview plans in minutes, not hours. Our platform offers pre-built templates for various roles and levels, with fully customizable questions and scoring criteria.",
  component: InterviewCreationDemo
}, {
  number: "2",
  title: "Invite Candidates & Schedule",
  description: "Upload candidate database and automatically send interview invites to qualified applicants.",
  component: SchedulingDemo
}, {
  number: "3",
  title: "Review AI-Powered Insights",
  description: "Our AI analyzes candidate performance across multiple dimensions, providing objective scoring and detailed insights. Compare candidates side-by-side and make data-driven hiring decisions with confidence.",
  component: InsightsDemo
}];
const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Global step cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % processSteps.length);
    }, 10000); // Each step runs for 10 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveStep(prev => (prev + 1) % processSteps.length);
  };

  const goToPrev = () => {
    setActiveStep(prev => (prev - 1 + processSteps.length) % processSteps.length);
  };

  const goToStep = (index: number) => {
    setActiveStep(index);
  };

  const currentStep = processSteps[activeStep];
  const DemoComponent = currentStep.component;
  return <section className="py-16 md:py-24 border-t min-h-screen flex flex-col bg-gradient-subtle">
      <div className="container mx-auto flex-1 flex flex-col">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-foreground">How Recruit41 Works</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Streamline your hiring process with our intelligent three-step approach that saves time and improves candidate quality.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-7xl relative">
            {/* Carousel Track */}
            <div className="flex items-center justify-center relative h-[600px]">
              {processSteps.map((step, index) => {
                const StepComponent = step.component;
                const isActive = index === activeStep;
                const isPrev = index === (activeStep - 1 + processSteps.length) % processSteps.length;
                const isNext = index === (activeStep + 1) % processSteps.length;
                
                let position = 'hidden';
                let transform = 'translate-x-full';
                let scale = 'scale-75';
                let opacity = 'opacity-0';
                let zIndex = 'z-10';
                let blur = '';
                
                if (isActive) {
                  position = 'flex';
                  transform = 'translate-x-0';
                  scale = 'scale-100';
                  opacity = 'opacity-100';
                  zIndex = 'z-30';
                  blur = '';
                } else if (isPrev) {
                  position = 'flex';
                  transform = '-translate-x-[80%]';
                  scale = 'scale-75';
                  opacity = 'opacity-50';
                  zIndex = 'z-20';
                  blur = 'backdrop-blur-sm';
                } else if (isNext) {
                  position = 'flex';
                  transform = 'translate-x-[80%]';
                  scale = 'scale-75';
                  opacity = 'opacity-50';
                  zIndex = 'z-20';
                  blur = 'backdrop-blur-sm';
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 ${position} ${zIndex} items-center justify-center transition-all duration-700 ease-in-out ${transform} ${scale} ${opacity}`}
                  >
                    <div className="w-full max-w-2xl">
                      <div className={`bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant ${blur} ${!isActive ? 'blur-sm' : ''}`}>
                        {/* Demo Component */}
                        <div className="flex justify-center mb-8">
                          <div className="w-full max-w-md">
                            <StepComponent isActive={isActive} />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                            {step.title}
                          </h3>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
                            {step.description}
                          </p>
                          
                          {/* Step Indicator */}
                          <div className="flex justify-center items-center space-x-2">
                            <span className="text-sm text-muted-foreground">Step</span>
                            <div className="flex space-x-1">
                              {processSteps.map((_, stepIndex) => (
                                <div
                                  key={stepIndex}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    stepIndex === index 
                                      ? 'bg-primary' 
                                      : 'bg-muted-foreground/30'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{index + 1}/{processSteps.length}</span>
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

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>;
};
export default Process;