import { ArrowRight } from "lucide-react";
import { getDoctors } from "@/lib/api";
import { getDoctorColor, getDoctorInitials } from "@/lib/doctor-utils";
import { doctors as fallbackDoctors } from "@/data/doctors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ApiDoctor } from "@/types/api";

async function loadDoctors(): Promise<ApiDoctor[]> {
  try {
    return await getDoctors();
  } catch {
    return fallbackDoctors.map(({ id, name, specialty, crm, bio }) => ({
      id,
      name,
      specialty,
      crm,
      bio,
    }));
  }
}

export async function Doctors() {
  const doctors = await loadDoctors();

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
          {doctors.slice(0, 4).map((doctor) => {
            const color = getDoctorColor(doctor.id);
            const initials = getDoctorInitials(doctor.name);
            return (
              <Card key={doctor.id} hover className="text-center">
                <div
                  className={`mx-auto flex size-20 items-center justify-center rounded-full text-2xl font-bold ${color}`}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <h3 className="mt-4 font-semibold text-secondary-900">{doctor.name}</h3>
                <p className="text-sm font-medium text-primary-600">{doctor.specialty}</p>
                <p className="mt-1 text-xs text-secondary-500">{doctor.crm}</p>
                <p className="mt-3 text-sm leading-relaxed text-secondary-600">
                  {doctor.bio}
                </p>
              </Card>
            );
          })}
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
