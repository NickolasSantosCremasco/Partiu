const steps = [
  {
    number: "01",
    title: "Você conta o contexto",
    description:
      "Diga onde quer ir, quanto pretende gastar, com quem vai e quando.",
  },
  {
    number: "02",
    title: "A gente pesquisa",
    description:
      "Buscamos opções e conferimos as informações importantes antes de indicar.",
  },
  {
    number: "03",
    title: "Você decide",
    description:
      "Receba as opções organizadas e escolha o que realmente faz sentido para você.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#151515]">
            <span className="h-2 w-2 rounded-full bg-[#B8F23D] ring-1 ring-[#151515]" />
            Como funciona
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#151515] md:text-5xl">
            Do pedido ao rolê em{" "}
            <span className="rounded-lg bg-[#B8F23D] px-2">3 passos.</span>
          </h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-extrabold leading-none tracking-tighter text-[#151515] md:text-7xl">
                  {step.number}
                </span>
                <span className="h-0.5 flex-1 bg-[#151515]" />
                {index < steps.length - 1 && (
                  <span
                    className="hidden text-2xl text-[#151515] md:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#151515] md:text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-[#151515]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}