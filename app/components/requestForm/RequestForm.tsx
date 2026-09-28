"use client";

import { FormEvent, useState } from "react";

const field =
  "w-full rounded-xl border border-[#151515]/15 bg-[#F7F7F2] px-4 py-3.5 text-base text-[#151515] placeholder:text-[#151515]/40 outline-none transition-colors focus:border-[#151515] focus:bg-white focus:ring-4 focus:ring-[#B8F23D]";

const label = "mb-2 block text-sm font-semibold text-[#151515]";

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="pedido" className="scroll-mt-16 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#151515]/10 bg-white p-10 text-center shadow-[6px_6px_0_#151515]">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B8F23D]">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#151515"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#151515]">
            Pedido recebido.
          </h2>

          <p className="mt-4 text-[#151515]/70">
            Agora vamos pesquisar algumas opções que façam sentido para você.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="pedido" className="scroll-mt-16 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#151515]">
            <span className="h-2 w-2 rounded-full bg-[#B8F23D] ring-1 ring-[#151515]" />
            Seu próximo rolê
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#151515] md:text-5xl">
            O que você está{" "}
            <span className="rounded-lg bg-[#B8F23D] px-2">procurando?</span>
          </h2>

          <p className="mt-4 text-[#151515]/70">
            Quanto mais contexto você passar, melhor conseguimos pesquisar.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-[#151515]/10 bg-white p-6 shadow-[6px_6px_0_#151515] md:p-10"
        >
          <div>
            <label htmlFor="location" className={label}>
              Onde você quer ir?
            </label>

            <input
              id="location"
              name="location"
              type="text"
              placeholder="Ex: Zona Leste, Centro, perto do metrô..."
              required
              className={field}
            />
          </div>

          <div>
            <label htmlFor="budget" className={label}>
              Quanto pretende gastar?
            </label>

            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="Ex: até R$50 por pessoa"
              required
              className={field}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="company" className={label}>
                Com quem você vai?
              </label>

              <select
                id="company"
                name="company"
                required
                defaultValue=""
                className={field}
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="sozinho">Sozinho</option>
                <option value="casal">Casal</option>
                <option value="amigos">Amigos</option>
                <option value="familia">Família</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className={label}>
                Quando?
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                className={field}
              />
            </div>
          </div>

          <div>
            <label htmlFor="type" className={label}>
              Que tipo de rolê você procura?
            </label>

            <input
              id="type"
              name="type"
              type="text"
              placeholder="Ex: cultura, natureza, comida, festa..."
              className={field}
            />
          </div>

          <div>
            <label htmlFor="notes" className={label}>
              Tem algo importante que devemos considerar?
            </label>

            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Ex: preciso de acessibilidade, não quero lugares muito cheios..."
              className={`${field} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#B8F23D] px-6 py-4 text-base font-semibold text-[#151515] shadow-[4px_4px_0_#151515] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#151515]"
          >
            Encontrar opções →
          </button>
        </form>
      </div>
    </section>
  );
}