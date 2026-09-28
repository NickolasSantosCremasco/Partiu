export default function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#151515] px-6 py-16 text-center md:px-12 md:py-20">
        <span
          className="absolute -right-6 -top-6 flex h-28 w-28 rotate-12 items-center justify-center rounded-3xl bg-[#B8F23D] md:h-36 md:w-36"
          aria-hidden="true"
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#151515"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 19L19 5" />
            <path d="M9 5h10v10" />
          </svg>
        </span>

        <h2 className="relative text-4xl font-extrabold tracking-tight text-[#F7F7F2] md:text-6xl">
          Então, <span className="text-[#B8F23D]">partiu?</span>
        </h2>

        <p className="relative mx-auto mt-5 max-w-xl text-lg text-[#F7F7F2]/70">
          Conte o que você está procurando e deixe a pesquisa com a gente.
        </p>

        <a
          href="#pedido"
          className="relative mt-10 inline-block rounded-xl bg-[#B8F23D] px-8 py-4 text-base font-semibold text-[#151515] shadow-[4px_4px_0_#F7F7F2] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#F7F7F2]"
        >
          Encontrar meu próximo rolê →
        </a>
      </div>
    </section>
  );
}