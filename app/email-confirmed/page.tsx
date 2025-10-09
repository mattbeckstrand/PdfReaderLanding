export default function EmailConfirmed() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="bg-grid" />
      <div className="bg-glow" />

      {/* Header */}
      <header className="w-full px-6 py-6 sm:px-8 sm:py-8">
        <div className="max-w-6xl mx-auto flex justify-start items-center">
          <div className="text-xl sm:text-2xl font-semibold tracking-tight">
            Epiphany AI
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-8">
        <div className="max-w-2xl mx-auto w-full text-center space-y-8 py-10">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium">
              Email Confirmed!
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70">
              Your email has been successfully verified. You can now close this window and return to the app.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm sm:text-base font-semibold rounded-full bg-white text-black shadow-xl hover:opacity-90 transition-all"
            >
              Back to Home
            </a>
            <a
              href="/#download"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm sm:text-base rounded-full border border-foreground/15 hover:border-foreground/30 transition-colors"
            >
              Download App
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-10 sm:px-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <div>
            © 2025 Epiphany AI
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

