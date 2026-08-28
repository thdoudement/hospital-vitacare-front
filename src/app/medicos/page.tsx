import type { Metadata } from "next";
import { doctors } from "@/data/doctors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Médicos",
  description: "Conheça o corpo clínico do VitaCare Hospital.",
};

export default function MedicosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 to-primary-900 py-16 text-white">
        <div className="section-container">
          <h1 className="text-4xl font-bold sm:text-5xl">Corpo clínico</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Médicos especialistas com formação sólida e comprometimento com o
            cuidado humanizado.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Card key={doctor.id} hover>
                <div className="flex items-start gap-4">
                  <div
                    className={`flex size-16 shrink-0 items-center justify-center rounded-full text-xl font-bold ${doctor.color}`}
                    aria-hidden="true"
                  >
                    {doctor.initials}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-secondary-900">
                      {doctor.name}
                    </h2>
                    <p className="font-medium text-primary-600">{doctor.specialty}</p>
                    <p className="text-xs text-secondary-500">{doctor.crm}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-secondary-600">
                  {doctor.bio}
                </p>
                <Button href="/agendamento" size="sm" className="mt-4 w-full">
                  Agendar consulta
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
