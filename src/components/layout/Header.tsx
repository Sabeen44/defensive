export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="/" className="font-display text-xl text-zinc-900">
          Defensive Driving
        </a>
        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#classes" className="hover:text-zinc-900">
            Classes
          </a>
          <a href="#btw" className="hover:text-zinc-900">
            Behind-the-Wheel
          </a>
          <a
            href="#enroll"
            className="rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
          >
            Enroll Now
          </a>
        </nav>
      </div>
    </header>
  )
}
