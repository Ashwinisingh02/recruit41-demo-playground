import { Brain, Video, LineChart, Users, Clock, Shield } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Powerful Features of Recruit41</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We help companies make smarter, faster hiring decisions with deep technical insights and an efficient, structured process.
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {/* Large Feature - Virtual Interviews */}
          <div className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Virtual Interviews</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Realistic, structured AI-led interviews with voice and video capabilities. Create immersive interview experiences that feel natural and engaging.
                </p>
              </div>
              <div className="mt-auto">
                <div className="bg-background/50 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Human-like conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Feature - AI Analytics */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <LineChart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Video Analytics</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Deep analytics and auto-generated reports to support data-driven hiring decisions.
            </p>
          </div>

          {/* Small Feature - Smart Screening */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-bold mb-2">Smart Screening</h3>
            <p className="text-muted-foreground text-xs">
              Intelligent resume parsing and candidate ranking.
            </p>
          </div>

          {/* Medium Feature - 24/7 Availability */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Candidates can take interviews anytime, anywhere. No scheduling conflicts or timezone issues.
            </p>
          </div>

          {/* Small Feature - Bias-Free */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">Bias-Free</h3>
            <p className="text-muted-foreground text-xs">
              Fair, objective evaluations for all candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
