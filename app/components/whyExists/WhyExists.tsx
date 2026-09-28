const doubts = [
  "Quanto custa?",
  "Está aberto?",
  "Precisa reservar?",
  "Como chega?",
  "É acessível?",
  "O que realmente tem lá?",
];

export default function WhyExists() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#151515]">
          <span className="h-2 w-2 rounded-full bg-[#B8F23D] ring-1 ring-[#151515]" />
          Por que existe?
        </p>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#151515] md:text-6xl">
          Encontrar um lugar é fácil.
          <br />
          Saber se{" "}
          <span className="rounded-lg bg-[#B8F23D] px-2">vale a pena ir</span>{" "}
          é outra história.
        </h2>

        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-[#151515]/70">
          <p>
            Você encontra um lugar no Instagram, TikTok ou Google. Mas então
            começam as dúvidas.
          </p>

          <p className="border-l-4 border-[#B8F23D] pl-5 text-xl font-semibold leading-9 text-[#151515]">
            {doubts.map((doubt, index) => (
              <span key={doubt}>
                {doubt}
                {index < doubts.length - 1 && " "}
              </span>
            ))}
          </p>

          <p>
            O PARTIU existe para juntar essas informações e facilitar a sua
            decisão antes de você sair de casa.
          </p>
        </div>
      </div>
    </section>
  );
}