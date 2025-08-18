const SocialProof = () => {
  const stats = [
    {
      value: "2M+",
      title: "Candidate Interactions",
      subtitle: "Processed through our AI platform"
    },
    {
      value: "87%",
      title: "Better Hiring Accuracy", 
      subtitle: "Compared to traditional methods"
    },
    {
      value: "65%",
      title: "Time Reduction",
      subtitle: "In overall hiring process"
    },
    {
      value: "93%",
      title: "Client Satisfaction",
      subtitle: "Across all our implementations"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 text-center hover-scale"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {stat.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;