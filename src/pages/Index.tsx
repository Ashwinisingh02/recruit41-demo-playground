import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import heroImage from "@/assets/hero-recruit41.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bot, Gauge, ShieldCheck, LineChart } from "lucide-react";

const Home = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? window.location.origin + location.pathname : '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Recruit41 — AI Interview Platform</title>
        <meta name="description" content="Recruit41 delivers structured, bias-aware AI interviews at scale. Speed up hiring with automation and fair, data-backed evaluations." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Recruit41',
          url: canonical,
          logo: '/favicon.ico',
          sameAs: []
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Recruit41',
          description: 'AI interview platform for structured, fair, and scalable hiring',
          brand: { '@type': 'Brand', name: 'Recruit41' }
        })}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="animate-enter">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 font-display">
              AI interviews that are fair, fast, and scalable
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Recruit41 automates structured interviews with AI so you can screen candidates in minutes—not weeks. Reduce bias, increase signal, and delight candidates.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/demo"><Button variant="hero" size="lg">Try a demo</Button></Link>
              <a href="#features"><Button variant="outline" size="lg">Explore features</Button></a>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img
              src={heroImage}
              alt="Recruit41 AI interview platform hero illustration"
              className="w-full h-auto rounded-lg shadow-[var(--shadow-elegant)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 border-t">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-3 font-display">Designed for modern hiring</h2>
            <p className="text-muted-foreground">Everything you need to run structured, scalable interviews—powered by AI.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover-scale animate-fade-in">
              <CardHeader>
                <Bot className="text-primary" />
                <CardTitle>AI interviewer</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Adaptive questioning, rich follow-ups, and consistent scoring for every candidate.
              </CardContent>
            </Card>
            <Card className="hover-scale animate-fade-in" style={{animationDelay:'60ms'}}>
              <CardHeader>
                <Gauge className="text-primary" />
                <CardTitle>Faster screening</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Screen 10× more applicants with async interviews and automated summaries.
              </CardContent>
            </Card>
            <Card className="hover-scale animate-fade-in" style={{animationDelay:'120ms'}}>
              <CardHeader>
                <ShieldCheck className="text-primary" />
                <CardTitle>Fair & consistent</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Structured rubrics reduce bias; audit trails and calibration ensure parity.
              </CardContent>
            </Card>
            <Card className="hover-scale animate-fade-in" style={{animationDelay:'180ms'}}>
              <CardHeader>
                <LineChart className="text-primary" />
                <CardTitle>Actionable insights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Auto-generated scorecards and ATS-ready notes save hours per role.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-24 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border bg-card animate-fade-in">
              <div className="text-sm text-primary font-medium mb-2">Step 1</div>
              <h3 className="text-xl font-semibold mb-2">Pick a role template</h3>
              <p className="text-sm text-muted-foreground">Choose from curated role libraries with calibrated rubrics and questions.</p>
            </div>
            <div className="p-6 rounded-lg border bg-card animate-fade-in" style={{animationDelay:'80ms'}}>
              <div className="text-sm text-primary font-medium mb-2">Step 2</div>
              <h3 className="text-xl font-semibold mb-2">Share a link</h3>
              <p className="text-sm text-muted-foreground">Candidates complete async interviews on web or mobile at their convenience.</p>
            </div>
            <div className="p-6 rounded-lg border bg-card animate-fade-in" style={{animationDelay:'160ms'}}>
              <div className="text-sm text-primary font-medium mb-2">Step 3</div>
              <h3 className="text-xl font-semibold mb-2">Review & decide</h3>
              <p className="text-sm text-muted-foreground">Get structured scorecards, highlights, and next-step recommendations.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/demo"><Button variant="hero">Try a demo interview</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 border-t">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 font-display">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is Recruit41 different from traditional video interviews?</AccordionTrigger>
              <AccordionContent>
                Recruit41 conducts adaptive, structured interviews with AI, providing consistent scoring, rich follow-ups, and automated summaries—saving teams hours per role.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Does it integrate with our ATS?</AccordionTrigger>
              <AccordionContent>
                Yes. We export scorecards and notes that are ATS-friendly, and provide API/webhooks for deeper integrations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it fair and compliant?</AccordionTrigger>
              <AccordionContent>
                We use structured rubrics, calibration, and audit logs to support fairness and compliance across hiring processes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
