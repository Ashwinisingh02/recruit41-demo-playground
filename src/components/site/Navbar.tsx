import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">R</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Recruit41</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </NavLink>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#cta" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </a>
          <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
            Testimonials
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <NavLink to="/demo">
              <Button variant="default" size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                Log In
              </Button>
            </NavLink>
          </div>
          <ModeToggle />
          <div className="md:hidden">
            <NavLink to="/demo">
              <Button size="sm" variant="secondary">Demo</Button>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
