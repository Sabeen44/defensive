export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Defensive Driving School. All rights
          reserved.
        </p>
        <p className="mt-1">Washington State Licensed Driving School</p>
      </div>
    </footer>
  )
}
