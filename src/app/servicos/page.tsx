import type { Metadata } from "next";
import { getSpecialties } from "@/lib/api";
import { getServiceIcon } from "@/lib/service-icons";
import { services as fallbackServices } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça as especialidades e serviços médicos do VitaCare Hospital.",
};

export default async function ServicosPage() {
  let specialties = fallbackServices.map(({ id, title, description, slug }) => ({
    id,
    title,
    description,
    slug,
  }));

  try {
    specialties = await getSpecialties();
  } catch {
    // fallback
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-16 text-white">
        <div className="section-container">
          <h1 className="text-4xl font-bold sm:text-5xl">Serviços e especialidades</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Estrutura completa para diagnóstico, tratamento e internação em diversas
            áreas da medicina.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            {specialties.map((service) => {
              const Icon = getServiceIcon(service.slug);
              return (
                <Card
                  key={service.id}
                  id={service.slug}
                  hover
                  className="scroll-mt-24"
                >
                  <div className="flex gap-4">
                    <div
                      className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
                      aria-hidden="true"
                    >
                      <Icon className="size-7" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-secondary-900">
                        {service.title}
                      </h2>
                      <p className="mt-2 leading-relaxed text-secondary-600">
                        {service.description}
                      </p>
                      <Button href="/agendamento" variant="ghost" size="sm" className="mt-4 px-0">
                        Agendar nesta especialidade →
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
