import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Video, LineChart } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 border-t">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Powerful Features of Recruit41</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We help companies make smarter, faster hiring decisions with deep technical insights and an efficient, structured process. When you need the right talent, every time, we've got you covered.
          </p>
          <p className="text-muted-foreground">A comprehensive set of tools to optimize and streamline your hiring decisions.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover-scale glass">
            <CardHeader>
              <Video className="text-primary" />
              <CardTitle>Virtual Interviews</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Realistic, structured AI-led interviews with voice and video capabilities.
            </CardContent>
          </Card>
          <Card className="hover-scale glass">
            <CardHeader>
              <LineChart className="text-primary" />
              <CardTitle>AI Video Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Deep analytics and auto-generated reports to support data-driven decisions.
            </CardContent>
          </Card>
          <Card className="hover-scale glass">
            <CardHeader>
              <Brain className="text-primary" />
              <CardTitle>Smart Screening</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Intelligent resume parsing and scoring to rank candidates objectively.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
