import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/7159772f-1001-4490-80ca-27bbdfb5826c.png" 
            alt="Recruit41 logo" 
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground story-link">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground story-link">Pricing</a>
          <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground story-link">Resources</a>
          <NavLink to="/demo">
            <Button variant="hero" size="sm">Try a demo</Button>
          </NavLink>
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <NavLink to="/demo">
            <Button size="sm" variant="secondary">Demo</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
