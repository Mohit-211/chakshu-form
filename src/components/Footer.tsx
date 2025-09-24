export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border py-6 text-center">
      <p className="font-body text-sm text-muted-foreground mb-3">
        © {new Date().getFullYear()} Petal & Promise. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6">
        <a
          href="https://petalandpromise.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-primary hover:underline transition-smooth"
        >
          Main Site
        </a>
        <a
          href="https://petalandpromise.in/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-primary hover:underline transition-smooth"
        >
          Privacy Policy
        </a>
        <a
          href="https://petalandpromise.in/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-primary hover:underline transition-smooth"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
