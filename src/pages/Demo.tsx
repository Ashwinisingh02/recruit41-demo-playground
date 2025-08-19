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
import demoInterviewsData from "@/data/demoInterviews.json";

interface DemoInterview {
  title: string;
  description: string;
  redirect: string;
}

const DEMO_INTERVIEWS: DemoInterview[] = demoInterviewsData;

const Demo = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? window.location.origin + location.pathname : '';
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  const activeInterview = activeIndex !== null ? DEMO_INTERVIEWS[activeIndex] : null;

  const startDemo = (index: number) => {
    setActiveIndex(index);
    setStep(0);
    setOpen(true);
  };

  const handleTryDemo = () => {
    if (activeInterview?.redirect) {
      window.open(activeInterview.redirect, '_blank');
    }
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
          {DEMO_INTERVIEWS.map((interview, i) => (
            <Card key={interview.title} className="hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">{interview.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {interview.title === "Coding Hands On" && "Fullstack development interview with React and FastAPI/Django focus"}
                  {interview.title === "Amazon Deep Dive" && "Mock Amazon interview focusing on the 'deep dive' leadership principle"}
                  {interview.title === "Screening" && "Quick 15-minute screening round for software engineering roles"}
                  {interview.title === "Software Engineering Intern" && "45-minute resume and skills interview for freshers"}
                  {interview.title === "System Design" && "Design performant and scalable software solutions"}
                  {interview.title === "SDET 3-5 yrs" && "Automation testing with Selenium, Cypress, or Playwright"}
                  {interview.title === "SDE - Coding Round" && "Coding assessment for fresher-level positions"}
                  {interview.title === "Product Architect" && "Technical vision and high-level system design evaluation"}
                  {interview.title === "Business Analyst" && "Translate business needs into clear requirements"}
                  {interview.title === "HR Analyst" && "HR data analysis and people-centric insights"}
                  {interview.title === "Financial Analyst" && "Financial modeling, forecasting, and variance analysis"}
                  {interview.title === "SDE - Java" && "Java backend development with Spring Boot framework"}
                </p>
                <Button onClick={() => startDemo(i)} variant="hero" className="w-full">Try Interview</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{activeInterview?.title} — Demo Interview</DialogTitle>
          </DialogHeader>
          {activeInterview && (
            <div className="space-y-4">
              <div className="p-4 rounded-md border bg-card">
                <div className="text-sm text-muted-foreground mb-4 max-h-60 overflow-y-auto">
                  {activeInterview.description.split('\r\n').map((line, idx) => {
                    if (line.startsWith('##')) {
                      return <h3 key={idx} className="font-semibold text-foreground mt-3 mb-2 text-base">{line.replace('##', '').trim()}</h3>;
                    }
                    if (line.startsWith('*')) {
                      return <li key={idx} className="ml-4 list-disc mb-1">{line.replace('*', '').trim()}</li>;
                    }
                    return line.trim() ? <p key={idx} className="mb-2">{line}</p> : null;
                  })}
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleTryDemo} variant="hero" className="flex-1">
                  Start Interview
                </Button>
                <Button onClick={() => setOpen(false)} variant="outline">
                  Close
                </Button>
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
