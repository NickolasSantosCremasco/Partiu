const details = [
  { icon: "📍", label: "Local", value: "Centro" },
  { icon: "🕐", label: "Horário", value: "Sábado · 10h às 18h" },
  { icon: "🚇", label: "Como chegar", value: "7 min do metrô" },
  { icon: "♿", label: "Acessibilidade", value: "Verificada na fonte oficial" },
];

export default function ExampleRecommendation() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#151515]">
            <span className="h-2 w-2 rounded-full bg-[#B8F23D] ring-1 ring-[#151515]" />
            Um exemplo
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#151515] md:text-5xl">
            Você recebe as informações que{" "}
            <span className="rounded-lg bg-[#B8F23D] px-2">precisa</span> para
            decidir.
          </h2>

          <p className="mt-4 max-w-2xl text-[#151515]/70">
            Em vez de apenas indicar um lugar, reunimos os detalhes que podem
            fazer diferença antes de você sair de casa.
          </p>
        </div>

        <div className="relative rounded-3xl border-2 border-dashed border-[#151515]/30 bg-white p-6 md:p-8">
          <span className="absolute -top-3 left-6 rounded-full bg-[#151515] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F7F7F2]">
            Exemplo de recomendação
          </span>

          <div className="flex flex-col justify-between gap-6 pt-2 md:flex-row">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#151515] md:text-3xl">
                Exposição + passeio
              </h3>

              <p className="mt-2 text-[#151515]/70">Centro de São Paulo</p>
            </div>

            <span className="h-fit w-fit rounded-full bg-[#B8F23D] px-4 py-2 text-sm font-semibold text-[#151515]">
              Gratuito
            </span>
          </div>

          <div className="mt-8 grid gap-6 border-y border-[#151515]/10 py-6 md:grid-cols-2">
            {details.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F2] text-lg"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>

                <div>
                  <span className="text-sm text-[#151515]/60">
                    {item.label}
                  </span>
                  <p className="mt-0.5 font-semibold text-[#151515]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border-l-4 border-[#B8F23D] bg-[#F7F7F2] p-4">
            <span aria-hidden="true">⚠️</span>

            <div>
              <span className="text-sm font-semibold text-[#151515]">
                Importante
              </span>

              <p className="mt-1 text-sm leading-6 text-[#151515]/70">
                Confira o horário de entrada antes de sair. Algumas informações
                podem mudar, por isso indicamos a fonte oficial.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-[#151515]/60">
              Informação verificada em fonte oficial
            </span>

            <span className="text-sm font-semibold text-[#151515] underline underline-offset-4">
              Ver fonte →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}