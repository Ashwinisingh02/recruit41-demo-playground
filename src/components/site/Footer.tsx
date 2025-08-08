const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Recruit41. All rights reserved.</p>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="mailto:hello@recruit41.com" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
