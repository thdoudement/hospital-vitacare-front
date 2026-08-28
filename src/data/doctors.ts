export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  crm: string;
  bio: string;
  initials: string;
  color: string;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dra. Ana Beatriz Mendes",
    specialty: "Cardiologia",
    crm: "CRM-SP 123456",
    bio: "Especialista em cardiologia intervencionista com mais de 15 anos de experiência.",
    initials: "AB",
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: "2",
    name: "Dr. Carlos Eduardo Lima",
    specialty: "Neurologia",
    crm: "CRM-SP 234567",
    bio: "Referência em tratamento de AVC e distúrbios neurodegenerativos.",
    initials: "CL",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "3",
    name: "Dra. Fernanda Oliveira",
    specialty: "Pediatria",
    crm: "CRM-SP 345678",
    bio: "Dedicada ao cuidado integral de crianças e adolescentes.",
    initials: "FO",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "4",
    name: "Dr. Ricardo Santos",
    specialty: "Ortopedia",
    crm: "CRM-SP 456789",
    bio: "Especialista em cirurgia do joelho e medicina esportiva.",
    initials: "RS",
    color: "bg-emerald-100 text-emerald-700",
  },
];
