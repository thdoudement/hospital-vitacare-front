import { CheckCircle2 } from "lucide-react";
import { stats } from "@/data/testimonials";

const highlights = [
  "Centro cirúrgico com tecnologia de última geração",
  "UTI adulto, pediátrica e neonatal",
  "Laboratório e diagnóstico por imagem integrados",
  "Programa de humanização e acompanhamento familiar",
];

export function About() {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="about-title">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100">
              <div className="flex h-full items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-6 text-center shadow-sm"
                    >
                      <p className="text-3xl font-bold text-primary-700">{stat.value}</p>
                      <p className="mt-1 text-sm text-secondary-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Sobre nós
            </p>
            <h2 id="about-title" className="section-title mt-2">
              Tradição e inovação a serviço da saúde
            </h2>
            <p className="section-subtitle">
              Há mais de três décadas, o VitaCare Hospital é referência em
              atendimento hospitalar na região, combinando corpo clínico
              qualificado com infraestrutura moderna.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary-600"
                    aria-hidden="true"
                  />
                  <span className="text-secondary-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
