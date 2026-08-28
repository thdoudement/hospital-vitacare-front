import { ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Doctors() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="doctors-title">
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Corpo clínico
          </p>
          <h2 id="doctors-title" className="section-title mt-2">
            Médicos especialistas
          </h2>
          <p className="section-subtitle mx-auto">
            Profissionais experientes e dedicados, prontos para oferecer o melhor
            cuidado em cada especialidade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Card key={doctor.id} hover className="text-center">
              <div
                className={`mx-auto flex size-20 items-center justify-center rounded-full text-2xl font-bold ${doctor.color}`}
                aria-hidden="true"
              >
                {doctor.initials}
              </div>
              <h3 className="mt-4 font-semibold text-secondary-900">{doctor.name}</h3>
              <p className="text-sm font-medium text-primary-600">{doctor.specialty}</p>
              <p className="mt-1 text-xs text-secondary-500">{doctor.crm}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary-600">
                {doctor.bio}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/medicos" variant="outline">
            Conhecer todos os médicos
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
