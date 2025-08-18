import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Recruit41?",
      answer: "Recruit41 is a humanoid/bot interview platform designed to help companies find the right talent efficiently across all domains. The platform has different modules to assess past experience, technical skills, behavioural attributes, culture-fit and task based-evaluation. Our process ensures every hire is skilled, capable, and the perfect fit for your organization."
    },
    {
      question: "How does Recruit41's hiring process work?",
      answer: "Our hiring process is structured to assess candidates beyond just their resumes. It includes: Skill Demonstration: Candidates build new features, refactor code, and ensure system compatibility. Real-world Assessments: Practical tests to evaluate problem-solving and technical expertise. Structured Interviews: AI-powered and expert-led interviews to assess both technical and soft skills."
    },
    {
      question: "Who can use Recruit41?",
      answer: "Recruit41 is designed for businesses of all sizes looking to hire top talent. It caters to startups, mid-sized firms, and enterprises across various industries, not just tech."
    },
    {
      question: "Can Recruit41 help with fresher hiring?",
      answer: "Yes! We specialize in fresher hiring, ensuring that companies get access to the best campus talent. Our structured assessments help identify high-potential candidates with the right skills and mindset."
    },
    {
      question: "What makes Recruit41 different from other hiring platforms?",
      answer: "Broad Horizons – Human + AI = Awesome. Recruit41 brings together the best of both worlds: the expertise of human intelligence and the efficiency of AI to transform recruitment across industries. Human Expertise to Configure and Align: Our platform leverages human expertise to configure workflows, set precise rubrics, and establish criteria tailored to your unique hiring goals and organizational values. AI for Effortless Execution: Calibrates processes, automates interview conduction, handles repetitive tasks, and ensures consistency, saving time while delivering high-quality results."
    },
    {
      question: "How can I start using Recruit41 for hiring?",
      answer: "Getting started is easy! Simply sign up on our platform, customize your hiring needs, and let Recruit41 streamline the process for you."
    },
    {
      question: "Is Recruit41 suitable for non-technical roles?",
      answer: "Absolutely! While we have strong expertise in technical hiring, our platform is designed to assess and hire talent across all domains, including marketing, sales, operations, and more."
    },
    {
      question: "How does Recruit41 ensure quality hires?",
      answer: "Our hiring process is built around rigorous evaluations, real-world assessments, and structured interviews, ensuring that only the best candidates make it through."
    },
    {
      question: "Does Recruit41 support remote hiring?",
      answer: "Yes! Recruit41 is designed to facilitate seamless remote hiring by offering virtual assessments, AI-driven interview conduction, and structured evaluation criteria to ensure the right fit—no matter where the candidate is located."
    },
    {
      question: "How do I get in touch with Recruit41 for support?",
      answer: "You can reach out to us via our contact page, email, or customer support chat for any assistance regarding the platform."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Everything you need to know about Recruit41 and how it can transform your hiring process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass rounded-lg border-border/50 px-4 sm:px-6 transition-all duration-300 hover:shadow-lg"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-4 sm:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;