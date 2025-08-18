import { 
  Brain, 
  Video, 
  LineChart, 
  Users, 
  Clock, 
  Shield, 
  FileText, 
  Monitor, 
  Zap, 
  Target, 
  TrendingUp, 
  Eye,
  ImageIcon
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Powerful Features & Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Hire faster, fairer, and with greater confidence using our comprehensive AI-powered platform
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
          
          {/* Large Feature - JD-Specific AI Interviews */}
          <div className="md:col-span-3 lg:col-span-4 md:row-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group border border-primary/10">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">JD-Specific AI-Led Interviews</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Interviews designed specifically for each job description, with evaluation rubrics rooted in scientific frameworks like BLOOM and SOLO taxonomy.
                </p>
              </div>
              <div className="mt-auto">
                <div className="bg-background/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    <span>Tailored to your exact requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder 1 */}
          <div className="md:col-span-3 lg:col-span-2 bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-border/20">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Image placeholder for visual content</p>
            </div>
          </div>

          {/* Medium Feature - Cut Time-to-Hire */}
          <div className="md:col-span-3 lg:col-span-2 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-green-500/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cut Time-to-Hire</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Accelerate your hiring process without compromising on quality.
            </p>
          </div>

          {/* Real-World Simulations */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-accent/10">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Monitor className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-World Simulations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Evaluate candidates on their ability to use AI tools, spreadsheets, and presentation software, mirroring a real workday.
            </p>
          </div>

          {/* Boost Precision */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-orange-500/10">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Boost Precision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our AI-powered shortlisting achieves a 3:1 hire ratio, so you only interview the best candidates.
            </p>
          </div>

          {/* Image Placeholder 2 */}
          <div className="md:col-span-3 lg:col-span-2 bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-border/20">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Image placeholder for visual content</p>
            </div>
          </div>

          {/* Adaptive Fraud Detection */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-red-500/10">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Adaptive Fraud Detection</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Multi-layered system ensuring interview integrity through real-time behavioral analysis.
            </p>
          </div>

          {/* Give Team Superpowers */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-purple-500/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Give Your Team Superpowers</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We're amplifying human judgment, not replacing it. Let AI handle scale while you focus on strategy.
            </p>
          </div>

          {/* End-to-End Automation */}
          <div className="md:col-span-3 lg:col-span-2 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-blue-500/10">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">End-to-End Automation</h3>
            <p className="text-muted-foreground text-xs">
              From resume analysis to adaptive interviews, streamline your entire workflow.
            </p>
          </div>

          {/* Data-Driven Decisions */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-cyan-500/10">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <LineChart className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full access to recordings, transcripts, and evaluation data for informed hiring choices.
            </p>
          </div>

          {/* Candidate Strength Analysis */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-indigo-500/10">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strength Analysis</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pull out candidates' strengths according to their resume and your job description.
            </p>
          </div>

          {/* Support for All Roles */}
          <div className="md:col-span-3 lg:col-span-2 bg-gradient-to-br from-teal-500/10 to-teal-500/5 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group border border-teal-500/10">
            <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="font-bold mb-2">Support for All Roles</h3>
            <p className="text-muted-foreground text-xs">
              Technical to non-technical roles across all industries.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
