import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSpecialties } from "@/lib/api";
import { getServiceIcon } from "@/lib/service-icons";
import { services as fallbackServices } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ApiSpecialty } from "@/types/api";

async function loadSpecialties(): Promise<ApiSpecialty[]> {
  try {
    return await getSpecialties();
  } catch {
    return fallbackServices.map(({ id, title, description, slug }) => ({
      id,
      title,
      description,
      slug,
    }));
  }
}

export async function Services() {
  const specialties = await loadSpecialties();

  return (
    <section className="py-16 lg:py-24" aria-labelledby="services-title">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Especialidades
            </p>
            <h2 id="services-title" className="section-title mt-2">
              Serviços médicos completos
            </h2>
            <p className="section-subtitle">
              Estrutura integrada para diagnóstico, tratamento e acompanhamento em
              diversas áreas da medicina.
            </p>
          </div>
          <Button href="/servicos" variant="outline">
            Ver todos os serviços
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.slice(0, 8).map((service) => {
            const Icon = getServiceIcon(service.slug);
            return (
              <Card key={service.id} hover className="flex flex-col">
                <div
                  className="inline-flex w-fit rounded-xl bg-primary-50 p-3 text-primary-700"
                  aria-hidden="true"
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-semibold text-secondary-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary-600">
                  {service.description}
                </p>
                <Link
                  href={`/servicos#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Saiba mais
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
