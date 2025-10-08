import Image from "next/image";

import screenshot from "../public/app-screenshot.png";

export default function Home() {
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
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center py-10 sm:py-16">
          {/* Left: Headline + CTA */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="hero-title text-4xl sm:text-6xl leading-[0.95] font-medium">
                <span className="stroke-text">Understand</span> what
                <br />
                others overlook
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 max-w-lg">
                A conversational PDF workspace that cites the page it thinks with.
                Ask questions, cross‑reference, and extract insights without the scroll.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" id="download">
              <a
                href="https://github.com/mattbeckstrand/Epiphany_download/releases/download/v.0.0/Epiphany-AI.10.dmg" 
                className="shine inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm sm:text-base font-semibold rounded-full bg-white text-black shadow-xl hover:opacity-90 transition-all whitespace-nowrap"
              >
                macOS download
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5" fill="currentColor">
                  <path d="M12 3a1 1 0 011 1v11.586l3.293-3.293a1 1 0 011.414 1.414l-5.007 5.007a1 1 0 01-1.414 0L6.279 13.707a1 1 0 011.414-1.414L11 13.586V4a1 1 0 011-1z"/>
                  <path d="M5 20a1 1 0 110-2h14a1 1 0 110 2H5z"/>
                </svg>
              </a>
              <a href="https://github.com/mattbeckstrand/Epiphany_download/releases/download/v.0.0/Epiphany-AI-Setup-x64.exe" className="inline-flex items-center念justify-center gap-2 px-6 py-2.5 text-sm sm:text-base rounded-full border border-foreground/15 hover:border-foreground/30 transition-colors whitespace-nowrap">
                Windows/Linux download
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5" fill="currentColor">
                  <path d="M12 3a1 1 0 011 1v11.586l3.293-3.293a1 1 0 011.414 1.414l-5.007 5.007a1 1 0 01-1.414 0L6.279 13.707a1 1 0 011.414-1.414L11 13.586V4a1 1 0 011-1z"/>
                  <path d="M5 20a1 1 0 110-2h14a1 1 0 110 2H5z"/>
                </svg>
              </a>
            </div>

            
          </div>

          {/* Right: App screenshot only */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl">
              <Image
                src={screenshot}
                alt="Epiphany AI reading and chatting with a PDF"
                width={1600}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
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
