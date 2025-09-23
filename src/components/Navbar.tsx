export default function Navbar() {
  return (
    <nav className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="https://mochadate.com" className="flex items-center gap-2">
          <img src="/logo.png" alt="Mocha Date" className="h-10 w-auto" />
        </a>

        {/* Title */}
        <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary">
          Application Form
        </span>
      </div>
    </nav>
  );
}
