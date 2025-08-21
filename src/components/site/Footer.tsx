import { Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Recruit41</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered hiring platform that automates resume screening and first-round interviews, delivering only the most qualified candidates.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://in.linkedin.com/company/recruit41" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@recruit41.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Contact us">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Product</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#interview-types" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Interview Types</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Try Demo</a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Support</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</a>
              <a href="mailto:contact@recruit41.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              {/* <a href="https://www.recruit41.com/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a> */}
              <a href="https://www.recruit41.com/dpa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">DPA</a>
              <a href="https://www.recruit41.com/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Recruit41. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ for better hiring
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;