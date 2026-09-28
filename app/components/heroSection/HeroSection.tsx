const exemplos = [
  { tipo: "Cultura", lugar: "Centro", preco: "R$ 0", rotate: "-rotate-2" },
  { tipo: "Natureza", lugar: "Zona Sul", preco: "R$ 25", rotate: "rotate-1 md:translate-x-8" },
  { tipo: "Comida", lugar: "Liberdade", preco: "R$ 60", rotate: "-rotate-1" },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#151515]">
            <span className="h-2 w-2 rounded-full bg-[#B8F23D] ring-1 ring-[#151515]" />
            Descubra São Paulo
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-[#151515] md:text-7xl">
            O que fazer em São Paulo{" "}
            <span className="rounded-lg bg-[#B8F23D] px-2">
              sem passar horas
            </span>{" "}
            pesquisando?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#151515]/70">
            Conte onde você quer ir, quanto pretende gastar, com quem vai e
            quando. A gente pesquisa algumas opções e reúne as informações
            importantes para você decidir.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pedido"
              className="inline-block rounded-lg bg-[#B8F23D] px-6 py-4 text-center font-semibold text-[#151515] shadow-[4px_4px_0_#151515] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#151515]"
            >
              Encontrar um rolê →
            </a>

            <p className="text-sm text-[#151515]/60">
              Pesquisa feita manualmente, por pessoas.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-4" aria-hidden="true">
          {exemplos.map((item) => (
            <div
              key={item.tipo}
              className={`flex items-center justify-between rounded-2xl border border-[#151515]/10 bg-white px-5 py-4 shadow-sm ${item.rotate}`}
            >
              <div>
                <p className="text-lg font-bold text-[#151515]">{item.tipo}</p>
                <p className="text-sm text-[#151515]/60">{item.lugar}</p>
              </div>
              <span className="rounded-full bg-[#B8F23D] px-3 py-1 text-sm font-semibold text-[#151515]">
                {item.preco}
              </span>
            </div>
          ))}

          <p className="text-center text-xs text-[#151515]/50">
            Exemplos ilustrativos
          </p>
        </div>
      </div>
    </section>
  );
}