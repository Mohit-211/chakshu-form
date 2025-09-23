export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border py-6 text-center">
      <p className="font-body text-sm text-muted-foreground mb-2">
        © {new Date().getFullYear()} Mocha Date. All rights reserved.
      </p>
      <a
        href="/privacy"
        className="font-body text-sm text-primary hover:underline transition-smooth"
      >
        Privacy Policy
      </a>
    </footer>
  );
}
