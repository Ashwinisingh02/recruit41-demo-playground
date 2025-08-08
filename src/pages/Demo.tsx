import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface RoleDemo {
  role: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: string[];
}

const ROLES: RoleDemo[] = [
  {
    role: 'Software Engineer',
    description: 'Algorithms, systems design, and code reasoning.',
    difficulty: 'Advanced',
    questions: [
      'Explain the time and space complexity trade-offs of using a trie vs a hash map.',
      'Design a rate limiter for a distributed API.',
      'Walk through debugging a flaky integration test in CI.'
    ]
  },
  {
    role: 'Data Scientist',
    description: 'Experiment design, modeling, and metrics.',
    difficulty: 'Intermediate',
    questions: [
      'How would you detect data leakage in a churn model?',
      'Choose between A/B test and multi-armed bandit—when and why?',
      'Explain SHAP values to a non-technical stakeholder.'
    ]
  },
  {
    role: 'Product Manager',
    description: 'Discovery, prioritization, and execution.',
    difficulty: 'Intermediate',
    questions: [
      'Define a success metric for a new onboarding flow.',
      'Prioritize three competing roadmap items with constraints.',
      'How would you validate a problem without building a feature?'
    ]
  },
  {
    role: 'Sales Associate',
    description: 'Prospecting, discovery, and objection handling.',
    difficulty: 'Beginner',
    questions: [
      'Run a discovery on a mid-market lead in fintech.',
      'Handle a pricing objection when value is unclear.',
      'Qualify a lead using MEDDICC or similar.'
    ]
  },
  {
    role: 'Customer Support',
    description: 'Empathy, troubleshooting, and resolution.',
    difficulty: 'Beginner',
    questions: [
      'Calm an upset customer while gathering logs.',
      'Create a reproducible bug report from a vague ticket.',
      'Suggest a process to reduce repeated issues.'
    ]
  }
];

const Demo = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? window.location.origin + location.pathname : '';
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  const active = activeIndex !== null ? ROLES[activeIndex] : null;
  const totalSteps = active?.questions.length ?? 0;
  const progress = useMemo(() => totalSteps ? ((step + 1) / totalSteps) * 100 : 0, [step, totalSteps]);

  const startDemo = (index: number) => {
    setActiveIndex(index);
    setStep(0);
    setOpen(true);
  };

  const handleRecord = () => {
    toast({ title: 'Demo mode', description: 'Recording is simulated in this demo.' });
  };

  const next = () => {
    if (!active) return;
    if (step + 1 < active.questions.length) setStep(s => s + 1);
    else setStep(s => s); // stay on last
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Try a Demo Interview — Recruit41</title>
        <meta name="description" content="Experience Recruit41 with premade demo interviews for popular roles. No signup required." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Navbar />

      <main className="container mx-auto py-14">
        <header className="max-w-2xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 font-display">Try a demo interview</h1>
          <p className="text-muted-foreground">Select a role and experience an AI-led, structured interview. This demo simulates the candidate flow.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((r, i) => (
            <Card key={r.role} className="hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">{r.role}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{r.description}</p>
                <p className="text-xs text-muted-foreground">Difficulty: <span className="text-foreground font-medium">{r.difficulty}</span></p>
                <Button onClick={() => startDemo(i)} variant="hero" className="w-full">Start demo</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{active?.role} — Demo interview</DialogTitle>
          </DialogHeader>
          {active && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Question {Math.min(step + 1, totalSteps)} of {totalSteps}</span>
                <span className="text-muted-foreground">Demo mode</span>
              </div>
              <Progress value={progress} />
              <div className="p-4 rounded-md border bg-card animate-fade-in">
                <p className="font-medium mb-2">{active.questions[step]}</p>
                <p className="text-sm text-muted-foreground">Tip: Speak for ~90 seconds. The AI will follow up if needed.</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleRecord} variant="secondary">Record answer</Button>
                <Button onClick={next} variant="default">Next</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Demo;
