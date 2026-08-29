import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Users, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
              <Shield className="size-4 text-primary-300" aria-hidden="true" />
              Acreditação ONA Nível 3
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Cuidado humanizado com{" "}
              <span className="text-primary-300">excelência médica</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              No VitaCare, unimos tecnologia de ponta e atendimento acolhedor para
              cuidar de você e da sua família — do check-up preventivo à emergência
              24 horas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/agendamento" size="lg">
                Agendar consulta
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="/servicos" variant="outline-light" size="lg">
                Ver especialidades
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-primary-400" aria-hidden="true" />
                Hospital referência
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-primary-400" aria-hidden="true" />
                +120 especialistas
              </div>
            </div>
          </div>

          <div className="relative mt-10 block overflow-hidden rounded-2xl lg:hidden">
            <div className="relative aspect-[16/9]">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                alt="Ambiente hospitalar moderno do VitaCare"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20">
                <p className="text-sm font-medium text-primary-200">Pronto-socorro 24h</p>
                <p className="text-lg font-bold">Emergência com equipe especializada</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                alt="Corredor moderno de hospital com equipe médica"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary-900/95 via-secondary-900/40 to-secondary-900/20"
                aria-hidden="true"
              />

              <div className="absolute left-6 top-6 flex flex-col gap-3">
                <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur-md ring-1 ring-white/20">
                  <div className="flex items-center gap-2 text-primary-200">
                    <Activity className="size-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Emergência
                    </span>
                  </div>
                  <p className="mt-1 text-lg font-bold">24 horas</p>
                </div>
                <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur-md ring-1 ring-white/20">
                  <p className="text-2xl font-bold">180</p>
                  <p className="text-xs text-slate-300">Leitos hospitalares</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20">
                  <div className="flex items-center gap-2 text-primary-200">
                    <Clock className="size-4" aria-hidden="true" />
                    <p className="text-sm font-medium">Pronto-socorro</p>
                  </div>
                  <p className="mt-1 text-2xl font-bold">Atendimento imediato</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Equipe multidisciplinar pronta para urgências e emergências, com
                    UTI adulto, pediátrica e neonatal.
                  </p>
                  <Link
                    href="/contato"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-300 transition-colors hover:text-white"
                  >
                    Como chegar
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
