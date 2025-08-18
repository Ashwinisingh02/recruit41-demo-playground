import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Brain, MessageSquare, Code2, BookOpen, Presentation, Terminal } from "lucide-react";
const interviewStyles = [{
  icon: Search,
  title: "Screening",
  description: "Automated filtering based on location, salary, and key requirements"
}, {
  icon: FileText,
  title: "Prior Experience",
  description: "Resume-based questions to assess expertise and skill authenticity"
}, {
  icon: Brain,
  title: "Case Studies",
  description: "Real-world problem-solving scenarios and challenges"
}, {
  icon: MessageSquare,
  title: "Behavioral",
  description: "Open discussions about past situations and decision-making"
}, {
  icon: Code2,
  title: "Application Development",
  description: "Design and build functional apps with architecture planning"
}, {
  icon: BookOpen,
  title: "Technical Knowledge",
  description: "Broad knowledge tests with deep dives into specifics"
}, {
  icon: Presentation,
  title: "Demonstrations",
  description: "Present code or projects while AI asks follow-up questions"
}, {
  icon: Terminal,
  title: "Live Coding",
  description: "Real-time coding challenges in Python, R, and more"
}];
const InterviewStyles = () => {
  return <section id="interview-types" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Whatever your interview style, we can support it
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mix and match a variety of interview sections to create the perfect assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interviewStyles.map((style, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <style.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {style.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {style.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default InterviewStyles;