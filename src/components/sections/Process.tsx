import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    number: "1",
    title: "Create & Customize Your Interview",
    description: "Design comprehensive technical interview plans in minutes, not hours. Our platform offers pre-built templates for various roles and levels, with fully customizable questions and scoring criteria.",
    mockup: (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Developer Interview</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Active</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Duration: 60 min</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <span className="text-gray-700 dark:text-gray-300">JavaScript Fundamentals</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">15 min</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <span className="text-gray-700 dark:text-gray-300">React Components</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">20 min</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <span className="text-gray-700 dark:text-gray-300">API Integration</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">15 min</span>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "2",
    title: "Invite Candidates & Schedule",
    description: "Seamlessly invite candidates to your custom technical assessments. Our scheduling system integrates with your calendar and sends automated reminders to ensure candidates are prepared and on time.",
    mockup: (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-md">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Candidate Scheduling</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Available</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">4 Slots Today</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <span className="text-gray-700 dark:text-gray-300">10:00 AM - 11:00 AM</span>
            <span className="text-sm text-blue-500">Available</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <span className="text-gray-700 dark:text-gray-300">1:30 PM - 2:30 PM</span>
            <span className="text-sm text-blue-500">Available</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <span className="text-gray-700 dark:text-gray-300">4:00 PM - 5:00 PM</span>
            <span className="text-sm text-orange-500">Booked</span>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "3",
    title: "Review AI-Powered Insights",
    description: "Our AI analyzes candidate performance across multiple dimensions, providing objective scoring and detailed insights. Compare candidates side-by-side and make data-driven hiring decisions with confidence.",
    mockup: (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-md">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">Alex Johnson</h3>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-orange-500">2.9</span>
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <div key={star} className={`w-4 h-4 ${star <= 3 ? 'text-orange-500' : 'text-gray-300'}`}>★</div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div className="bg-orange-500 h-2 rounded-full" style={{width: '58%'}}></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Summary</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Strong technical foundation with solid React knowledge. Excellent problem-solving approach and communication skills.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <div className="text-sm font-medium text-blue-700 dark:text-blue-400">Risk Assessment</div>
              <div className="text-xs text-blue-600 dark:text-blue-500">Low Risk</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <div className="text-sm font-medium text-green-700 dark:text-green-400">Technical Skills</div>
              <div className="text-xs text-green-600 dark:text-green-500">Above Average</div>
            </div>
          </div>
        </div>
      </div>
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
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {processSteps.map((step, index) => {
          const isVisible = visibleSteps[index];
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={step.number}
              ref={el => stepRefs.current[index] = el}
              className={`mb-24 last:mb-0 transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                isEven ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`${isEven ? '' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {step.description}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors group">
                    Learn more 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                
                {/* Mockup */}
                <div className={`${isEven ? '' : 'lg:order-1'} flex justify-center`}>
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    {step.mockup}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;