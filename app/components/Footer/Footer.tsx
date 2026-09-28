export default function Footer() {
  return (
    <footer className="border-t border-[#151515]/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
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
        </div>

        <p className="text-sm text-[#151515]/60 hover:text-green-500 transition">
        <a href="mailto:nck.tec.suporte@gmail">
          nck.tec.suporte@gmail
          </a>
        </p>
      </div>
    </footer>
  );
}