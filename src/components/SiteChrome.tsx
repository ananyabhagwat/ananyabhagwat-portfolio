import { Link } from "@tanstack/react-router";
import { Asterisk } from "lucide-react";

export const EMAIL = "mailto:ananya.bhagwat3720@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/ananyabhagwat";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between py-5">
      <Link to="/" className="flex items-center gap-3 font-medium">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
          AB
        </span>
        Ananya Bhagwat
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link to="/" hash="work" className="hidden hover:opacity-70 sm:block">Work</Link>
        <Link to="/" hash="research" className="hidden hover:opacity-70 sm:block">Research</Link>
        <a
          href={EMAIL}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition hover:opacity-90"
        >
          <Asterisk className="h-4 w-4" /> Get in touch
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex justify-between border-t py-8 text-sm text-muted-foreground">
      <span>© 2026 Ananya Bhagwat</span>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn ↗</a>
    </footer>
  );
}
