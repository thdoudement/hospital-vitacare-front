import type { Metadata } from "next";
import { getSpecialties } from "@/lib/api";
import { services as fallbackServices } from "@/data/services";
import AgendamentoForm from "./AgendamentoForm";

export const metadata: Metadata = {
  title: "Agendamento",
  description: "Agende sua consulta no VitaCare Hospital.",
};

export default async function AgendamentoPage() {
  let specialties = fallbackServices.map(({ id, title, description, slug }) => ({
    id,
    title,
    description,
    slug,
  }));

  try {
    specialties = await getSpecialties();
  } catch {
    // fallback to static data when API is offline
  }

  return <AgendamentoForm specialties={specialties} />;
}
