const SocialProof = () => {
  const companies = [
    { name: "Miro", logo: "M" },
    { name: "Stripe", logo: "stripe" },
    { name: "Google", logo: "Google" },
    { name: "Adobe", logo: "Adobe" },
    { name: "Spotify", logo: "Spotify" },
    { name: "Microsoft", logo: "Microsoft" }
  ];

  return (
    <section className="py-12 border-b border-border/40">
      <div className="container mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-8 text-muted-foreground font-medium text-lg"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;