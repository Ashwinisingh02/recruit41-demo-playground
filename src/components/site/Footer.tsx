import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Recruit41. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="https://www.recruit41.com/privacy-policy" className="hover:text-foreground">Privacy Policy</a>
            <a href="https://www.recruit41.com/terms-of-service" className="hover:text-foreground">Terms of Service</a>
            <a href="https://www.recruit41.com/data-processing-agreement" className="hover:text-foreground">DPA</a>
            <a href="https://www.recruit41.com/cookie-policy" className="hover:text-foreground">Cookie Policy</a>
            <a href="mailto:contact@recruit41.com" className="hover:text-foreground">Contact</a>
          </nav>
          <a 
            href="https://in.linkedin.com/company/recruit41" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
