import { Brain, Video, LineChart, Users, Clock, Shield } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 border-t">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-display">Powerful Features of Recruit41</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-4 px-2 sm:px-0">
            We help companies make smarter, faster hiring decisions with deep technical insights and an efficient, structured process.
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {/* Large Feature - Virtual Interviews */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-3 md:row-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Virtual Interviews</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Realistic, structured AI-led interviews with voice and video capabilities. Create immersive interview experiences that feel natural and engaging.
                </p>
              </div>
              <div className="mt-auto">
                <div className="bg-background/50 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Human-like conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Feature - AI Analytics */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">AI Video Analytics</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Deep analytics and auto-generated reports to support data-driven hiring decisions.
            </p>
          </div>

          {/* Small Feature - Smart Screening */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2">Smart Screening</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Intelligent resume parsing and candidate ranking.
            </p>
          </div>

          {/* Medium Feature - 24/7 Availability */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">24/7 Availability</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Candidates can take interviews anytime, anywhere. No scheduling conflicts or timezone issues.
            </p>
          </div>

          {/* Small Feature - Bias-Free */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2">Bias-Free</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Fair, objective evaluations for all candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
