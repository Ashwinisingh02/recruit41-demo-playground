const jobTypes = [
  // Row 1 - Engineering roles
  [
    "Software Engineer (AWS/Azure/GCP)",
    "Cybersecurity Analyst", 
    "QA/Test Engineer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Cloud Engineer",
    "Backend Engineer",
    "Frontend Engineer"
  ],
  // Row 2 - Product & Design roles
  [
    "Technical Product Manager",
    "UX Designer",
    "UI Designer", 
    "Product Analyst",
    "Design Researcher",
    "Associate Product Manager",
    "Product Owner",
    "UX Researcher",
    "Graphic Designer",
    "Product Designer"
  ],
  // Row 3 - Sales roles
  [
    "Field Sales Representative",
    "Enterprise Sales Executive",
    "Business Development Representative (BDR)",
    "Account Executive",
    "Account Manager", 
    "Sales Manager",
    "Inside Sales Rep",
    "Sales Development Rep",
    "Customer Success Manager",
    "Revenue Operations"
  ],
  // Row 4 - Marketing roles
  [
    "Growth Marketing Manager",
    "Lifecycle Marketing Manager",
    "Paid Ads Specialist (Google/Facebook)",
    "Email Marketing Manager",
    "Content Marketing Manager",
    "Performance Marketing Specialist",
    "SEO Specialist",
    "Brand Manager",
    "Social Media Manager",
    "Marketing Operations"
  ]
];

const JobTypes = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Works for all jobs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create AI interviews for any role across all industries and skill levels
          </p>
        </div>

        <div className="space-y-6">
          {jobTypes.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-4 whitespace-nowrap ${
                rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'
              }`}
            >
              {/* Duplicate the array to create seamless loop */}
              {[...row, ...row].map((job, jobIndex) => (
                <div
                  key={jobIndex}
                  className="inline-flex items-center px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-medium text-foreground hover:bg-accent/50 transition-colors flex-shrink-0"
                >
                  {job}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            And hundreds more job types across every industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobTypes;