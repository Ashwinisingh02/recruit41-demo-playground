import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight font-display">Recruit41</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground story-link">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground story-link">How it works</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground story-link">FAQ</a>
          <NavLink to="/demo">
            <Button variant="hero" size="sm">Try a demo</Button>
          </NavLink>
        </div>
        <div className="md:hidden">
          <NavLink to="/demo">
            <Button size="sm" variant="secondary">Demo</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
