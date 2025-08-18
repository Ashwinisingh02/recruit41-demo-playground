import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={resolvedTheme === 'dark' 
              ? "/lovable-uploads/267730ba-d6ac-4bfa-bc64-dc7541608907.png"
              : "/lovable-uploads/54974109-dd05-4705-9f49-121e10853c08.png"
            }
            alt="Recruit41 logo" 
            className="h-12 w-auto object-contain"
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
