export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#151515]/10 bg-[#F7F7F2]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5" aria-label="PARTIU">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B8F23D]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 19L19 5" />
              <path d="M9 5h10v10" />
            </svg>
          </span>
          <span className="text-xl font-extrabold tracking-tight text-[#151515]">
            PARTIU
          </span>
        </a>

        <a
          href="#como-funciona"
          className="rounded-full border border-[#151515]/15 px-4 py-2 text-sm font-medium text-[#151515] transition-colors hover:border-[#151515] hover:bg-[#151515] hover:text-[#F7F7F2]"
        >
          Como funciona
        </a>
      </div>
    </nav>
  );
}